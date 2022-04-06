import React from 'react';
import { input ,Form} from 'react-bootstrap';

const InputPage = (name) => {
  const type="checkbox";
  return (
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={name}
      />
  )
}

export default InputPage;