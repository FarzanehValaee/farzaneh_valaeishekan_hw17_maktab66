import React,{useState,useEffect} from 'react';
import { ListGroup,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function AllItems() {
  const [data, setData] = useState([])
  const [checkedState, setCheckedState] = useState(
    new Array(data.length).fill(false)
  );
  useEffect(() => {
      fetch("https://624c52f7d71863d7a8084ea7.mockapi.io/country")
      .then((data) => data.json())
      .then((res)=> setData(res))
  },[])
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    console.log(position.target.checked)
    // console.log(updatedCheckedState)
  setCheckedState(updatedCheckedState);
  // alert(`Checked state ${position} changed`)
    // console.log({checkedState})
  }
  return (
    <>
        <ListGroup className="AllItem">
        <ListGroup.Item className="text-center" variant="info"><h5>All Items</h5></ListGroup.Item>
        {data?.map( (d,index) => <ListGroup.Item className="text-center" variant="info">
           <Form.Check 
            type="checkbox"
            id={d.id}
            label={d.name}
            checked={checkedState[index]}
            onChange={() => handleOnChange(index)}
            />
        </ListGroup.Item>)}
       </ListGroup>
    </>
  )
}
