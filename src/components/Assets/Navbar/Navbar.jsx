import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../logo.png'
import cart_icon from '../cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../../context/ShopContext'

const Navbar = () => {

    const  [menu, setMenu] = useState('shop');
   const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration : "none"}} to='/'>Shop{menu === 'shop' ? <hr></hr> : <></>}</Link></li>
        <li onClick={() => {setMenu("mens")}}><Link style={{textDecoration : "none"}} to='/mens'>Men {menu === 'mens' ? <hr></hr> : <></>}</Link></li>
        <li onClick={() => {setMenu("womens")}}><Link style={{textDecoration : "none"}} to='/womens'>Women {menu === 'womens' ? <hr></hr> : <></>}</Link></li>
        <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration : "none"}} to='kids'>Kids {menu === 'kids' ? <hr></hr> : <></>}</Link></li>
      </ul>
      <div className='nav-login-cart'>
       <Link to='/login' style={{textDecoration : "none"}}><button>Login</button></Link>
        <Link to='/cart' style={{textDecoration : "none"}}><img src={cart_icon} alt="" srcset="" /></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
