import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import BlogDetail from './pages/BlogDetail/BlogDetail';
import Contact from './pages/Contact/Contact';
import Faq from './pages/Faq/Faq';
import Gallery from './pages/Gallery/Gallery';
import Shop from './pages/Shop/Shop';
import ShopDetail from './pages/ShopDetail/ShopDetail';
import Team from './pages/Team/Team';
import About from './pages/About/About';
import Service from './pages/Service/Service';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import Menu from './pages/Menu/Menu';
import SoNavbar from './components/Header/SocialNav/SocialNav';
import Navbar from './components/Header/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BookTable from './pages/BookTable/BookTable';

function App() {
  return (
    <div>
      <SoNavbar/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/servicedetail" element={<ServiceDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetail" element={<BlogDetail />} />
        {/* Fallback route for undefined paths */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shopdetail" element={<ShopDetail />} />
        <Route path="/team" element={<Team />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booktable" element={<BookTable />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
