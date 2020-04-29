import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav';

class Header extends Component {
	render () {
	return(
	<Container className="p-0" fluid={true}>
	<Navbar className="border-bottom" bg="transparent" expand="lg">
	<Navbar.Brand>Blog</Navbar.Brand>
	<Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
	<Navbar.Collapse id="navbar-toggle">
	<Nav className="ml-auto">
	  <Link className="nav-link" to="/">Home</Link>
	  <Link className="nav-link" to="/About">About</Link>
	  <Link className="nav-link" to="/Portfolio">Portfolio</Link>
	  <Link className="nav-link" to="/Contact">Contact</Link>
	</Nav>
	</Navbar.Collapse>
	</Navbar>
    </Container>
  )};
}

export default Header;