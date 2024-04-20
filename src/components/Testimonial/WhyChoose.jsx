import React from 'react'
import './WhyChoose.css'
import logo1 from '../../assets/design-icon.jpg'
import logo2 from '../../assets/affordable-icon.jpg'
import logo3 from '../../assets/service-icon.jpg'
const WhyChoose = () => {
  return (
   <>
   <section className='whychoose-sec'>
    <div className="container">
       <p style={{fontSize:'2rem', textTransform:'uppercase', color:'black'}}>why choose</p>
       <div className="row">
        <div className="col-md-6" style={{fontWeight:'700', fontSize:'3rem'}}>ambica polymers</div>
        <div className="col-md-6">
        <div className='whychoose-contentdiv'>
          <ul>
          <li className='item'>
            <div><img src={logo1} alt="" className='whychoose-logo'/></div>
            <div className='whychoose-content-inner-div'>
              <h3 >EXCELLENCE IN DESIGN</h3>
              <p style={{color:'black'}}>By working with some of India’s leading designers, we understand the latest trends. Our design-sense is exemplified.</p>
            </div>
          </li>
          <hr />
          <li className='item'>
            <div><img src={logo2} alt="" className='whychoose-logo' /></div>
            <div className='whychoose-content-inner-div'>
              <h3>QUALITY BACKED BY SERVICE</h3>
              <p style={{color:'black'}}>Our products carry Warranties up to 10-Years with a dedicated Toll-Free Customer Helpline & Service Centers.</p>
            </div>
          </li>
          <hr />
          <li className='item'>
            <div><img src={logo3} alt="" className='whychoose-logo'/></div>
            <div className='whychoose-content-inner-div'>
              <h3>LUXURY MADE AFFORDABLE</h3>
              <p style={{color:'black'}}>Streamlining supply-chains results in tremendous cost-savings that we pass to our customers. This results in best-in-class economical price-tags!</p>
            </div>
          </li>
          </ul>
        </div>
 
        </div>
       </div>
    </div>
   </section>
   </>
  )
}

export default WhyChoose;