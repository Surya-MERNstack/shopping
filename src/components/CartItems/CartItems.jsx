import React, { useContext, useState } from "react";
import "../CartItems/CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import remove from "../Assets/cart_cross_icon.png";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const { all_product, CartItem, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

    const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "NOn-me",
    price: getTotalCartAmount(),
    productBy: "Glass",
  });

  const handleReload = () => {
    setTimeout(() => {
      window.location.reload()
    },0)
  }

  

  const makingPayment = async (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "content-type": "application/json",
    };

    try {
      const response = await fetch("http://localhost:4000/payment", {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });
     
      if (response.ok) {
        window.location.reload();
        setTimeout(() => {
          navigate('/shop')
        },0)
      } else {
        console.log("Payment unsuccessful");
      }
    } catch (error) {
      window.location.reload();
      setTimeout(() => {
        navigate('/shop')
      },0)
      console.log(error);
    }
  };

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
        if (CartItem[e.id] > 0) {
          return (
            <div className="cartitems-format cartitems-format-main">
              <img src={e.image} alt="" className="carticon-product-icon" />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className="cartitems-quantity">{CartItem[e.id]}</button>
              <p>$ {e.new_price * CartItem[e.id]}</p>
              <img
                src={remove}
                className="carticon-remove-icon"
                onClick={() => {
                  removeFromCart(e.id);
                }}
                alt=""
              />
            </div>
          );
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
          <>
            <StripeCheckout
              name="Shopping"
              amount={getTotalCartAmount()}
              currency="US"
              token={makingPayment}
              stripeKey="pk_test_51NpOMnSBSV95ygGwcPRVQgt6H4Mx9XThjGslMHhsx7Em8kAhyHORS565YSrmWdjcmWp0unTWOc0OibxbrxYJ1t2k00q4oanZQe"
            >
              <button >Proceed To CheckOut ${getTotalCartAmount()}</button>
            </StripeCheckout>
          </>
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








// import React, { useContext, useState } from "react";
// import { ShopContext } from "../../context/ShopContext";
// import remove from "../Assets/cart_cross_icon.png";
// import StripeCheckout from "react-stripe-checkout";
// import { useNavigate } from "react-router-dom";

// const CartItems = () => {
//   const { all_product, CartItem, removeFromCart, getTotalCartAmount } = useContext(
//     ShopContext
//   );

//   const navigate = useNavigate();

//   const [product, setProduct] = useState({
//     name: "NOn-me",
//     price: getTotalCartAmount(),
//     productBy: "Glass",
//   });

//   const handleReload = () => {
//     setTimeout(() => {
//       window.location.reload();
//     }, 0);
//   };

//   const makingPayment = async (token) => {
//     const body = {
//       token,
//       product,
//     };
//     const headers = {
//       "content-type": "application/json",
//     };

//     try {
//       const response = await fetch("http://localhost:4000/payment", {
//         method: "POST",
//         headers,
//         body: JSON.stringify(body),
//       });

//       if (response.ok) {
//         // Handle successful payment here if needed
//       } else {
//         console.log("Payment unsuccessful");
//         // Handle payment failure here if needed
//       }
//     } catch (error) {
//       setTimeout(() => {
//         window.location.reload();
//         navigate("/");
//       }, 0);
//       console.log(error);
//       // Handle error cases here
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col">
//           <div className="table-responsive">
//             <table className="table">
//               <thead className="table-light">
//                 <tr>
//                   <th scope="col">Product</th>
//                   <th scope="col">Title</th>
//                   <th scope="col">Price</th>
//                   <th scope="col">Quantity</th>
//                   <th scope="col">Total</th>
//                   <th scope="col">Remove</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {all_product.map((e) => {
//                   if (CartItem[e.id] > 0) {
//                     return (
//                       <tr key={e.id}>
//                         <td>
//                           <img
//                             src={e.image}
//                             alt=""
//                             className="img-fluid"
//                             style={{ maxWidth: "62px" }}
//                           />
//                         </td>
//                         <td>{e.name}</td>
//                         <td>${e.new_price}</td>
//                         <td>
//                           <button className="btn btn-light">
//                             {CartItem[e.id]}
//                           </button>
//                         </td>
//                         <td>${e.new_price * CartItem[e.id]}</td>
//                         <td>
//                           <img
//                             src={remove}
//                             className="img-fluid carticon-remove-icon"
//                             onClick={() => {
//                               removeFromCart(e.id);
//                             }}
//                             alt=""
//                           />
//                         </td>
//                       </tr>
//                     );
//                   }
//                   return null;
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       <div className="row mt-5">
//         <div className="col">
//           <div className="card">
//             <div className="card-body">
//               <h1 className="card-title">Cart Totals</h1>
//               <div className="mb-3">
//                 <p className="fw-bold">Subtotal</p>
//                 <p>${getTotalCartAmount()}</p>
//               </div>
//               <hr />
//               <div className="mb-3">
//                 <p className="fw-bold">Shipping Fee</p>
//                 <p>Free</p>
//               </div>
//               <hr />
//               <div className="mb-3">
//                 <h3 className="fw-bold">Total</h3>
//                 <h3>${getTotalCartAmount()}</h3>
//               </div>
//               <StripeCheckout
//                 name="E-Commerce"
//                 amount={getTotalCartAmount()}
//                 currency="USD"
//                 token={makingPayment}
//                 stripeKey="YOUR_STRIPE_PUBLIC_KEY"
//               >
//                 <button className="btn btn-primary">
//                   Proceed To Checkout ${getTotalCartAmount()}
//                 </button>
//               </StripeCheckout>
//             </div>
//           </div>
//         </div>
//         <div className="col">
//           <div className="card">
//             <div className="card-body">
//               <p className="fs-5">If you have a promo code, Enter it here</p>
//               <div className="input-group mb-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Promo code"
//                 />
//                 <button className="btn btn-dark">Submit</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItems;












// import React, { useContext, useState } from "react";
// import "../CartItems/CartItems.css";
// import { ShopContext } from "../../context/ShopContext";
// import remove from "../Assets/cart_cross_icon.png";
// import StripeCheckout from "react-stripe-checkout";
// import { useNavigate } from "react-router-dom";

// const CartItems = () => {
//   const { all_product, CartItem, removeFromCart, getTotalCartAmount } =
//     useContext(ShopContext);

//   const navigate = useNavigate();

//   const [product, setProduct] = useState({
//     name: "NOn-me",
//     price: getTotalCartAmount(),
//     productBy: "Glass",
//   });

//   const handleReload = () => {
//     setTimeout(() => {
//       window.location.reload();
//     }, 0);
//   };

//   const makingPayment = async (token) => {
//     const body = {
//       token,
//       product,
//     };
//     const headers = {
//       "content-type": "application/json",
//     };

//     try {
//       const response = await fetch("http://localhost:4000/payment", {
//         method: "POST",
//         headers,
//         body: JSON.stringify(body),
//       });

//       if (response.ok) {
//         // Handle success if needed
//       } else {
//         console.log("Payment unsuccessful");
//       }
//     } catch (error) {
//       setTimeout(() => {
//         window.location.reload();
//         navigate("/");
//       }, 0);
//       console.log(error);
//     }
//   };

//   return (
//     <div className="container cartitems">
//       <div className="row cartitems-format-main">
//         <p className="col">Product</p>
//         <p className="col">Title</p>
//         <p className="col">Price</p>
//         <p className="col">Quantity</p>
//         <p className="col">Total</p>
//         <p className="col">Remove</p>
//       </div>
//       <hr />
//       {all_product.map((e) => {
//         console.log(CartItem[e.id] > 0);
//         if (CartItem[e.id] > 0) {
//           return (
//             <div className="row cartitems-format cartitems-format-main">
//               <img src={e.image} alt="" className="col carticon-product-icon" />
//               <p className="col">{e.name}</p>
//               <p className="col">${e.new_price}</p>
//               <button className="col-2 cartitems-quantity">{CartItem[e.id]}</button>
//               <p className="col">$ {e.new_price * CartItem[e.id]}</p>
//               <img
//                 src={remove}
//                 className="col carticon-remove-icon"
//                 onClick={() => {
//                   removeFromCart(e.id);
//                 }}
//                 alt=""
//               />
//             </div>
//           );
//         }

//         return null;
//       })}
//       <div className="row cartitems-down">
//         <div className="col-md-6 cartitems-total">
//           <h1>Cart Totals</h1>
//           <div>
//             <div className="row cartitems-total-item">
//               <p className="col">Subtotal</p>
//               <p className="col">${getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="row cartitems-total-item">
//               <p className="col">Shipping Fee</p>
//               <p className="col">Free</p>
//             </div>
//             <hr />
//             <div className="row cartitems-total-item">
//               <h3 className="col">Total</h3>
//               <h3 className="col">${getTotalCartAmount()}</h3>
//             </div>
//           </div>
//           <>
//             <StripeCheckout
//               name="E-Commerce"
//               amount={getTotalCartAmount()}
//               currency="US"
//               token={makingPayment}
//               stripeKey="your_stripe_key_here"
//             >
//               <button className="btn btn-danger btn-lg">Proceed To Checkout ${getTotalCartAmount()}</button>
//             </StripeCheckout>
//           </>
//         </div>
//         <div className="col-md-6 caritems-promocode">
//           <p>If you have a promo code, Enter it here</p>
//           <div className="row cartitmes-promobox">
//             <input type="text" placeholder="promo code" className="col-8" />
//             <button className="col-4 btn btn-dark">Submit</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItems;
