import Button from "react-bootstrap/Button";
import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'

import { connect } from 'react-redux'
import { removeFromFav } from '../store/actions'

const mapDispatchToProps = (dispatch) => ({
    removeFromFav: (f) => { dispatch(removeFromFav(f)) }
})

class Favourite extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12}>
                        <ListGroup>
                        {
                            this.props.favourites.map(f => (
                                <ListGroupItem>
                                    <Button onClick={() => this.props.removeFromFav(f)}></Button>
                                    <span>{ f }</span>
                                </ListGroupItem>
                            ))
                            
                        }
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(s => s, mapDispatchToProps)(Favourite)