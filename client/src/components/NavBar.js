import React, { useContext } from 'react'
import { Context } from '../index'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/const'
import { observer } from 'mobx-react-lite'

const NavBar = observer(() => {
  const { user } = useContext(Context)
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}> iPear store </NavLink>
          {user.isAuth
            ? <Nav className='ml-auto'>
              <Button variant='outline-light'>Admin Panel</Button>
              <Button variant='outline-light' className='ml-2'>Log out</Button>
              </Nav>
            : <Nav className='ml-auto'>
              <Button variant='outline-light' onClick={() => user.setIsAuth(true)}>Login</Button>
            </Nav>}

        </Container>

      </Navbar>
    </>
  )
})

export default NavBar
