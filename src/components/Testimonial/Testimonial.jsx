import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <>
      <section className='testimonial-sec'>
        <div className="container">
          <div id="carousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carousel" data-slide-to="0" className="active"></li>
              <li data-target="#carousel" data-slide-to="1"></li>
              <li data-target="#carousel" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner" role="listbox">

              <div className="carousel-item active" style={{ background: '#25c' }}>
                <div className="caption">
                  <h1>Create and share your whatever active part</h1>
                  <h2>Make it easy for you to do whatever this thing does.</h2>
                </div>
              </div>

              <div className="carousel-item" style={{ background: '#52c' }}>
                <div className="caption">
                  <h1>Something and share your whatever</h1>
                  <h2>Else it easy for you to do whatever this thing does.</h2>
                </div>
              </div>

              <div className="carousel-item" style={{ background: '#ccc' }}>
                <div className="caption">
                  <h1>Create and share your whatever</h1>
                  <h2>Make it easy for you to do whatever this thing does.</h2>
                </div>
              </div>

            </div>

            <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>

          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
