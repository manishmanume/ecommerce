import React, { useContext } from 'react'
import star_icon from '../Components/Assets/star_icon.png'
import star_dull from '../Components/Assets/star_dull_icon.png'
import './Display.css'
import { ShopContext } from '../Context/ShopContext'

const Productdisplay = (props) => {
    const {product} =props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='displayprod'>
        <div className="display-left">
            <div className="display-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="display-image">
              <img className='main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="display-right">
          <h1>{product.name}</h1>
          <div className='star'>
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull} alt="" />
            <p>(122)</p>
          </div>
          <div className="right-prices">
            <div className="old-price">${product.old_price}</div>
            <div className="new-price">${product.new_price}</div>
            </div>
            <div className="right-disciption">
              A lightWeight, usually kintted, pullover shirt, close-fetting with
              a round neckline and short sleeves, worn as an undershirt or outer garment. 
            </div>
            <div className="right-size">
              <h1>Select Size</h1>
              <div className="product-right-size">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
              </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='display-right-category'><span>Category : <span>Women, T-shirt, Crop Top</span></span></p>
            <p className='display-right-category'><span>Tags : <span>Medern, Latest</span></span></p>
          </div>
        </div>
    
  )
}

export default Productdisplay