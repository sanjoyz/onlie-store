import React, { useContext } from 'react'
import { Context } from '../index'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/const'
import { observer } from 'mobx-react-lite'

const NavBar = observer(() => {
  const { user } = useContext(Context)
  const navigate = useNavigate()
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <NavLink style={{ color: 'white', textDecoration: 'none' }} to={SHOP_ROUTE}> iPear store </NavLink>
          {user.isAuth
            ? <Nav className='ml-auto'>
              <Button variant='outline-light' onClick={() => navigate(ADMIN_ROUTE)}>Admin Panel</Button>
              <Button variant='outline-light' onClick={() => navigate(LOGIN_ROUTE)} className='ml-2'>Log out</Button>
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
