
import React, { useState } from 'react';
import './LoginSignUp.css';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../Firebase';
import { doc, setDoc } from 'firebase/firestore';
import Logo from '../../assets/logo.png';


function Register() {
  const [formdata, setFromData] = useState({
    fname: '', lname: '', email: '', password: ''
  })
  const [sucess, setSucess] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const HndlChange = (e) => {
    setFromData({ ...formdata, [e.target.name]: e.target.value })
  }

  const HndelSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, formdata.email, formdata.password)
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "User", user.uid), {
          email: user.email,
          // email: formdata.email,
          firstname: formdata.fname,
          lastname: formdata.lname,
          password: formdata.password,
        })
      }
      setSucess('Register Successfully')
    } catch (error) {
      setErrorMsg(error.message)
    }
  }

  return (
    <div className='LoginRegisterForm w-full h-svh text-black bg-white'>
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
            <h1 className=' text-5xl  py-3'>Register Now</h1>
            {sucess ? <p className='py-3'>{sucess} <Link to={'/login'} className='text text-red-700'>Login</Link>  </p> : ''}
          </div>
          <form onClick={HndelSubmit}>
            <div className='inputBox mb-2'>
              <span className='d block mb-1'>First Name*</span>
              <input
                type='text'
                className='p-2 w-full border rounded-md focus:border-red-700'
                onChange={HndlChange}
                value={formdata.fname}
                name='fname'
                required />
            </div>
            <div className='inputBox mb-2'>
              <span className='d block mb-1'>Last Name*</span>
              <input
                type='text'
                className='p-2 w-full border rounded-md focus:border-red-700'
                onChange={HndlChange}
                value={formdata.lname}
                name='lname'
                required />
            </div>
            <div className='inputBox mb-2'>
              <span className='d block mb-1'>Email address*</span>
              <input
                type='email'
                className='p-2 w-full border rounded-md focus:border-red-700'
                onChange={HndlChange}
                value={formdata.email}
                name='email'
                required />
            </div>
            <div className='inputBox'>
              <span className='d block'>Password*</span>
              <input
                className='p-2 w-full border rounded-md focus:border-red-700'
                type='password'
                onChange={HndlChange}
                value={formdata.password}
                name='password'
                required
              />
            </div>
            <button className='btn py-2 w-1/3 bg-red-700 text-white block mt-2 rounded-md'>Sign-In</button>
            <p>Already have an account? <Link to={'/login'} className='text text-red-700'>Login</Link> </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register