import React from 'react'
import { Button, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import Shop2Icon from '@mui/icons-material/Shop2';
import { NavLink } from 'react-router-dom';


export default function Head() {
    const stlyes ={

    } 
    return (
        <>
            <Navbar expand="lg" className="container d-flex align-items-center justify-content-center">
                    <Navbar.Brand href="#home" className='fs-3'>
                        <div className='d-flex align-items-center justify-content-center'>
                        <Shop2Icon/><h3>Vegetables</h3><Shop2Icon/>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto fs-6 fw-medium d-flex gap-3">
                        <NavLink to="/" style={{textDecoration:"none", color:"black"}}>Home</NavLink>
                            <NavLink to="/About" style={{textDecoration:"none", color:"black"}}>About</NavLink>
                            <NavLink to="/Service" style={{textDecoration:"none", color:"black"}}>Service</NavLink>
                            <NavLink to="/Contactus" style={{textDecoration:"none", color:"black"}}>Contact us</NavLink>
                            
                        </Nav>
                        <Nav className="ms-auto d-flex gap-2">
                        
                            <NavLink to="/Register" className="bg-info rounded" style={{textDecoration:"none", color:"black",padding:"10px"}}> Register Here </NavLink>
                        <NavLink to="/Login" className="bg-info rounded" style={{textDecoration:"none", color:"black",padding:"10px"}}> Log In </NavLink>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </>
    )
}
