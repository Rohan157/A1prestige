import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
  return (
    <div className='full'>
    <footer >
      <Container >
        <Row>
          <Col className='text-center py-3' >Copyright &copy; A1 Prestige Automotives</Col>
          
        </Row>
       <Col className='author'> Created by  <a href="https://www.rohanm.me">Rohan_157 </a> </Col>
      </Container>
    </footer>
    </div>
  )
}

export default Footer
