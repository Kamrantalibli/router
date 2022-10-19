import React from 'react';
import img from '../../img/img.png';

const Home = () => {
  return (
    <div className='home-cont'>
      <div className="container">
        <div className="left">
          <h6><i class="fa-solid fa-house-chimney"></i>  Real Estate Agency</h6>
          <h1>Find Your Dream <br />House by Us</h1>
          
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Laboriosam aliquam id minima deserunt <br /></span>

          <button>Make An Enquiry</button>
        </div>
        <div className="right">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home