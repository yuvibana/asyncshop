import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'

function Header() {
  return (
    <header className='header px-[15px] py-[8px]'>
      <div className='flex_div flex items-center justify-between text-white'>
        <Link to={'/'}>
          <img src={Logo} />
        </Link>
        <nav className='navmenu flex gap-x-5'>
          <Link to="home" className='text-1xl capitalize'>Home</Link>
          <Link to="#" className='text-1xl capitalize'>Shop Now</Link>
          <Link to="#" className='text-1xl capitalize'>Collection</Link>
          <Link to="#" className='text-1xl capitalize'>Men's </Link>
          <Link to="#" className='text-1xl capitalize'>women's </Link>
          <Link to="/profile" className='text-1xl capitalize'>Profile</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header