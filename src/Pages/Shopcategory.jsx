import React, { useContext } from "react";
import "./CSS/Shopcategory.css";
import drop_down from "../components/Assets/dropdown_icon.png";
import Item from "../components/Items/Item";
import { ShopContext } from "../context/ShopContext";

const Shopcategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out pf 36 product
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={drop_down} alt="" />
        </div>
      </div>
      <div className="shopategory-products">
        {all_product.map((item, i) => {
          if (item.category === props.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else return null;
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default Shopcategory;
