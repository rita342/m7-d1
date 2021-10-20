import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Job({ data }) {
    return (
        <Row className="mx-0 mt-3 p-3" style={{ border: '1px solid #00000033', borderRadius: 4,background:'white' ,width:'300px'}}>
            <Col xs={3}><Link to={`/${data.title}`}>{data.title}</Link>
            <Button> myfavorite</Button>
            </Col>
            
        </Row>
    )
}