// import React from 'react'
// import '../Breedcrums/Breedcrum.css'
// import arrow_icon from '../Assets/breadcrum_arrow.png'

// const Breedcrum = (props) => {
//   const {product} = props
//   return (
//     <div className='breedcrum'>
//     Home <img src={arrow_icon} alt=""/> SHOP <img src={arrow_icon} alt=""  /> {product.category} <img src={arrow_icon} alt="" /> {product.name}

//     </div>
//   )
// }

// export default Breedcrum


import React from 'react';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breedcrum = (props) => {
  const { product } = props;

  return (
    <nav aria-label="breadcrumb" className="container mt-4">
      <ol className="breadcrumb bg-transparent">
        <li className="breadcrumb-item"><a href="/">Home</a></li>
        <li className="breadcrumb-item">
          <a href="/shop">SHOP</a>
        </li>
        <li className="breadcrumb-item">
          <a href={`/category/${product.category}`}>{product.category}</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
      </ol>
    </nav>
  );
};

export default Breedcrum;
