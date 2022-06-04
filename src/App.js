import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";
import Navbar from "./components/navbar/Navbar";
import { Home } from "./pages/Index";
import About from "./pages/About";
import { Contact } from "./pages/Contact";
import Login from "./pages/Login";
function App() {
  return (
    <div className="container">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element ={<Home/>}/>
          <Route path="/About" element ={<About/>}/>
          <Route path="/Contact" element ={<Contact/>}/>
          <Route path="/Login" element ={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
