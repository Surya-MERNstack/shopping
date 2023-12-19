import React from 'react'
import '../Breedcrums/Breedcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breedcrum = (props) => {
  const {product} = props
  return (
    <div className='breedcrum'>
    Home <img src={arrow_icon} alt=""/> SHOP <img src={arrow_icon} alt=""  /> {product.category} <img src={arrow_icon} alt="" /> {product.name}

    </div>
  )
}

export default Breedcrum
