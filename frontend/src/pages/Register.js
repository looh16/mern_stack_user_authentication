import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import axios from "axios";

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const registerUser = async () => {
    if (password === confirmPassword) {

      const userObj = {
        name,
        password,
        email,
        confirmPassword,
      };

      if (userObj) {

        try {
         // toast.loading("Loading...");
          const response = await axios.post("/api/auth/register", userObj);
          toast.dismiss();
          if (response.data.success) {
            toast.success(response.data.message);
          } else {
            toast.error(response.data.message);
          }
        } catch (error) {
          toast.dismiss();
          toast.error("Something went wrong");
        }

      }
    } else {
      toast.error("Passwords Not Matched");
    }
  };


  return (
    <div className='flex justify-center items-center h-screen'>

      <div className='w-[400px] flex space-y-5 flex-col p-5 shadow-lg border border-gray-300'>

        <h1 className='font-semibold text-3xl text-center text-primary'>Welcome</h1>

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

        <input type='password'
          className='py-1 px-3 border-2 border-secondary rounded focus:outline-none w-full'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type='password'
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