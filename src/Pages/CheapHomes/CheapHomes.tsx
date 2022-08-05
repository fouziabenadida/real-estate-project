import React from 'react'
import DataCheapHome from './DataCheapHome'
import { Container } from 'react-bootstrap'

export default function CheapHomes() {
  return (
    <>
      <Container fluid>
        
            <h1 style={{textAlign:"center", padding:"30px", fontFamily:"sans-serif"}}> List of Cheap Houses</h1>

            <DataCheapHome />
        
      </Container>
    </>
  )
}
