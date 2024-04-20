
import './App.css';
import About from './components/About/About';
import Contact from './components/ContactUs/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Navbar'
import HomeBanner from './components/HomeBanner/HomeBanner';
import GetInTouch from './components/Innovations/GetInTouch';
import Innovations from './components/Innovations/Innovations';
import Brands from './components/Products/Brands';
import Products from './components/Products/Products';
import Testimonial from './components/Testimonial/Testimonial';
import WhyChoose from './components/Testimonial/WhyChoose';
import Updates from './components/Updates/Updates';
function App() {
  return (
    <>
    <Header/>
    <HomeBanner/>
    <About/>
    <Products/>
    <WhyChoose/>
    <Innovations/>
    
    <Updates/>
    <Brands/>
    <GetInTouch/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
