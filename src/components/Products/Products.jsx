import React from 'react'
import './Products.css'
import bg from '../../assets/gray-bg.jpg'

import img2 from '../../assets/innovation02.jpg'
const Products = () => {
  return (
    <>
    <section className='products-section' style={{backgroundImage: `url(${bg})`}}>
      <div className="container">
        <div style={{marginLeft:"5rem"}} className="contentdiv">
        <h1>what we serve</h1>
        <div className='products-text'>
        <h2>products range</h2>
        <p className='productBtn'>see all products</p>
        </div>
        </div>
        <div className="row products-imgdiv">
          
          <div className="col-md-4"><img src={img2} alt="" className='product-img'/></div>
          <div className="col-md-4"><img src={img2} alt="" className='product-img'/></div>
          <div className="col-md-4"><img src={img2} alt="" className='product-img'/></div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Products;