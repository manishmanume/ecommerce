import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../Components/Assets/logo.png'
import cart_icon from '../Components/Assets/cart_icon.png'
import { ShopContext } from '../Context/ShopContext'

const Navbar = () => {
    const [menu,setmenu] = useState("shop") 
    const {getTotalCartItems} = useContext(ShopContext)
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Fashion</p>
                </div>
                <ul className="nav-manu">
                    <li onClick={() => {setmenu("shop")}}> <Link style={{textDecoration:"none"}} to='/'> Shop </Link>{menu==="shop"? <hr/> :<></>}</li>
                    <li onClick={() => {setmenu("men")}}>  <Link style={{textDecoration:"none"}} to='/men'>Men</Link>{menu==="men"? <hr/> :<></>}</li>
                    <li onClick={() => {setmenu("women")}}> <Link style={{textDecoration:"none"}} to='/women'>Women</Link> {menu==="women"? <hr/> :<></>}</li>
                    <li onClick={() => {setmenu("kids")}}> <Link style={{textDecoration:"none"}} to='/kids'>Kids</Link> {menu==="kids"? <hr/> :<></>}</li>
                </ul>
                <div className="nav-login-cart">
                    <Link to='/Login'><button>Login</button></Link>
                    <Link to='/Cart'><img src={cart_icon} alt="" /></Link>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                </div>
            </div>

      
    )
}

export default Navbar