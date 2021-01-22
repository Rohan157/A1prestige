import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import './Header.css'
const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>A1 Prestige Automotives</Navbar.Brand>
          <tag className='subheading'>BMW Spares and Repairs</tag>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
             
              <Nav.Link href='/wrecks'>
                <i className='fas fa-car-crash'></i> Wrecks
              </Nav.Link>
              
              <Nav.Link href='/parts'>
                <i className='fas fa-cogs'></i> Parts
              </Nav.Link>
              
              <Nav.Link href='/service'>
                <i className='fas fa-tools'></i> Service
              </Nav.Link>
              
              <Nav.Link href='/contact'>
                <i className='fas fa-phone'></i> Contact Us
              </Nav.Link>
              
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
