import logo from './logo.svg';
import './App.css';
import {React, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Home from './Components/Home';
import Products from './Components/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function App() {
  return (
    <div className="App" id="background-color">
    <div id="logo-header"></div>
    
     <Router>
       <div id="navbar">
     

       <Navbar expand="lg">
  {/* <Navbar.Brand id="logo-header"></Navbar.Brand> */}
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link><Link to="/Components/Home">Home</Link></Nav.Link>
    <Nav.Link><Link to="/Components/About">About</Link></Nav.Link>
    <Nav.Link><Link to="/Components/Products">Products</Link></Nav.Link>
    <Nav.Link><Link to="/Components/Gallery">Gallery</Link></Nav.Link>
    <Nav.Link><Link to="/Components/Contact">Contact</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

       </div>
       <div>
         <Switch>
           <Route exact path="/Components/Home"><Home /></Route>
           <Route exact path="/Components/About"><About /></Route>
           <Route exact path="/Components/Contact"><Contact /></Route>
           <Route exact path="/Components/Gallery"><Gallery /></Route>
           <Route exact path="/Components/Products"><Products /></Route>
         </Switch>
       </div>
     </Router>
     <footer>
       Copyright 	&#169; 2020 Ali Colglazier
     </footer>
    </div>
  );
}

export default App;
