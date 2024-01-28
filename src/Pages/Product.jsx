import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Productdisplay from '../ProductDisplay/ProductDisplay'
import BreadCrum from '../Breadcrum/BreadCrum'
import DiscriptionBox from '../Components/DescriptionBox/DiscriptionBox'
import Relativeprod from '../Components/RelativePrd/Relativeprod'



 


const Product = () => {
  const {all_Product} = useContext(ShopContext)
 const {productId} = useParams()
 const product = all_Product.find((e) =>e.id ===Number(productId))
  return (
    <div>
      <BreadCrum product={product}/>
     <Productdisplay product={product}/>
     <DiscriptionBox/>
     <Relativeprod/>
    </div>
  )
}

export default Product