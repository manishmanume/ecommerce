import React, { createContext, useState } from "react";
import all_Product from '../Components/Assets/all_product'
// import CartItem from "../Components/CartItem/CartItem";

export const ShopContext = createContext(null)

const getDefaultCard = () => {
    let Cart = {};
    for (let index = 0; index < all_Product.length+1; index++) {
        Cart[index] = 0;

    }
    return Cart
}


const ShopContextProvider = (props) => {

    const [Cartitem,SetCartitem] = useState(getDefaultCard())
    // console.log(Cartitem)
    
   

    const addToCart = (itemid) =>{
        SetCartitem((prev) =>({...prev,[itemid]:prev[itemid]+1}))
    }

    const getTotalCartItem =() =>{
        let totalAmount =0
        for(const item in Cartitem){
            if(Cartitem[item]>0){
                let itemInfo = all_Product.find((product)=>product.id ===Number(item))
                totalAmount +=itemInfo.new_price * Cartitem[item]
            }

            return totalAmount
        }
    }

    const getTotalCartItems = () =>{
        let totalitem = 0
        for(const item in Cartitem){
            if(Cartitem[item]>0){
                totalitem += Cartitem[item]
            }
        }
        return totalitem
    }

    const removeToCart = (itemid) =>{
        SetCartitem((prev) =>({...prev,[itemid]:prev[itemid]-1}))
    }

    const contextValue = {getTotalCartItems,getTotalCartItem, all_Product,Cartitem,addToCart,removeToCart }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider