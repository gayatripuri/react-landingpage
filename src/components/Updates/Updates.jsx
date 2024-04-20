import React from "react";
import "./Updates.css";
import img1 from "../../assets/news01.jpg";
import img2 from "../../assets/news02.jpg";
import img3 from "../../assets/news03.jpg";
import bgimg from '../../assets/gray-bg.jpg'
const Updates = () => {
  return (
    <>
      <section className="update-sec" style={{backgroundImage: `url(${bgimg})`}}>
        <div className="container">
          
          <div className="row">
            <div className="col-lg-8">
              <div className="newsupdate-head">
                <h3>LATEST FROM AMBICA POLYMERS</h3>
                <h2>NEWS & UPDATES</h2>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="newsupdate-btn">
                <p style={{color:'black', padding:'5px 5px' }}>see all news & updates</p>
              </div>
            </div>
          </div>
          <div className="newsupate-sec-dection">
          <div className="row">
            
              <div className="col-lg-6">
              
                <div className="img-leftbar">
                  <img src={img1} alt="" />
                </div>
                
                </div>
              
              <div className="col-lg-6">
                <div className="newsupdate-rightbar">
                  <div className="newsdiv">
                    <div className="img-leftbar">
                      <img src={img2} alt="" />
                    </div>
                    <div className="content-rightbar">
                      <h2>
                        Things You Should Know When Buying Plumbing Pipes For
                        Home
                      </h2>
                      <p style={{color:'black'}}>
                        By working with some of India’s leading designers, we
                        understand the latest trends. Our design-sense is
                        exemplified.
                      </p>
                    </div>
                  </div>
                  <div className="newsdiv">
                    <div className="img-leftbar">
                      <img src={img3} alt="" />
                    </div>
                    <div className="content-rightbar">
                      <h2>
                        Things You Should Know When Buying Plumbing Pipes For
                        Home
                      </h2>
                      <p style={{color:'black'}}>
                        By working with some of India’s leading designers, we
                        understand the latest trends. Our design-sense is
                        exemplified.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
            </div>
          </div>
        
      </section>
    </>
  );
};

export default Updates;
