import React from 'react'
import { Container, Row, Col, Form,Navbar,Nav,Button } from 'react-bootstrap'
import Job from './Job'
import { Link } from 'react-router-dom'

const MainSearch = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [dataFetched, setDataFetched] = useState([])

    const baseString = 'https://remotive.io/api/remote-jobs?search='

    const onSubmit = async (event) => {
        event.preventDefault()

        const response = await fetch(baseString + searchTerm)

        if (!response.ok) {
            console.error("Fetching error.")
            return
        }

        const { jobs } = await response.json()

        setDataFetched(jobs)
    }

    const onSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <div>
          <Link to="/favourites" className="btn btn-primary">
            Favourites
          </Link>
        <Form className="m-5" onSubmit={onSubmit}>
            <Form.Label className="text-left">Search for jobs:</Form.Label>
            <Form.Control value={searchTerm} onChange={onSearchChange} type="text" autoComplete="off" placeholder="Search" />
            {dataFetched.map(job => {
                return (
                    <Job data={job}/>
                )
            })}
        </Form>
        </div>
    );
  }
  
  export default MainSearch;