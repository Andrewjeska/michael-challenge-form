import React, { useState } from "react";
import { validatePassword, validatePhoneOrEmail } from "../utils.ts";

interface LoginFormProps {
  submit: (userData: { username: string; password: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ submit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
