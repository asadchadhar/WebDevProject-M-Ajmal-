import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Intro = () => {
  return (
    <div className='intro'>
      <div className="introLeft">
        <div className="introLeftDiv">
          <div className="introLeftContent">
            <h2 className="introTitle">We are FASHIONATS</h2>
            <Link to='/products' className='introLink'>Purchase Now!</Link>
          </div>
          <img src="./assets/uploads/banner5.jpg" alt="" />
        </div>
      </div>
      <div className="introRight">
        <div className="introRightDiv">
          <div className="introRightContent">
            <div className="introRightInner">
              <div className="introRightTexts">
                <h3 className="introRightTitle">Women</h3>
                <p className="introRightDesc">Best Clothes for Women</p>
              </div>
              <img src="./assets/uploads/baner-right-image-01.jpg" alt="" />
            </div>
            <div className="introRightHover">
              <div className="introRightHoverTexts">
                <h3 className="introRightTextTitle">Women</h3>
                <p className="introRightTextDesc">Find the Best Clothes Here</p>
                <NavLink to='/#women' className='introRightLink'>Discover More</NavLink>
              </div>
            </div>
          </div>
          <div className="introRightContent">
            <div className="introRightInner">
              <div className="introRightTexts">
                <h3 className="introRightTitle">Men</h3>
                <p className="introRightDesc">Best Clothes for Men</p>
              </div>
              <img src="./assets/uploads/baner-right-image-02.jpg" alt="" />
            </div>
            <div className="introRightHover">
              <div className="introRightHoverTexts">
                <h3 className="introRightTextTitle">Men</h3>
                <p className="introRightTextDesc">Find the Best Clothes Here</p>
                <Link to='/#men' className='introRightLink'>Discover More</Link>
              </div>
            </div>
          </div>
          <div className="introRightContent">
            <div className="introRightInner">
              <div className="introRightTexts">
                <h3 className="introRightTitle">Kids</h3>
                <p className="introRightDesc">Best Clothes for Kids</p>
              </div>
              <img src="./assets/uploads/baner-right-image-03.jpg" alt="" />
            </div>
            <div className="introRightHover">
              <div className="introRightHoverTexts">
                <h3 className="introRightTextTitle">Kids</h3>
                <p className="introRightTextDesc">Find the Best Clothes Here</p>
                <Link to='/#kids' className='introRightLink'>Discover More</Link>
              </div>
            </div>
          </div>
          <div className="introRightContent">
            <div className="introRightInner">
              <div className="introRightTexts">
                <h3 className="introRightTitle">Accessories</h3>
                <p className="introRightDesc">Best Trend for Accessories</p>
              </div>
              <img src="./assets/uploads/baner-right-image-04.jpg" alt="" />
            </div>
            <div className="introRightHover">
              <div className="introRightHoverTexts">
                <h3 className="introRightTextTitle">Accessories</h3>
                <p className="introRightTextDesc">Find the Best Accessories Here</p>
                <Link to='/' className='introRightLink'>Discover More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro