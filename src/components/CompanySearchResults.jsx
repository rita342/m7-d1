import React from 'react'
import { Container, Row, Col ,Card} from 'react-bootstrap'
import Job from './Job'


export default class CompanySearchResults extends React.Component {

    state = {
        jobs: []
    }

    componentDidMount() {
        this.getJobs()
    }

    baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?company='

    getJobs = async () => {
        const response = await fetch(this.baseEndpoint + this.props.match.params.companyName)
        const { data } = await response.json()

        this.setState({ jobs: data })
    }

    render() {
        return <Container>
            <Row>
                <Col>
                    {
                        this.state.jobs.map(jobData =>(
                            <Card>
                            <Card.Header>Jobs</Card.Header>
                            <Card.Body>
                              <Card.Title>{jobData.title}</Card.Title>
                              <Card.Text>
                              {jobData.category}
                              </Card.Text>
                             
                            </Card.Body>
                          </Card>
                        ))
                    }
                </Col>
            </Row>
        </Container>
    }
}