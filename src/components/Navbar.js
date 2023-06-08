import React, {useRef} from 'react';
import Logo from '../assets/images/Logo.png';
import {BiSearch} from 'react-icons/bi';
import {FaShoppingCart} from 'react-icons/fa'
import {FaBars} from 'react-icons/fa';

import {Link} from 'react-router-dom';

const Navbar = () => {
  const searchRef = useRef();
  const navRef = useRef();

  const navHandler = () => {
    navRef.current. classList.toggle("active");
    searchRef.current. classList.remove("active");
  }
  const searchHAndler = () =>{
    searchRef.current.classList.toggle("active");
    navRef.current.classList.remove("active");

  }

  return (
    <>
      <header className='header' >
    <a href="#" className='logo'>
      <img src={Logo} alt="Logo" />
    </a>
    <nav className='navbar' ref={navRef}>
      <a href="#Home">Home</a>
      <a href="#About Us">About Us </a>
      <a href="#Menu">Menu</a>
      <a href="#Contact us">Contact us</a>

    </nav>

    <div className='icons'>
      <div onClick={searchHAndler}>
        <BiSearch />
      </div>
      <div className="">
      <FaShoppingCart/>
      </div>
      <div id='menu-btn' onClick={navHandler}>
        <FaBars/>
      </div>

      <div className='search-form ' ref={searchRef}>
        <input type="search" placeholder='Search Product here...' id='search-box' />
        
      </div>

    </div>
  </header>
    </>
  
  )
}

export default Navbar