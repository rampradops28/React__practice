import React from "react";
import {BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import './css/App.css'
import './css/Home.css'
import './css/About.css'
import logo from './assets/bg.webp'
function App() {
  return (
    <>
    <Router>
      <div className="header">
        <div className="logo">
          <p><Link to="/">
          <img src={logo} alt="#"  className="rb-logo"/>
          </Link>
          </p>
           
          <h3>
            <Link to="/" style={{ textDecoration: "none" }}>
              RESUME BUILDER
            </Link>
          </h3>
        </div>
        <nav>
          <ol>
            <li>
              <Link to="/"  style={{ textDecoration: "none" }}>Home</Link>
            </li>
            <li>
              <Link to="/aboutUs"  style={{ textDecoration: "none" }}>About Us</Link>
            </li>
            <li>
              <Link to="/contactUs"  style={{ textDecoration: "none" }}>Contact Us</Link>
            </li>
          </ol>
        </nav>
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<Aboutus />} />
          <Route path="/contactUs" element={<Contactus />} />
        </Routes>

        <footer>
          <h2>&copy; CopyRights Reserved! 2024 </h2>
        </footer>
      
      
      
    </Router>
       
    </>
  );
}

export default App;
