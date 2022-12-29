import React from "react";
import { Form } from "react-bootstrap";
import "./index.scss";

const Label = (props) => {
  return <Form.Label className={props.classStyle}>{props.text}</Form.Label>;
};

export default Label;
