import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import { useDispatch , useSelector} from 'react-redux';
//import { connect } from 'react-redux';
import { removeFromFav } from '../store/actions';

//const mapDispatchToProps=(dispatch)=>(  {
  
  //  removeFromFav: (f) => {dispatch(removeFromFav(f)); 
  //    }
  //});

//class Favourites extends React.Component {
   // render() {
       const Favourites = () => {
        const favourites = useSelector(state=>state.Favourites)
           const dispatch = useDispatch();
           
       
        return (
            <Container>
                <Row>
                    <Col xs={12}>
                        <ListGroup>
                        {
                            favourites.elements.map(i => (
                                <ListGroupItem>
                                    <button  className="btn btn-danger" onClick={() => dispatch(removeFromFav(i))}>delete</button>
                                    <span>{ i }</span>
                                </ListGroupItem>
                            ))
                            
                        }
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    
};
export default Favourites
//export default connect(state => state, mapDispatchToProps)(Favourites)