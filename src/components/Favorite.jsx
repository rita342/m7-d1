import Button from "react-bootstrap/Button";
import { FaTrash } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import { connect } from 'react-redux'
import { removeItemFromCartAction } from "../actions";


const mapStateToProps = (state) => ({
  Favorite: state.Favorite.company,
  
})

const mapDispatchToProps = (dispatch) => ({
  removeFromFavorite: (fav) => {
    dispatch(removeFromFavorite(fav))
  }
})

class Favorite extends React.Component {
    render() {
        return(
            <Row>
      <Col sm={12}>
        <ul style={{ listStyle: "none" }}>
          {this.props.Favorite.map(fav => (
            <li key={i} className="my-4">
              <Button variant="danger" onClick={() => removeFromFavorite(fav)}>
                <FaTrash />
              </Button>
             
              {fav.title}
            </li>
           ) )}
        </ul>
      </Col>
      </Row>
        
        )
    }

}

 

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);