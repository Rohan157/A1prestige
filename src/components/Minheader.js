import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import './Minheader.css'
const Minheader = () => {
  return (
    <div className= 'navv'>
      <Navbar bg='dark' variant='dark'  collapseOnSelect>
        <Container>
         
         
            <Nav >
             
              <Nav.Link href='/wrecks/all'>
                All
              </Nav.Link>
              
              <Nav.Link href='/wrecks/1'>
                Series 1
              </Nav.Link>
              
              <Nav.Link href='/wrecks/3'>
                 Series 3
              </Nav.Link>
              
              <Nav.Link href='/wrecks/5'>
                Series 5
              </Nav.Link>

              <Nav.Link href='/wrecks/M3'>
                M3
              </Nav.Link>
              
            
            </Nav>
          
        </Container>
      </Navbar>
      </div>
    
  )
}

export default Minheader
