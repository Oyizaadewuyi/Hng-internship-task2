import React from 'react'
import search from "../../assets/search-icon.svg"
import cart from "../../assets/cart-icon.svg"
import "./index.css";


const Header = () => {
  return (
<header className="header">

    <nav>
        <ul>
            <li><a href="#HOME">Home</a></li>
            <li><a href="#About us">About us</a></li>
       
            <li><a href="#shop"><span>Shop</span></a></li>

 </ul>

 </nav>
<nav>
        <ul className='timbu'>
            <li><a href="#timbu">TimbuShop</a></li>
        </ul>
        </nav>
<div className='right-icon'>
        <ul className='search'>
            <img src={search} alt="" />
            </ul>
            <ul className='cart'>
            <img src={cart} alt="" />
            </ul>
            {/* <ul className='SIGNUP'>
            <li><a href="signup">Sign Up</a></li>
        </ul> */}
        <button className='Signup'>Sign Up</button>
        </div>

        <div className='hamburger-menu'>
            <div className='bar'></div>
            <div className='bar'></div>
             <div className='bar'></div>
        
        </div>
    

       
    </header>
   )
   }
export default Header
