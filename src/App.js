import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Feedback from './pages/Feedback';
import Footer from './pages/Footer';
import Cart from './Component/Cart';
import {CartProvider} from './pages/CartContext';

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
<Feedback></Feedback>
<Footer></Footer>
      </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;