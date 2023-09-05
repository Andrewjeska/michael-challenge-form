import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { validatePhoneOrEmail } from "../utils.ts";

interface UsernameProps {
  setValidity: Dispatch<SetStateAction<boolean>>;
  onValueChange: (username: string) => void;
}

function Username({ setValidity, onValueChange }: UsernameProps) {
  const [username, setUsername] = useState('');

  useEffect(() => {
    onValueChange(username);
  }, [username, onValueChange]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUsername(value);

    const isUsernameValid = validatePhoneOrEmail(value);
    setValidity(isUsernameValid);
  }

  return (
    <input
      placeholder='Phone or Email'
      onChange={handleInputChange}
      value={username}
    />
  );
}

export default Username;
