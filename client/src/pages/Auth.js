import { observer } from 'mobx-react-lite'
import React, { useContext, useState } from 'react'
import { Button, Card, Container, Form, FormControl } from 'react-bootstrap'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Context } from '../index'
import { login, registration } from '../http/userApi'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/const'

const Auth = observer(() => {
  const { user } = useContext(Context)
  const location = useLocation()
  const navigate = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginHandler = async () => {
    try {
      let data
      if (isLogin) {
        data = await login(email, password)
      } else {
        data = await registration(email, password)
      }
      user.setUser(user)
      user.setIsAuth(true)
      navigate(SHOP_ROUTE)
    } catch (error) {
      console.log(error)
    }
  }

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
            value={email}
            onChange={e => setEmail(e.target.value)}

          />
          <FormControl
            className='mt-3'
            placeholder='Enter password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'

          />
          <div className='d-flex justify-content-between mt-3 pl-3 pr-3'>
            {isLogin
              ? <div>
                Dont have an account? <NavLink to={REGISTRATION_ROUTE}>Register now</NavLink>
              </div>
              : <div>
                Already have an account? <NavLink to={LOGIN_ROUTE}>Login</NavLink>
                </div>}

            <Button
              variant='outline-success'
              onClick={() => loginHandler()}
            >
              {isLogin ? 'Login' : 'Register'}
            </Button>
          </div>

        </Form>
      </Card>

    </Container>
  )
})

export default Auth
