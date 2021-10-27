import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { addToFav, removeFromFav } from '../store/actions'
import { connect } from 'react-redux'


const mapStateToProps = s => s

const mapDispatchToProps = (dispatch) => ({
    addToFavourites: (company) => dispatch(addToFav(company)),
    removeFromFavourites: (company) => dispatch(removeFromFav(company))
})


function FavouriteResults({ data, favourites, addToFavourites, removeFromFavourites }) {

    const isFav = favourites.includes(data.company_name)
    console.log(isFav, favourites)
    const toggleFavourite = () => {
        isFav 
            ? removeFromFavourites(data.company_name) 
            : addToFavourites(data.company_name) 
    }

    return (
        <Row className="mx-0 mt-3 p-3" style={{ border: '1px solid #00000033', borderRadius: 4 }}>
            <Col xs={3} className="d-flex">
                {
                    isFav
                        ? <button className="btn btn-danger" size={16} className="me-4 my-auto" onClick={toggleFavourite}>add to favourite</button>
                        : <button color="gold" size={16} className="me-4 my-auto" onClick={toggleFavourite}>its added</button>
                }
                <Link to={`/${data.company_name}`}>{data.company_name}</Link>
            </Col>
            
        </Row>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(FavouriteResults)