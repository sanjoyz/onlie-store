import React from 'react';
import { Button, Card, Container, Form, FormControl, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { REGISTRATION_ROUTE } from '../utils/const';

const Auth = () => {
  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className='p-5'>
        <h2 className='m-auto'>Login</h2>
        <Form className='d-flex flex-column'>
          <FormControl
            className='mt-3'
            placeholder='Enter email'
          />
          <FormControl
            className='mt-3'
            placeholder='Enter password'
          />
          <Form className='d-flex justify-content-between mt-3 pl-3 pr-3'>
            <div>
              Dont have an account? <NavLink to={REGISTRATION_ROUTE}>Register now</NavLink>
            </div>
            <Button variant='outline-success'>
              Login
            </Button>
          </Form>

        </Form>
      </Card>

    </Container>
  );
};

export default Auth;
