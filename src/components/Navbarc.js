import React, { Component } from 'react'
import {Navbar,Nav} from "react-bootstrap"
import {Link} from "react-router-dom"
class Navbarc extends Component {
  render() {
    return (
        <div className="row">
            <div className="col-12">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
               <div className="container">
               <Link to="/"> <Navbar.Brand href="#home">Hemmy React-Redux-Router Practice</Navbar.Brand> </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="flex-row-reverse" id="responsive-navbar-nav">
                    
                    <Nav>
                    <Link to="/"><Nav.Link href="#deets">Home</Nav.Link></Link>
                    <Link to="about"><Nav.Link href="#deets">About Us</Nav.Link></Link>
                    <Link to="contact"><Nav.Link href="#memes">
                        Contacts Us
                    </Nav.Link></Link>
                    </Nav>
                </Navbar.Collapse>
               </div>
                </Navbar>
            </div>
        </div>
    )
  }
}

export default Navbarc