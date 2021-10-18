import React from 'react'
import {Link} from 'react-router-dom'
import {Form,Card,Button ,Container, Row, Col} from 'react-bootstrap'



export default class Search extends React.Component {

    state = {
        query: '',
         
    }

  baseurl = 'https://strive-jobs-api.herokuapp.com/jobs?search='


    handleChange = (e) => {
        this.setState({ query: e.target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(this.baseurl + this.state.query)


        const data = await response.json()
       

        this.setState( data )

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={10} className='mx-auto my-3'>
                        <h6>Jobs Search Engine</h6>
                    </Col>
                    <Col xs={10} className='mx-auto'>
                        <Form onSubmit={this.handleSubmit} style={{background:'black'}}>
                            <Form.Control type="search" value={this.state.query} onChange={this.handleChange} />
                        </Form>
                    </Col>
                    <Col>
                    {
                        this.state.data.map( job =>(
                            <>
                            <Card>
  <Card.Header>Jobs</Card.Header>
  <Card.Body>
    <Card.Title>{job.title}</Card.Title>
    <Card.Text>
    {job.category}
    </Card.Text>
    <Button style={{color:'white'}}>{job.category}</Button>
  </Card.Body>
</Card>
 </>
 )) } </Col>
                  
                </Row>
     
            </Container>
        )
    }
}