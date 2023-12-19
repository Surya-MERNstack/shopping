import React, { createContext, useState } from 'react'
import all_product from '../components/Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};

    for(let i = 0; i < all_product.length + 1; i++){
        cart[i] = 0
    }
    return cart
}

const ShopContextProvider = (props) => {

    const [CartItem, setCartItem] = useState(getDefaultCart())
    
    
    const addToCart = (itemId) => {
        setCartItem((prev) => ({
            ...prev,
            [itemId]: prev[itemId] +1
        }));
    };
    

    const  removeFromCart = (itemID) => {
        setCartItem((prev) => ({
            ...prev,
            [itemID]: prev[itemID] - 1
        }));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in CartItem){
            if(CartItem[item] > 0){
                let Iteminfo = all_product.find((product) => product.id === Number(item))

                totalAmount += Iteminfo.new_price * CartItem[item];
            }
        }
        return totalAmount
    }

    const getTotalCartItems = () => {
       let totalItem = 0;
       for(const item in CartItem){
         if(CartItem[item] > 0){
            totalItem += CartItem[item]
         }
       }
       return totalItem
    }


    const contextValue = {all_product, CartItem, addToCart, removeFromCart, getTotalCartAmount,getTotalCartItems};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;