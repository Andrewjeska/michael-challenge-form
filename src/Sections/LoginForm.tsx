import React, { useState, useEffect } from "react";
import { validatePassword, validatePhoneOrEmail } from "../utils.ts";

interface LoginFormProps {
  submit: (userData: { username: string; password: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ submit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // these state variables are changing every time the user types, which is not great
  // extra credit: what function could you use to reduce re-rendering?
  // hint: It's part of the lodash library

  // regex validation is pretty cheap computationally, so it's fine to do this
  // extra credit: what hook could you use if validation was expensive?
  const isPasswordValid = validatePassword(password);
  const isUsernameValid = validatePhoneOrEmail(username);
  const isFormValid = isPasswordValid && isUsernameValid;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // prevent default form submission
    if (isFormValid) {
      submit({ username, password });
    }
  };

  const showUsernameError = !isUsernameValid && username.length > 0;
  const showPasswordError = !isPasswordValid && password.length > 0;

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "25vw",
        }}
      >
        {/* Mention that if you had more time, you would show better error messages */}
        {/* how else would you improve the UX? */}
        {showUsernameError && <p style={{ color: "red" }}>Invalid username</p>}
        <input
          placeholder="Phone or Email"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          disabled={isFormValid}
        />
        {showPasswordError && <p style={{ color: "red" }}>Invalid password </p>}
        <input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          disabled={isFormValid}
        />
        <button disabled={isFormValid}>Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
