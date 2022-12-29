import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Label from "../Label";
import Input from "../Input";
import ButtonPqrsdf from "../ButtonPqrsdf";
import RequestPqrsdf from "../RequestPqrsdf";
import "./index.scss";

const FormPqrsdf = () => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.settled);
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <Form className="form-container" onSubmit={handleSubmit}>
      <Label
        text="Consultar PQRSDF utilizando número de radicado:"
        classStyle="label-title"
      />
      <InputGroup className="mb-3">
        <Input
          type="text"
          placeholder="Número de radicado - PQRSDF"
          classStyle="input-pqrsdf"
          id="settled"
          name="settled"
          onChange={handleChange}
        />
        <ButtonPqrsdf
          classStyle="button-send-pqrsdf"
          text="Buscar"
          show={handleShow}
          type="submit"
        />
      </InputGroup>
      <RequestPqrsdf show={show} />
      <div className="new-pqrsdf">
        <Label text="Para crear una nueva PQRSDF&nbsp;" />
        <a href="https://curaduria2bogota.com/contacto/">haz click aquí</a>
      </div>
      <div className="attention-channel">
        <p>Canal de atención: info@curaduria2bogota.com</p>
      </div>
    </Form>
  );
};

export default FormPqrsdf;
