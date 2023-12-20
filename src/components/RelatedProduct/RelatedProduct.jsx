// import React from "react";
// import "../RelatedProduct/RelatedProduct.css";
// import data_product from "../Assets/data";
// import Item from "../Items/Item";
// const RelatedProduct = () => {
//   return (
//     <div className="relatedproduct">
//       <h1>Related Product</h1>
//       <hr />
//       <div className="relatedproduct-item">
//         {data_product.map((item, i) => {
//           return (
//             <Item
//               key={i}
//               id={item.id}
//               name={item.name}
//               image={item.image}
//               new_price={item.new_price}
//               old_price={item.old_price}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default RelatedProduct;



import React from "react";
import "../RelatedProduct/RelatedProduct.css";
import { Carousel } from "react-bootstrap";
import data_product from "../Assets/data";
import Item from "../Items/Item";

const RelatedProduct = () => {
  return (
    <div className="relatedproduct">
      <h1>Related Product</h1>
      <hr />
      <Carousel controls={false} indicators={false} className="carsoul" interval={2000}>
        {data_product.map((item, i) => {
          return (
            <Carousel.Item key={i} className="car_1">
              <Item
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default RelatedProduct;
