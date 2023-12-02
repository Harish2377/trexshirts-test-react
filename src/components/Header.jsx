import React from 'react'
import { Badge, Container, Form, Nav, Navbar} from 'react-bootstrap'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom'




function Header() {


  const cart =useSelector((state)=>state.cartReducer)



  return (
    <Navbar expand="lg" style={{zIndex:'1'}} className=' bg-success position-fixed top-0 w-100 mb-5 '>
    <Container>
      <Navbar.Brand ><Link to={'/'} style={{textDecoration:'none',color:'white',fontWeight:'bold'}}><i className="fa-solid fa-shirt me-2"></i>TeeRex TShirt</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="ms-auto">

          

          <Nav.Link className='btn border rounded me-2'>
              
              <Link to={'/cart'} className='d-flex align-items-center' style={{textDecoration:'none',color:'white',fontWeight:'bold'}}><i className="fa-solid fa-cart-shopping text-warning me-2"></i>Cart<Badge className='ms-2 rounded' bg="light">{cart.length}</Badge></Link>
              
          </Nav.Link>

          <Form.Control style={{width:'200px'}}
              type="text"
              placeholder="Search"
              className=" mr-sm-2  "  
            /> 
             
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header