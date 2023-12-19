import React from "react";
import "../Description/DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="decriptionbox-decription">
          <p>
            E-commerce revolutionizes commerce by digitizing buying and selling.
            It offers limitless access for customers to shop globally, comparing
            products and making purchases effortlessly. For sellers, it provides
            an expansive platform to showcase goods, manage inventory, and reach
            diverse markets. This borderless marketplace empowers businesses of
            all sizes, from small enterprises to global brands. Constantly
            evolving with technology, e-commerce reshapes the shopping
            experience, marking a new era in commerce.
          </p>
          <p>
            E-commerce's adaptability and evolution through technology
            continually redefine consumer expectations, shaping the future of
            commerce.
          </p>
        </div>
    </div>
  );
};

export default DescriptionBox;
