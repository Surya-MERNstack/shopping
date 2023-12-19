// import React, { useContext, useState } from "react";
// import "./Navbar.css";
// import logo from "../logo.png";
// import cart_icon from "../cart_icon.png";
// import { Link } from "react-router-dom";
// import { ShopContext } from "../../../context/ShopContext";

// const Navbar = () => {
//   const [menu, setMenu] = useState("shop");
//   const [isLoggedIn, setIsLoggedIn] = useState(true);
//   const { getTotalCartItems } = useContext(ShopContext);

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     return;
//   };

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     return
//   };

//   return (
//     <div className="navbar">
//       <div className="nav-logo">
//         <img src={logo} alt="" />
//         <p>SHOPPER</p>
//       </div>
//       <ul className="nav-menu">
//         <li
//           onClick={() => {
//             setMenu("shop");
//           }}
//         >
//           <Link style={{ textDecoration: "none" }} to="/">
//             Shop{menu === "shop" ? <hr></hr> : <></>}
//           </Link>
//         </li>
//         <li
//           onClick={() => {
//             setMenu("mens");
//           }}
//         >
//           <Link style={{ textDecoration: "none" }} to="/mens">
//             Men {menu === "mens" ? <hr></hr> : <></>}
//           </Link>
//         </li>
//         <li
//           onClick={() => {
//             setMenu("womens");
//           }}
//         >
//           <Link style={{ textDecoration: "none" }} to="/womens">
//             Women {menu === "womens" ? <hr></hr> : <></>}
//           </Link>
//         </li>
//         <li
//           onClick={() => {
//             setMenu("kids");
//           }}
//         >
//           <Link style={{ textDecoration: "none" }} to="kids">
//             Kids {menu === "kids" ? <hr></hr> : <></>}
//           </Link>
//         </li>
//       </ul>
//       <div className="nav-login-cart">
//       {isLoggedIn ? (
//          <Link to="/login" style={{ textDecoration: "none" }}>
//          <button className="btn btn-primary" onClick={handleLogin}>
//            Login
//          </button>
//        </Link>
//         ) : (
//         //   <button className="btn btn-danger hover:btn btn-danger " onClick={handleLogout}>
//         //   Logout
//         // </button>
//          <p></p>
          
//         )}
//         <Link to="/cart" style={{ textDecoration: "none" }}>
//           <img src={cart_icon} alt="" srcset="" />
//         </Link>
//         <div className="nav-cart-count">{getTotalCartItems()}</div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


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
        <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration : "none"}} to='/shop'>Shop{menu === 'shop' ? <hr></hr> : <></>}</Link></li>
        <li onClick={() => {setMenu("mens")}}><Link style={{textDecoration : "none"}} to='/mens'>Men {menu === 'mens' ? <hr></hr> : <></>}</Link></li>
        <li onClick={() => {setMenu("womens")}}><Link style={{textDecoration : "none"}} to='/womens'>Women {menu === 'womens' ? <hr></hr> : <></>}</Link></li>
        <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration : "none"}} to='kids'>Kids {menu === 'kids' ? <hr></hr> : <></>}</Link></li>
      </ul>
      <div className='nav-login-cart'>
       <Link to='/' style={{textDecoration : "none"}}><button>LogOut</button></Link>
        <Link to='/cart' style={{textDecoration : "none"}}><img src={cart_icon} alt="" srcset="" /></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar