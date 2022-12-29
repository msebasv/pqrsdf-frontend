import React from "react";
import { Button } from "react-bootstrap";
import "./index.scss";

const ButtonPqrsdf = (props) => {
  return (
    <Button className={props.classStyle} onClick={props.show} type={props.type}>
      {props.text}
    </Button>
  );
};

export default ButtonPqrsdf;
