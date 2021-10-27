import React from 'react'
import { Container, Row, Col, Form ,Navbar,Nav} from 'react-bootstrap'

import { Link } from "react-router-dom"
import FavouriteResults from './FavouriteResults'


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

        const response = await fetch(this.baseEndpoint + this.state.query + '&limit=20')

        if (!response.ok) {
            alert('Error fetching results')
            return
        }

        const { data } = await response.json()

        this.setState({ jobs: data })

    }

    render() {
        return (
            <div>
                    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
    <Link to="/favourites" className="btn btn-primary">Favourites</Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form onSubmit={this.handleSubmit}>
                            <Form.Control type="search" value={this.state.query} onChange={this.handleChange} placeholder="type and press Enter" />
                        </Form>
  </Navbar>
                    <Col xs={10} className='mx-auto mb-5'>
                    {
                            this.state.jobs.map(jobData => <FavouriteResults  data={jobData} />)
                        }
                    </Col>
                    </div>   
        )
    }
}