import React from 'react'
import {Card,Badge,button} from 'react-boostrap';
const caderHackathons = () => {
  return (
  <>
  <Card className="h-100 shadow-sm bg-white rounded">

    <Card.Img variant="top"/>
    <Card.Body className="d-flex flex-column">
<div className='d-flex mb-2 justify-content-between'>
    <Card.title className="mb-0 font-weight-old">{}</Card.title>
</div>
<Card.Text className="text-secondary">{}</Card.Text>
<Button>
    </Card.Body>
  </Card>
  
  </>
  )
}
export default caderHackathons
