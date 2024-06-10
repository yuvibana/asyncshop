import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import Bag from '../../assets/bag.svg'
import User from '../../assets/user.svg'
import { useSelector } from 'react-redux'

function Header() {
  const { totalQuantity } = useSelector(state => state.cart);

  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScrolll = () => {
      if (window.scrollY > 50) setIsScrolled(true)
      else setIsScrolled(false)
    }
    window.addEventListener('scroll', handleScrolll);
    return () => {
      window.removeEventListener('scroll', handleScrolll)
    }
  }, []);

  return (
    <header className={`app_header px-[15px] py-[8px] shadow ${isScrolled ? 'active bg-white' : ''}`}>
      <div className='flex_div container flex items-center justify-between text-black'>
        <Link to={'/'}> <img src={Logo} className='w-[123px] sm:w-auto' alt='Logo' /></Link>
        <nav className='navmenu flex items-center gap-x-5'>
          <Link to="home" className='text-1xl capitalize'>Shop Now</Link>
          <Link to="/profile" className='text-1xl capitalize'> <img src={User} className='w-[25px]' /> </Link>
          <Link to="../cart" className='text-1xl capitalize relative'>
            <img src={Bag} className='w-[25px]' alt="" />
            <span
              className='cart_count absolute bg-red-700 rounded-sm text-white block px-2 sm:px-1 lg:top-[-17px] lg:right-[-15px] right-[-8px] top-[-5px]'
            >{totalQuantity}</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header