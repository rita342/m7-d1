import Button from "react-bootstrap/Button";
import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'
import { removeFromFav } from '../store/actions'
import { useDispatch, useSelector } from "react-redux";



const Favourites = () => {
  

    const dispatch = useDispatch();
    const favourites = useSelector((state) => state.favourites.elements);
  

    return (
       
          <Row>
          
              <ListGroup>
                {favourites.map((f) => (
                  <ListGroupItem>
                      <Button onClick={() => dispatch(removeFromFav(f))}></Button>
                    
                    <span>{f}</span>
                  </ListGroupItem>
                ))}
              </ListGroup>
           
          </Row>
      )
    };

    export default Favourites;
   