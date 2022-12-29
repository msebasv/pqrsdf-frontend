import React from "react";
import { Form } from "react-bootstrap";
import "./index.scss";
const Input = (props) => {
  return (
    <Form.Control
      onChange={props.onChange}
      name={props.name}
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      className={props.classStyle}
      style={{ style: false }}
    />
  );
};

export default Input;
