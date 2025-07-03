import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg' className='px-3'>
      <Navbar.Brand as={NavLink} to='/'>
        My Blog
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link as={NavLink} to='/'>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to='/posts/new'>
            Create Post
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar