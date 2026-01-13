import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>

        <div className="footer-content">
            <div className="footer-content-left">
               <img src={assets.logo}/>
               <p>
                At FoodieExpress, we are dedicated to bringing you the best quality and service with care. 
                From freshly prepared meals to quick doorstep delivery, our mission is to make your dining 
                experience effortless and enjoyable. We believe in convenience, trust, and creating a better 
                way to enjoy the food you love – anytime, anywhere. With every order, we strive to deliver 
                happiness, one bite at a time.
                </p>

               <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
               </div>
            </div>

             <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

             <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>9748807614</li>
                    <li>kharelsachin91@gmail.com</li>
                </ul>
            </div>
        </div>

        <hr />
        <p className='footer-copyright'> &copy; 2025 YourWebsiteName. All rights reserved.</p>

      
    </div>
  )
}

export default Footer
