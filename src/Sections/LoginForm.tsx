import Username from "../Components/Username.tsx";
import React, { useState } from "react";
import Password from "../Components/Password.tsx";

interface LoginFormProps {
  submit: (userData: { username: string; password: string }) => void;
}

function LoginForm({ submit }: LoginFormProps) {
  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // prevent default form submission
    if (usernameValid && passwordValid) {
      submit({ username, password });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Username
        setValidity={setUsernameValid}
        onValueChange={setUsername}
      />
      <Password
        setValidity={setPasswordValid}
        onValueChange={setPassword}
      />
      <button disabled={!usernameValid || !passwordValid}>Submit</button>
    </form>
  )
}

export default LoginForm;
