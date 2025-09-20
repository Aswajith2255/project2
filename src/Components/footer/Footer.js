import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer-main'>
    <footer className="footer">
      <div className="footer-container">
        
      
        <div className="footer-section">
          <h3> Help</h3>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Shipping Info</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3> Customer Support</h3>
          <ul>
            <li> 8075530471</li>
            <li> aswajithpp45@example.com</li>
            <li> Live Chat</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer
