import React from 'react'
import '../styles/Shop.css'
import shirt1 from '../assets/shirt1.jpeg'
import cap1 from '../assets/cap1.png'
import hoodie1 from '../assets/hoodie1.png'
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
                <h2>Thinking T-shirt</h2>
                <p>High-quality cotton T-shirt for deep thinkers.</p>
                <button className="buy-button">Buy Now</button>
            </div>
            <div className="product-item">
                <img className="product-image" src={cap1} alt="Thinking Cap" />
                <h2>Thinking Cap</h2>
                <p>Stylish cap for thoughtful minds.</p>
                <button className="buy-button">Buy Now</button>
            </div>
            <div className="product-item">
                <img className="product-image" src={hoodie1} alt="Thinking Hoodie" />
                <h2>Thinking Hoodie</h2>
                <p>Warm hoodie for contemplative souls.</p>
                <button className="buy-button">Buy Now</button>
            </div>
            <div className="product-item">
                <img className="product-image" src={hoodie1} alt="Thinking Hoodie" />
                <h2>Thinking Hoodie</h2>
                <p>Warm hoodie for contemplative souls.</p>
                <button className="buy-button">Buy Now</button>
            </div>
            <div className="product-item">
                <img className="product-image" src={hoodie1} alt="Thinking Hoodie" />
                <h2>Thinking Hoodie</h2>
                <p>Warm hoodie for contemplative souls.</p>
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
