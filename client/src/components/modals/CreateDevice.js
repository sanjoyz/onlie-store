import React, { useContext, useState } from 'react'
import { Col, Modal, Form, Button, Dropdown, Row } from 'react-bootstrap'
import { Context } from '../../index'

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context)
  const [info, setInfo] = useState([])

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }])
  }
  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size='lg'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Add new device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className='mt-2'>
            <Dropdown.Toggle>Select type</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map(type =>
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='mt-2'>
            <Dropdown.Toggle>Select brand</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map(brand =>
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            placeholder='Enter device name'
            className='mt-3'
          />
          <Form.Control
            placeholder='Enter device price'
            className='mt-3'
            type='number'
          />
          <Form.Control
            className='mt-3'
            type='file'
          />
          <hr />
          <Button
            variant='outline-dark'
            onClick={addInfo}
          >
            Add new property
          </Button>
          {info.map((item) => {
            return (
              <Row className='mt-4' key={item.number}>
                <Col md={4}>
                  <Form.Control
                    placeholder='Enter property name'
                  />
                </Col>
                <Col md={4}>
                  <Form.Control
                    placeholder='Enter property description'
                  />
                </Col>
                <Col md={4}>
                  <Button variant='outline-danger' onClick={() => removeInfo(item.number)}>Delete</Button>
                </Col>

              </Row>
            )
          })}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Close</Button>
        <Button variant='outline-success' onClick={onHide}>Add</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateDevice
