import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offer/Offer'
import NewCollection from '../Components/NewCollection/NewCollection'
import NewLatter from '../Components/NewsLatters/NewLatter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollection/>
      <NewLatter/>
    </div>
  )
}

export default Shop