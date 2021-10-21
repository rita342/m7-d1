import React from 'react'
import { Row, Col , Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { addToFav, removeFromFav } from '../store/actions'
import { connect } from 'react-redux'

const mapStateToProps = s => s

const mapDispatchToProps = (dispatch) => ({
    addToFavorite: (company) => dispatch(addToFav(company)),
    removeFromFavurite: (company) => dispatch(removeFromFav(company))
})


function FavoriteResults({ data, favorite, addToFavorite, removeFromFavorite }) {

    const isFav = favorite.includes(data.company_name)
    console.log(isFav, favorite)
    const toggleFavorite = () => {
        isFav 
            ? removeFromFavorite(data.company_name) 
            : addToFavorite(data.company_name) 
    }

    return (
        <Row className="mx-0 mt-3 p-3" style={{ border: '1px solid #00000033', borderRadius: 4 }}>
            <Col xs={3} className="d-flex">
                {
                    isFav
                        ? <Button color="gold" size={16} className="me-4 my-auto" onClick={toggleFavorite}>hh</Button>
                        : <Button color="gold" size={16} className="me-4 my-auto" onClick={toggleFavorite}>hh</Button>
                }
                <Link to={`/${data.company_name}`}>{data.company_name}</Link>
            </Col>
            <Col xs={9}><Link to={{ pathname: data.url }} target='_blank'>{data.title}</Link></Col>
        </Row>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(FavoriteResults)