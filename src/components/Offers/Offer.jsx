import React from 'react'
import './Offer.css'
import exlucive_img from '../Assets/exclusive_image.png'
import { Link } from 'react-router-dom'

const Offer = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
         <h1>Offers for You</h1>
         <p>Only on Best Sellers Products</p>
         <Link to='/womens'><button>Check Now</button></Link>
      </div>
      <div className="offers-right">
         <Link to='/womens'> <img src={exlucive_img} alt="" className='off_img' /></Link>
      </div>
    </div>
  )
}

export default Offer
