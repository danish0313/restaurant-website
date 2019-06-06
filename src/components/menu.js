
import React , {Component} from 'react';
import {Navbar, Nav } from "react-bootstrap";
import logo from '../logo.png';
import {Link} from 'react-router-dom';



const Menu = () => {


return (



    <header>
 <Navbar className="nav" bg="dark" variant="dark">

 <Link to="/">
    <Navbar.Brand><img src={logo}  alt="logo" className="logo" /> <span className="logo-name"> Recipes.....</span></Navbar.Brand>
</Link>

     <Nav className="mr-auto">
<h2>   Recipe Search!  </h2>

 
    </Nav>
   
    
  </Navbar>

</header>


	);




}

export default  Menu;




