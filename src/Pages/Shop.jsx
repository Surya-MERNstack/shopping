import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offer from '../components/Offers/Offer'
import NewCollections from '../components/NewCollections/NewCollections'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import './CSS/Shop.css'
const Shop = () => {
  return (
    <div className='root'>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
