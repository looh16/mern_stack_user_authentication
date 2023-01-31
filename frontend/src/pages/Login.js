import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = () => {
    const userObj = {
      password, email,
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>

      <div className='w-[400px] flex space-y-5 flex-col p-5 shadow-lg border border-gray-300'>

        <h1 className='font-semibold text-3xl text-center text-primary'>Welcome Back</h1>

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

        <div className='flex justify-between items-end'>
          <Link className='underline text-secondary' to='/register'>Click Here To Register</Link>
          <button className='py-1 px-5 text-white bg-primary' onClick={loginUser}>LOGIN</button>
        </div>

      </div>



    </div>
  )
}

export default Login;