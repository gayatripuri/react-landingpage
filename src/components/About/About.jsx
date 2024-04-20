import React from 'react'
import './About.css'
import aboutimg from './../../assets/plumber-pointing-lateral.png'
const About = () => {
  return (
    <>
    <section className='aboutsection'>
  <div className="container">
    <div className="row">
    <div className="col-md-4">
      <div className="col imgsection">
        <img src={aboutimg} alt="" />
      </div>
      </div>
      <div className="col-md-8">
        <div className='about-content'>
        <h3>welcome to</h3>
        <h1 style={{fontWeight:"800"}}>ambica polymers</h1>
        <h3 >best in quality, unique and attractive design, and affordable in class</h3>
        <p>ABBICA POLYMER is a good brand you nnnned to guguhuu ajhj ghgej bhhsjsh bhghujh vhgyhghhu hghyguhu hghgghuhuhu hhh huhuhuu huhuhuhu huhuhuhi huhuhu</p>
        <button className='about-btn'>know more</button>
        </div>
      </div>
      </div>
  </div>
    </section>
    </>
  )
}

export default About;