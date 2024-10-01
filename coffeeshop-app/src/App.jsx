import React from 'react'
import Navbar from './components/Header/Navbar'
import SoNavbar from './components/Header/SoNavbar'
import Carousel from './components/CarouselSet/Carousel'
import Marquee from './components/Marquee/Marquee'
import About from './components/About/About'
import Features from './components/Features/Features'
import ContactUs from './components/ContactUs/ContactUs'
import Menu from './components/Menu/Menu'
import Blog from './components/Blog/Blog'
import TestimonialPage from './components/Testimonial/TestimonialPage'
import Swiper from './components/Swiper/Swiper'
import WeOffer from './components/WeOffer/WeOffer'
import NewsLetter from './components/NewsLetter/NewsLetter'
import Gallery from './components/Gallery/Gallery'
import Footer from './components/Footer/Footer'


const App = () => {
  return (

    <div>
      <SoNavbar/>
      <Navbar/>
      <Carousel/>
      <Marquee/>
      <About/>
      <Features/>
      <ContactUs/>
      <Menu/>
      <Swiper/>
      <TestimonialPage/>
      <WeOffer/>
      <Blog/>
      <NewsLetter/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default App