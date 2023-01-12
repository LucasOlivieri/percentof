import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
export const NavbarComponent = () => {
  return (
    <Navbar variant='warning' bg='warning' className='shadow'>
        <Nav.Link className='mx-auto' disabled><b>Calculador de porcentaje</b></Nav.Link>
    </Navbar>
  )
}
