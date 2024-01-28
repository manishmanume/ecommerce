import React, { useContext } from 'react'
import '../Pages/Css/Shopcategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import  Item from '../Components/Items/Item'
const ShopCategory = (props) => {
  const {all_Product} = useContext(ShopContext)
  return (
    <div className='Shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-index">
        <p> <span>Showing 1-12</span> out of 36 product</p>
        <div className="shopcategory-short">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-product">
       {
        all_Product.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}/>
          }else{
            return null;
          }
        })
       }
      </div>
      <div className="shopcategry-loadmore">
        Explore Now
      </div>
    </div>
  )
}

export default ShopCategory