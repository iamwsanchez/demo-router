import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";
import { Nabvar } from "./navbar/Nabvar";
import { Home } from "./pages/Index";
import About from "./pages/About";
import { Contact } from "./pages/Contact";
function App() {
  return (
    <div class="container">
      <Router>
        <Nabvar/>
        <Routes>
          <Route exact path="/" element ={<Home/>}/>
          <Route path="/About" element ={<About/>}/>
          <Route path="/Contact" element ={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
