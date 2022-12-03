import React from 'react';
import './navbar.css';  
import About from './../about/about';

const Navbar=()=> {
  const navRef = React.useRef();
  
  const handleClick = () => {
    navRef.current.classList.toggle("nav_open");
  };
  return (
    <>
      <nav>
        <div className='navbar' ref={navRef}>
          <h2><a href='/'>WOSA</a></h2>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/'>Contact Us</a>
          </li>
        </div>
      </nav>
    </>
  );
}

export default Navbar;