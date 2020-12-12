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
import Pricing from './Components/Pricing';


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
    <Nav.Link><Link to="/Components/Home"><p class="menu-text">Home</p></Link></Nav.Link>
    {/* <Nav.Link><Link to="/Components/About"><p class="menu-text">About</p></Link></Nav.Link> */}
    <Nav.Link><Link onClick={((e) => document.getElementById('about').scrollIntoView())}><p class="menu-text">About</p> </Link></Nav.Link> 
    {/* <Nav.Link><Link to="/Components/Home/#menu"><p class="menu-text">Menu</p></Link></Nav.Link> */}
    {/* <Nav.Link><a href="/Components/Home/#menu"><p class="menu-text">Menu</p></a></Nav.Link> */}
    <Nav.Link><Link onClick={((e) => document.getElementById('menu').scrollIntoView())}><p class="menu-text">Menu</p> </Link></Nav.Link> 
    <Nav.Link><Link to="/Components/Pricing"><p class="menu-text">Pricing</p></Link></Nav.Link>
    {/* <Nav.Link><Link to="/Components/Contact"><p class="menu-text">Order</p></Link></Nav.Link> */}
    <Nav.Link><Link onClick={((e) => document.getElementById('order').scrollIntoView())}><p class="menu-text">Order</p> </Link></Nav.Link> 
    </Nav>
  </Navbar.Collapse>
</Navbar>

       </div>
       <div>
         <Switch>
           <Route exact path="/Components/Home"><Home /></Route>
           <Route exact path="/Components/About"><About /></Route>
           <Route exact path="/Components/Contact"><Contact /></Route>
           <Route exact path="/Components/Pricing"><Pricing /></Route>
           <Route exact path="/Components/Home/#menu"><Home /></Route>
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
