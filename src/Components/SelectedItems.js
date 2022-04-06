import React from 'react'
import {ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function SelectedItems(props) {
  const { selectedItems } = props;
  return (
    <ListGroup className="selectedItems">
    <ListGroup.Item className="text-center font-weight-bold" variant="danger"><h5>Selected Items</h5></ListGroup.Item>
      {selectedItems?.map( (d) => <ListGroup.Item className="text-center" variant="danger">
       {d}
      </ListGroup.Item>)}
   </ListGroup>
   
  )
}
