import { useState } from 'react'
import './App.css'
import LoginForm from "./Sections/LoginForm.tsx";

export interface user {
  username: string
  password: string;
}

export type users = user[];

const mockUsers = [
  { username: 'theo@gmail.com', password: 'ABC123dasdasd' },
  { username: '+4917641684626', password: 'AsadaABC123dasdasd' },
]

function App() {
  const [users, setUsers] = useState<users>(mockUsers)

  const onSubmit = (user: user) => {
    const matches = users.find(u => u.username === user.username && u.password === user.password);
    console.log(user, matches);
  }

  return (
    <>
      <LoginForm submit={onSubmit} />
    </>
  )
}

export default App
