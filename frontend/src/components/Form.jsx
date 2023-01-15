import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

const Form = () => {
  return (
    <div className='form'>
        <div className="formDiv">
            <div className="formTop">
                <img src="./assets/uploads/about-us-page-heading.jpg" alt="" />
                <div className="formTexts">
                    <h2>Contact Us</h2>
                </div>
            </div>
            <div className="formBottom">
                <div className="formBottomRight">
                    <div className="formBottomTexts">
                        <h2>You can Contact Us Here</h2>
                    </div>
                    <div className="formBottomForm">
                        <form>
                            <div className="formBottomGroups">
                                <input type="text" required placeholder='Your Name' />
                                <input type="text" required placeholder='Your Email' />
                            </div>
                            <div className="formBottomGroups">
                                <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
                            </div>
                            <button className='formBottomBtn'><FaPaperPlane /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form