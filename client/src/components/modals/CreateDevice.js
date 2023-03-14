import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Col, Modal, Form, Button, Dropdown, Row } from 'react-bootstrap'
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceApi'
import { Context } from '../../index'

const CreateDevice = observer(({ show, onHide }) => {
  const { device } = useContext(Context)
  const [info, setInfo] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)
  const [brand, setBrand] = useState(null)
  const [type, setType] = useState(null)

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
    fetchBrands().then(data => device.setBrands(data))    
  }, [])

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }])
  }
  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }

  const changeInfo = (key, value, number) => {
    setInfo(info.map(item => item.number === number ? {...item, [key]: value} : item))
  }

  const selectFile = e => {
    setFile(e.target.files[0])
  }

  const addDevice = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', `${price}`)    
    formData.append('img', file)
    formData.append('BrandId', device.selectedBrand.id)
    formData.append('TypeId', device.selectedType.id)
    formData.append('info', JSON.stringify(info))
    
    createDevice(formData).then((data) => {
        console.log(data)
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
          Add new device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className='mt-2'>
            <Dropdown.Toggle>{device.selectedType.name || 'Select type'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map(type =>
                <Dropdown.Item 
                    onClick={() => device.setSelectedType(type)} 
                    key={type.id} 
                >
                    {type.name}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='mt-2'>
            <Dropdown.Toggle>{device.selectedBrand.name || 'Select brand'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map(brand =>
                <Dropdown.Item 
                    onClick={() => device.setSelectedBrand(brand)}
                    key={brand.id}
                >
                    {brand.name}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            placeholder='Enter device name'
            className='mt-3'
            onChange={e => setName(e.target.value)}
            value={name}
          />
          <Form.Control
            placeholder='Enter device price'
            className='mt-3'
            onChange={e => setPrice(Number(e.target.value))}
            value={price}
            type='number'
          />
          <Form.Control
            className='mt-3'
            onChange={selectFile}
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
                    value={item.title}
                    onChange={(e) => changeInfo('title', e.target.value, item.number)}
                  />
                </Col>
                <Col md={4}>
                  <Form.Control
                    placeholder='Enter property description'
                    value={item.description}
                    onChange={(e) => changeInfo('description', e.target.value, item.number)}
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
        <Button variant='outline-success' onClick={addDevice}>Add</Button>
      </Modal.Footer>
    </Modal>
  )
})

export default CreateDevice
