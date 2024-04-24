import React from 'react'
import '../styles/Shop.css'
import shirt1 from '../assets/BlackT.png'
import shirt2 from '../assets/whiteT.png'
import cap1 from '../assets/BlackMug.png'
import hoodie1 from '../assets/wh.png'
import hoodie2 from '../assets/bh.png'

import Title from "./Title"
import Navbar from './Navbar'
import Footer from './Footer'



const Shop = () => {
  return (
    <>
    
    <Navbar/>

        <Title title='Our Shop'/>

    <div className="shop-container">
            <div className="product-item">
              
                <img className="product-image" src={shirt1} alt="Thinking T-shirt" />
                <h2>Black T-shirt</h2>
                <p>High-quality cotton T-shirt for deep thinkers.</p>
                <button className="buy-button">Buy Now</button>
            </div>
            <div className="product-item">
                <img className="product-image" src={cap1} alt="Thinking Cap" />
                <h2>Coffee Mug</h2>
                <p>Coffee mug when designing.</p>
                <button className="buy-button">Buy Now</button>
            </div>
            <div className="product-item">
                <img className="product-image" src={hoodie1} alt="Thinking Hoodie" />
                <h2>White Hoodie</h2>
                <p>Warm hoodie for contemplative souls.</p>
                <button className="buy-button">Buy Now</button>
            </div>
            <div className="product-item">
                <img className="product-image" src={hoodie2} alt="Thinking Hoodie" />
                <h2>Black Hoodie</h2>
                <p>Warm hoodie for contemplative souls.</p>
                <button className="buy-button">Buy Now</button>
            </div>
            <div className="product-item">
                <img className="product-image" src={shirt2} alt="Thinking Hoodie" />
                <h2>Thinking Hoodie</h2>
                <p>High-quality cotton T-shirt for deep thinkers.</p>
                <button className="buy-button">Buy Now</button>
            </div>
            <div className="product-item">
                <img className="product-image" src={hoodie1} alt="Thinking Hoodie" />
                <h2>Thinking Hoodie</h2>
                <p>Warm hoodie for contemplative souls.</p>
                <button className="buy-button">Buy Now</button>
            </div>
            
        </div>

<Footer/>
        </>

  )
}

export default Shop
