import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Explore = () => {
  return (
    <div className='explore'>
      <div className="exploreDiv">
        <div className="exploreDivLeft">
          <h2 className="exploreTitle">Explore Our Products</h2>
          <span className="exploreDesc">There are many different types of clothing available in Pakistani markets, but if you're looking for a high-quality products, you have come to right place. </span>
          <div className="exploreQuote">
            <FaQuoteLeft />
            <p className="exploreQuoteText">We can assist you by providing a list of top Pakistani dresses online</p>
          </div>
          <p className="exploreDescText"> Here we are sharing with you the most popular Pakistani dresses brands in Pakistan</p>

          <p className="exploreDescText">You can shop online for any brand, we have also included the official brands on our online shopping store. These brands are well-known for their high-quality products as well as for providing the most recent fashion trends and introducing their customers to new and exciting styles. These brands use premium fabric, and skilled tailors sew the dresses they produce. Here we are sharing with you the most popular Pakistani dresses brands in Pakistan</p>
          <Link to='/' className='exploreLink'>Discover More</Link>
        </div>
        <div className="exploreDivRight">
          <div className="exploreDivCards">
            <div className="exploreDivCard">
              <div className="exploreDivTexts">
                <h4>Premium Products</h4>
                <span>Latest Collection</span>
              </div>
            </div>
            <div className="exploreDivCard">
              <div className="exploreDivImg">
                <img src="./assets/uploads/explore-image-01.jpg" alt="" />
              </div>
            </div>
            <div className="exploreDivCard">
              <div className="exploreDivImg">
                <img src="./assets/uploads/instagram.jpg" alt="" />
              </div>
            </div>
            <div className="exploreDivCard">
              <div className="exploreDivTexts">
                <h4>Different Types</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore