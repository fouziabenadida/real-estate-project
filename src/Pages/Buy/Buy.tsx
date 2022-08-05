import React from 'react'
import DataBuy from './DataBuy'
import {Container,  Row} from 'react-bootstrap'
import './Buy.css'

export default function Buy() {
  return (
    <div className='buyBox'>
     
      <Container  fluid>
      <Row>
      <h1 className='buyTitre'>Our Properties</h1>
         <DataBuy/> 
      </Row>
    </Container>

    </div>
  )
}
