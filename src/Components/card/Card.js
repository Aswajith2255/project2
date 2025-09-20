import React from 'react'
import puttu from '../../Assets/puttu.jpeg'
import Dosa from '../../Assets/Dosa.jpg'
import Kadala from '../../Assets/kadala-curry.webp'
import porotta from '../../Assets/porotta.jpeg'
import Beef from '../../Assets/beef.webp'
import appam from '../../Assets/appam.webp'
import egg from '../../Assets/egg-curry.webp'
import idli from '../../Assets/idli.webp'
import './Card.css'
function Card() {
  return (
<>
<h1 className='menu'>MENU</h1>
    <div className='card'>
        
      <div className="cards">
          <h2>Puttu</h2>
          <img src={puttu} alt="" />
          <p>Rs 20</p>
      </div>
    <div className="cards">
          <h2>Dosa</h2>
          <img src={Dosa} alt="" />
          <p>Rs 40</p>
      </div>
      <div className="cards">
          <h2>Kadala Curry</h2>
         <img src={Kadala} alt="" />
          <p>Rs 50</p>
      </div>
      <div className="cards">
          <h2>Porotta</h2>
          <img src={porotta} alt="" />
          <p>Rs 20</p>
      </div>
      <div className="cards">
          <h2>Beef</h2>
           <img src={Beef} alt="" />
          <p>Rs 120</p>
      </div>
      <div className="cards">
          <h2>Appam</h2>
          <img src={appam} alt="" />
          <p>Rs 30</p>
      </div>
      <div className="cards">
          <h2>Egg curry</h2>
           <img src={egg} alt="" />
          <p>Rs 45</p>
      </div>
      <div className="cards">
          <h2>Idli</h2>
         <img src={idli} alt="" />
          <p>Rs 20</p>
      </div>
    </div>
    </>
  )
} 

export default Card
