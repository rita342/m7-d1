import React from 'react'
import { Row, Col,Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { addToFav, removeFromFav } from '../store/actions'
//import { connect } from 'react-redux'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'


//const mapStateToProps = s => s

//const mapDispatchToProps = (dispatch) => ({
  //  addToFavourites: (company) => dispatch(addToFav(company)),
    //removeFromFavourites: (company) => dispatch(removeFromFav(company))
//})


//function FavouriteResults({ data, favourites, addToFavourites, removeFromFavourites }) {
function  FavouriteResults({data}) { 
const favourites = useSelector((state) => state.favourites)
const dispatch = useDispatch();

    const isFav = favourites.includes(data.company_name)
    console.log(isFav, favourites)
    const toggleFavourite = () => {
        isFav 
            ? dispatch(removeFromFav(data.company_name) )
            : dispatch(addToFav(data.company_name) )
    }

    return (
        <Card style={{ width: '18rem',marginTop:'30px' }}>
        
        <Card.Body>
          <Card.Title> <Link to={`/${data.company_name}`}>{data.company_name}</Link></Card.Title>
          <Card.Text>
          {
                    isFav
                        ? <button className="btn btn-danger" size={16} className="me-4 my-auto" onClick={toggleFavourite}>it's added</button>
                        : <button color="gold" size={16} className="me-4 my-auto" onClick={toggleFavourite}>add to favourite</button>
                }
          </Card.Text>
       
        </Card.Body>
      </Card>
        
    )
}


//export default connect(mapStateToProps, mapDispatchToProps)(FavouriteResults)
export default FavouriteResults