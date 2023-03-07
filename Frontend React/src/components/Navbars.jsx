import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Ailogo from '../images/ai.png'
export const Navbars = () => {
  return (
    <>
        <Navbar   className='nav-bg' variant="primary" >
        <Container >
          
            <img src={Ailogo} alt='logo' className='logo'/>
            <Navbar.Brand href="#" className='header'>Team Cypher</Navbar.Brand>
          
          <Nav className="me-auto">
            <Nav.Link href="http://localhost:5000/" className='code'>AI Based Code Converter</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
