import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom";
import { ListGroup,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedItems from './SelectedItems';
export default function Test() {
  const [data, setData] = useState([])
  // State with list of all checked item
  const [checked, setChecked] = useState([]);
  useEffect(() => {
          fetch("https://624c52f7d71863d7a8084ea7.mockapi.io/country")
          .then((data) => data.json())
          .then((res)=> setData(res))
  },[])
  // Add/Remove checked item from list
  const handleCheck = (event) => {
    let updatedList = [...checked];
    let targetValue= data[event.target.id-1].name;
    if (event.target.checked) {
      updatedList = [...checked, targetValue];
    } else {
      updatedList.splice(checked.indexOf(targetValue), 1);
    }
    setChecked(updatedList);
  };


  return (
    <div className="d-flex justify-content-center">
       <ListGroup className="AllItem">
            <ListGroup.Item className="text-center" variant="info"><h5>All Items</h5></ListGroup.Item>
            {data?.map( (d) => <ListGroup.Item className="text-center" variant="info">
               <Form.Check 
                type="checkbox"
                id={d.id}
                label={d.name}
                onClick={handleCheck}
                />
            </ListGroup.Item>)}
           </ListGroup>
           <SelectedItems
           selectedItems={checked}
          />
    </div>
  );
}