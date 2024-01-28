import React from 'react'
import './NewLatter.css'

const NewLatter = () => {
  return (
    <div className='Newlatter'>
        <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
        <p>Subscribe to our newlatter and stay update</p>
        <div>
            <input type="email" placeholder='Enter Your Email...' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewLatter