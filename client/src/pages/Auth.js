import React from 'react'
import { Button, Card, Container, Form, FormControl, Row } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/const'

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  console.log(location)
  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className='p-5'>
        <h2 className='m-auto'>{isLogin ? 'Login' : 'Registration'}</h2>
        <Form className='d-flex flex-column'>
          <FormControl
            className='mt-3'
            placeholder='Enter email'
          />
          <FormControl
            className='mt-3'
            placeholder='Enter password'
          />
          <div className='d-flex justify-content-between mt-3 pl-3 pr-3'>
            {isLogin
              ? <div>
                Dont have an account? <NavLink to={REGISTRATION_ROUTE}>Register now</NavLink>
              </div>
              : <div>
                Already have an account? <NavLink to={LOGIN_ROUTE}>Login</NavLink>
                </div>}

            <Button variant='outline-success'>
              {isLogin ? 'Login' : 'Register'}
            </Button>
          </div>

        </Form>
      </Card>

    </Container>
  )
}

export default Auth
