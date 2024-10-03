import React from 'react'
import Carousel from '../../components/Crousel/Crousel'
import Marquee from '../../components/Marquee/Marquee'
import Features from '../../components/Features/Features'
import ContactUs from '../../components/ContactUs/ContactUs'
import Swiper from '../../components/Swiper/Swiper'
import Menu from '../../components/Menu/Menu'
import TestimonialPage from '../../components/TestimonialPage/TestimonialPage'
import WeOffer from '../../components/WeOffer/WeOffer'
import Blog from '../../components/Blog/Blog'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import Gallery from '../../components/Gallery/Gallery'
import About from '../../components/About/About'

const Home = () => {
  return (
    <div>
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
    </div>
  )
}

export default Home