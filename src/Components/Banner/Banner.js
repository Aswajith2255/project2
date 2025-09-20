import React from 'react'
import './Banner.css'
import san from '../../Assets/sandw.jpg'
import face from '../../Assets/facebook.png'
import face1 from '../../Assets/instagram.png'
function Banner() {
  return (
    <div className='banner'>
      <div className='banner-img'>
 <img src={san}/>
      </div>
      <div className='banner-text'>
       <h1>Dive into Delights<br></br> of Delectable <span>Food</span></h1>
       <p>We’re delighted to have you with us today. Sit back, relax, and enjoy our warm hospitality along with delicious food made with care.</p>
      </div>
      <button className='banner-button'> 
        Order Now
     </button>
      <div className='banner-qitchen'>
            <h1>QITCHEN</h1>
      </div>

      <div className='banner-icon' >
        <img src={face} alt="" />
           <img className='banner-left' src={face1} alt="" />
      </div>
      
    </div>
  )
}

export default Banner

