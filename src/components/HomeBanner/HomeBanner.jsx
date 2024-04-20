import React from 'react'
import './HomeBanner.css'
import homeimg from '../../assets/main.jpg'
const HomeBanner = () => {
  return (
   <>
   <section className='homeBannerSection' style={{backgroundImage: `url(${homeimg})`}}>
    <div className="homeSectionInner" >
<div className="homePage-content">
  <h3>Lifeline <br /> to your household</h3>
  <p> Ambica's polymer is india's leading plastic  processing company with four business divions</p>
</div>
    </div>
   </section>
   </>
  )
}

export default HomeBanner;