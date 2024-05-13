import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import '../LoginSignUp/LoginSignUp.css'

import { Link } from 'react-router-dom'

function Login() {

  const [formdata, setFromData] = useState({
    email: '', password: ''
  })

  const HndlChange = (e) => {
    setFromData({ ...formdata, [e.target.name]: e.target.value })
  }

  const HndelSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='LoginSignUpForm w-full h-svh text-black bg-white'>
      <div className='devider_div flex flex-wrap justify-between items-center'>

        <div className='leftSide lg:w-[70%] lg:block hidden'>
          <img src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" alt="img" loading='lazy' />
        </div>

        <div className='from_div p-5 lg:w-[30%] sm:w-[100%]'>
          <div className='Headings_div'>
            <img
              src={Logo}
              loading='lazy'
              className='w w-1/2'
            />
            <h1 className=' text-5xl  py-3'>Login Here</h1>
          </div>
          <form onClick={HndelSubmit}>
            <div className='inputBox mb-2'>
              <span className='d block mb-1'>Email address*</span>
              <input
                type='email'
                className='p-2 w-full border rounded-md focus:border-red-700'
                value={formdata.email}
                name='email'
                onChange={HndlChange}
                required />
            </div>
            <div className='inputBox'>
              <span className='d block'>Password*</span>
              <input
                className='p-2 w-full border rounded-md focus:border-red-700'
                type='password'
                value={formdata.password}
                name='password'
                onChange={HndlChange}
                required
              />
            </div>
            <button className='btn py-2 w-1/3 bg-red-700 text-white block mt-2 rounded-md'>Login</button>
            <p>Don't have an account? <Link to={'/Register'} className='text text-red-700'>Register</Link> </p>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login;
