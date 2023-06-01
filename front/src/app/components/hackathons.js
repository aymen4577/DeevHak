import React from 'react'
import { Card, Badge, Button ,Container,Row,Col } from 'react-bootstrap';
const hackathons = () => {

  const { hackathons } = this.props;
  return (
<>

<Container>
    <Row>
  
  {hackathons &&
        hackathons.map((Hackathon) => (
          <Col xs={3} className="mb-5">
          <Card className="h-100 shadow-sm bg-white rounded">

          <Card.Img variant="top"/>
          <Card.Body className="d-flex flex-column">
      <div className='d-flex mb-2 justify-content-between'>
          <Card.title className="mb-0 font-weight-old">{Hackathon.title}</Card.title>
      </div>
      <Card.Text className="text-secondary">{Hackathon.NomEntriprise}</Card.Text>
      <Button></Button>
          </Card.Body>
        </Card>
        </Col>
      ))}
      </Row></Container>
</>
  )
}

export default hackathons
