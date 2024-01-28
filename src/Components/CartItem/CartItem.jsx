import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItem = () => {
    const {getTotalCartItem,all_Product, Cartitem, removeToCart } = useContext(ShopContext)
    return (
        <div className='Cartitem'>
            <div className="format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {
                all_Product.map((e) => {
                    if (Cartitem[e.id] > 0) {
                        return <div>
                                <div className="cartitem-formate format-main">
                                    <img src={e.image} alt="" className='cart-icon' />
                                    <p>{e.name}</p>
                                    <p>$ {e.new_price}</p>
                                    <button className='cartQnt'>{Cartitem[e.id]}</button>
                                    <p>$ {e.new_price*Cartitem[e.id]}</p>
                                    <img className='remove' src={remove_icon} onClick={() => { removeToCart(e.id) }} alt="" />
                                </div>
                                <hr />
                            </div>
                        
                    }
                    return null;
                })
            }
            <div className="cartdown">
                <div className="carttotal">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className='carttotalitem'>
                            <p>Subtotal</p>
                            <p>$ {getTotalCartItem()}</p>
                        </div>
                        <hr />
                        <div className="carttotalitem">
                            <p>Shipping Fees</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='carttotalitem'>
                            <h3>Total</h3>
                            <h3>$ {getTotalCartItem()}</h3>
                        </div>
                    </div>
                    <button className='btna'>PROCEED TO CHECKOUT</button>
                </div>
                <div className="promocode">
                    <p>If You have a promo code, Enter it here.</p>
                     <div className='promobox'>
                        <input type="text" placeholder='Enter Your Promocode' />
                        <button className='btnb'>Submit</button>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem