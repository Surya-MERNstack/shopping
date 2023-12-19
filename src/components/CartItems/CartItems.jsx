import React, { useContext } from "react";
import "../CartItems/CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import remove from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, CartItem, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

  console.log(CartItem)
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        console.log(CartItem[e.id] > 0);
            if(CartItem[e.id] > 0){
                return <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} alt=""  className="carticon-product-icon"/>
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className="cartitems-quantity">{CartItem[e.id]}</button>
                    <p>$ {e.new_price * CartItem[e.id]}</p>
                    <img src={remove} className="carticon-remove-icon" onClick={() => {removeFromCart(e.id)}} alt="" />
                </div>
            }

            return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>Proceed To CheckOut</button>
        </div>
        <div className="caritems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitmes-promobox">
                <input type="text" placeholder="promo code" />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
