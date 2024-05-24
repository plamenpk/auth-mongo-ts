import Link from 'next/link'
import React from 'react'

const LoginForm = () => {
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-r-4 border-green-400">
        <h1 className='text-xl my-3'>Enter the Details</h1>
        <form className='flex flex-col gap-3'>
          <input type='text' placeholder='Email'></input>
          <input type='password' placeholder='Password'></input>
          <button className='bg-green-400 hover:bg-green-500 text-white font-medium px-6 py-2 cursor-pointer'>LogIn</button>
        <div className='bg-red-500 text-white font-medium px-6 py-2 text-center'>Error</div>
        <Link className="text-sm mt-2 text-right" href={"/register"} >
          Don&apos;t have an account? <span className="underline">Register</span>
        </Link>
        </form>
      </div>
    </div>
  )
}

export default LoginForm