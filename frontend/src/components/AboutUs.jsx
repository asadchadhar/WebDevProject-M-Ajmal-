import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaQuoteLeft, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div className='aboutUs'>
        <div className="aboutUsDiv">
            <div className="aboutUsTop">
                <img src="./assets/uploads/about-us-page-heading.jpg" alt="" />
                <div className="aboutUsTexts">
                    <h2>About Our Company</h2>
                </div>
            </div>
            <div className="aboutUsBottom">
                <div className="aboutUsBottomLeft">
                    <div className="aboutUsBottomImg">
                        <img src="./assets/uploads/banner.jpg" alt="" />
                    </div>
                </div>
                <div className="aboutUsBottomRight">
                    <div className="aboutUsBottomTexts">
                        <h2>About Us & Our Skills</h2>
                        <span>We Provide the Best Clothing Experience In Town</span>

                        <div className="exploreQuote">
                            <FaQuoteLeft />
                            <p className="exploreQuoteText"> Best Clothing Store</p>
                        </div>

                        <span>Asad, Ayan And Muaz</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="aboutUsOthers">
            <div className="aboutUsContent">
                <h2>Our Amazing Team</h2>
            </div>
            <div className="aboutUsImages">
                <div className="aboutUsImage">
                    <div className="aboutUsImageTop">
                        <img src="./assets/uploads/asad.jpg" alt="" />
                        <div className="aboutUsImageHover">
                            <Link to='/'><FaFacebook /></Link>
                            <Link to='/'><FaInstagram /></Link>
                            <Link to='/'><FaTwitter /></Link>
                            <Link to='/'><FaYoutube /></Link>
                            <Link to='/'><FaLinkedin /></Link>
                        </div>
                    </div>
                    <div className="aboutUsImageBottom">
                        <h4>Asad</h4>
                        <span>Member</span>
                    </div>
                </div>
                <div className="aboutUsImage">
                    <div className="aboutUsImageTop">
                        <img src="./assets/uploads/khap.jpg" alt="" />
                        <div className="aboutUsImageHover">
                            <Link to='/'><FaFacebook /></Link>
                            <Link to='/'><FaInstagram /></Link>
                            <Link to='/'><FaTwitter /></Link>
                            <Link to='/'><FaYoutube /></Link>
                            <Link to='/'><FaLinkedin /></Link>
                        </div>
                    </div>
                    <div className="aboutUsImageBottom">
                        <h4>Muaz Khap</h4>
                        <span>Member</span>
                    </div>
                </div>
                <div className="aboutUsImage">
                    <div className="aboutUsImageTop">
                        <img src="./assets/uploads/ayan.jpg" alt="" />
                        <div className="aboutUsImageHover">
                            <Link to='/'><FaFacebook /></Link>
                            <Link to='/'><FaInstagram /></Link>
                            <Link to='/'><FaTwitter /></Link>
                            <Link to='/'><FaYoutube /></Link>
                            <Link to='/'><FaLinkedin /></Link>
                        </div>
                    </div>
                    <div className="aboutUsImageBottom">
                        <h4>Ayan Molvi</h4>
                        <span>Member</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="aboutUsOthers">
            <div className="aboutUsContent">
                <h2>Our Services</h2>
                <span>We Provide the Best Clothing Experince in Town</span>
            </div>

        </div>
    </div>
  )
}

export default AboutUs