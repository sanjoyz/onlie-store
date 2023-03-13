import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import bigStar from '../assets/bigStar.svg'
const DevicePage = () => {
  const device = {
    id: 13,
    name: 'ZenPhone',
    rating: '0',
    price: 100000,
    img: 'https://picsum.photos/200',
    createdAt: '2023-03-03 12:55:44.839+03',
    updatedAt: '2023-03-03 12:55:44.839+03',
    TypeId: 2,
    BrandId: 2
  }
  const description = [
    { id: 1, title: 'RAM', description: '5 gb' },
    { id: 2, title: 'Camera', description: '12 mp' },
    { id: 3, title: 'Core', description: 'A10' },
    { id: 4, title: 'Battery', description: '4000' },
    { id: 5, title: 'Display', description: 'HD' }
  ]
  return (
    <Container className='mt-3'>
      <Row>
        <Col md={4}>
          <Image src={device.img} width={300} height={300} />
        </Col>
        <Col md={4}>
          <div className='d-flex align-items-center flex-column'>
            <h2>{device.name}</h2>
            <div
              className='d-flex align-items-center justify-content-center'
              style={{ background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}
            >
              {device.rating}
            </div>
          </div>

        </Col>
        <Col md={4}>
          <Card
            className='d-flex flex-column align-items-center justify-content-around'
            style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
          >
            <h3>От: {device.price} руб.</h3>
            <Button variant='outline-dark'>Add to cart</Button>
          </Card>
        </Col>
      </Row>
      <Row className='d-flex flex-column m-3'>
        <h1>Specs</h1>
        {description.map((info, index) =>
          <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
            {info.title}: {info.description}
          </Row>
        )}
      </Row>
    </Container>

  )
}

export default DevicePage
