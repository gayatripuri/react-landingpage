import React from 'react'
import './Brands.css'
import logo1 from '../../assets/01-willsor.png'
import logo2 from '../../assets/02-shiplon.png'
import logo3 from '../../assets/03-aquawell.png'
import logo4 from '../../assets/04-venus.png'
const Brands = () => {
  return (
    <>
    <section className='brand-sec'>
      <div className="container">
        <div className='brand-innersec'>
        <div className="row">
          <div className='brand-inner'>
          <div className="col-md-4">
            <h2>OUR BRANDS</h2>
            <h2>WE DEAL IN</h2>
          </div>
          <div className='logoouterdiv'></div>
          <div className="col-md-2 logodiv"><img src={logo1} alt="" className='brand-logo'/></div>
          <div className="col-md-2 logodiv"><img src={logo2} alt="" className='brand-logo'/></div>
          <div className="col-md-2 logodiv"><img src={logo3} alt="" className='brand-logo'/></div>
          <div className="col-md-2 logodiv"><img src={logo4} alt="" className='brand-logo'/></div>
        </div>
        </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Brands;