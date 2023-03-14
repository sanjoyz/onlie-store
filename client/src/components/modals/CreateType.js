import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { createType } from '../../http/deviceApi'

const CreateType = ({ show, onHide }) => {
  const [value, setValue] = useState('')
  const addType = () => {
    createType({ name: value }).then(() => {
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
          Add new type
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
        <Button variant='outline-success' onClick={addType}>Add</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateType
