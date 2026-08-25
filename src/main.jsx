import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from "./landing_page/home/HomePage"
import "../index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AboutPage from './landing_page/about/AboutPage';
import Signup from './landing_page/signup/signup';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import Notfound from './landing_page/Notfound';
import ProductPage from './landing_page/product/ProductPage';
import PricePage from './landing_page/pricing/PricePage';
import SupportPage from './landing_page/support/supportPage';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
    <Routes >
      <Route path="/"element={<HomePage />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/product" element={<ProductPage/>} />
      <Route  path="/pricing" element={<PricePage/>}/>
      <Route path="/support" element={<SupportPage/>}/>
      <Route path='/*' element={<Notfound/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
)
