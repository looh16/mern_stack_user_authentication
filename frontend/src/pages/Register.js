import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const registerUser = () => {
    const userObj = {
      name, password, email, confirmPassword,
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>

      <div className='w-[400px] flex space-y-5 flex-col'>

        <h1 className='font-semibold text-3xl text-center text-primary'>Welcome To MERN AUTH</h1>

        <input type='text'
          className='py-1 px-3 border-2 border-secondary rounded focus:outline-none w-full'
          placeholder='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input type='text'
          className='py-1 px-3 border-2 border-secondary rounded focus:outline-none w-full'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input type='text'
          className='py-1 px-3 border-2 border-secondary rounded focus:outline-none w-full'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type='text'
          className='py-1 px-3 border-2 border-secondary rounded focus:outline-none w-full'
          placeholder='confirm password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <div className='flex justify-between items-end'>
          <Link className='underline text-secondary' to='/login'>Click Here To Login</Link>
          <button className='py-1 px-5 text-white bg-primary' onClick={registerUser}>REGISTER</button>
        </div>

      </div>



    </div>
  )
}

export default Register