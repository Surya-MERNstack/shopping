// import React from 'react'
// import './Popular.css'
// import data_product from '../Assets/data';
// import Item from '../Items/Item';


// const Popular = () => {
//   return (
//     <div className='popular'>
//       <h1>POPULAR IN WOMEN</h1>
//       <hr />
//       <div className="popular-item">
//         {data_product.map((item, i) => {
//             return <Item key={i} id = {item.id} name ={item.name} image = {item.image} new_price ={item.new_price} old_price ={item.old_price}/>
//         })}
//       </div>
//     </div>
//   )
// }

// export default Popular



// import React from 'react';
// import { Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import data_product from '../Assets/data';
// import Item from '../Items/Item';

// const Popular = () => {
//   return (
//     <div className='popular'>
//       <h1>POPULAR IN WOMEN</h1>
//       <hr />
//       <Carousel controls={false} indicators={false} interval={2000}>
//         {data_product.map((item, i) => (
//           <Carousel.Item key={i}>
//             <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default Popular;


import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import data_product from '../Assets/data';
import Item from '../Items/Item';
import './Popular.css'; // Your custom styles for the Popular component
const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="carousel-container">
        <Carousel controls={false} indicators={false} interval={2000}>
          {data_product.map((item, i) => (
            <Carousel.Item key={i}>
              <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Popular;
