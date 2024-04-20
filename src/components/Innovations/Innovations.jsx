import React from 'react'
import './Innovations.css'
import bg from '../../assets/gray-bg.jpg'
import img1 from '../../assets/news01.jpg'
import img2 from '../../assets/news02.jpg'
const Innovations = () => {
  return (
   <>
   <section className='innovation-sec'  >
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className='innovation-contentdiv'>
            <div className='innovation-header'>
              <h6>QUALITY &</h6>
              <h2 >INNOVATION</h2>
              <p style={{marginTop:'25px', color:'black'}}>Over the last 26 years, we’ve been at the forefront of solving complex water management problems through innovative thinking and cutting-edge technology.</p>
              <a href="" style={{marginTop:'10px'}} >know more</a>
            </div>
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className='innovation-imgdiv'>
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
   </section>
   </>
  )
}

export default Innovations;