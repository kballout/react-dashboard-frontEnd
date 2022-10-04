import Button from 'react-bootstrap/Button'
import React from 'react'

function Unauthorized() {
  return (
    <div>
        <h2>Unauthorized</h2>
        <Button variant="light" size='lg' href='/'>Return Home</Button>
    </div>
  )
}

export default Unauthorized