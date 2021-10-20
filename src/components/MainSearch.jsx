import React from 'react'
import { Container, Row, Col, Form,Navbar,Nav,Button } from 'react-bootstrap'
import Job from './Job'
import { Link } from 'react-router-dom'

export default class MainSearch extends React.Component {

    state = {
        query: '',
        jobs: []
    }

    baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?search='


    handleChange = (e) => {
        this.setState({ query: e.target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(this.baseEndpoint + this.state.query )

        if (!response.ok) {
            alert('Error fetching results')
            return
        }

        const { data } = await response.json()

        this.setState({ jobs: data })

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={10} className='mx-auto my-3'>
                        <h1>Welcome To Job Search Engine</h1>
                    </Col>
   
                    <Col xs={10} className='mx-auto'>
                    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home"><Link to = "/Favorite" className="btn">My Favorite Company</Link></Navbar.Brand>
    <Nav className="mr-auto">
     
    </Nav>
    
    <Form onSubmit={this.handleSubmit}>
    <Form.Control type="search" value={this.state.query} onChange={this.handleChange} placeholder="type and press Enter" />
      
    </Form>
  </Navbar>

                        
                        
                    </Col>
                    <Col xs={10} className='mx-auto mb-5'>
                        {
                            this.state.jobs.map(jobData => <Job data={jobData} />)
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}