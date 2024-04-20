import React from 'react'
import './Footer.css'
import footerbg from '../../assets/gray-bg.jpg'
import footerlogo from '../../assets/01-willsor.png'
const Footer = () => {
  return (
    <>
    <footer className='footer' >
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img src={footerlogo} alt="" />
            <p>copyright @ ambica polymers</p>
          </div>
          <div className="col-md-3">
            <h4>information</h4>
            <ul>
            <li>home</li>
            <li>about </li>
            <li>products</li>
            <li>innovations</li>
            <li>carrers</li>
            <li>contact</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>products</h4>
            <ul>
            <li>water storage</li>
            <li>pipelines</li>
            <li>other</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>get in touch</h4>
            <ul>
            <li>other information ere</li>
            <li>1234567890 <br /> 12346727767</li>
            <li>ambica@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='copyright'>
        <div className="container">
      <p>Copyright © 2024 Ambica Polymer.</p>
      </div>
    </div>
    </footer>
    
    </>
  )
}

export default Footer;