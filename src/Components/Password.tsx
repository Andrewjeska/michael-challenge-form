import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { validatePassword } from "../utils.ts";

interface PasswordProps {
  setValidity: Dispatch<SetStateAction<boolean>>;
  onValueChange: (password: string) => void;
}

function Password({ setValidity, onValueChange }: PasswordProps) {
  const [password, setPassword] = useState('');

  useEffect(() => {
    onValueChange(password);
  }, [password, onValueChange]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);

    const isPasswordValid = validatePassword(value);
    setValidity(isPasswordValid);
  }

  return (
    <input
      placeholder='Phone or Email'
      onChange={handleInputChange}
      value={password}
    />
  );
}

export default Password;
