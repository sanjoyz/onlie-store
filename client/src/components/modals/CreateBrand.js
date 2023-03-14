import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { createBrand } from '../../http/deviceApi'
const CreateBrand = ({ show, onHide }) => {
  const [value, setValue] = useState('')
  const addBrand = () => {
    createBrand({ name: value }).then(() => {
      setValue('')
      onHide()
    })
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
          Add new brand
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder='Enter type name'
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Close</Button>
        <Button variant='outline-success' onClick={addBrand}>Add</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateBrand
