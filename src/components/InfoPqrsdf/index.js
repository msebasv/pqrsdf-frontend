import React from "react";
import { pqrsdfText } from "../../objectsJson.js";
import "./index.scss";

const InfoPqrsdf = () => {
  return (
    <>
      {pqrsdfText.map((text) => {
        return (
          <div className="container-infopqrsdf" key={text.id}>
            <h6>{text.title}</h6>
            <li>{text.petition}</li>
            <li>{text.complaint}</li>
            <li>{text.claim}</li>
            <li>{text.suggestion}</li>
            <li>{text.denouncement}</li>
            <li>{text.informationRequest}</li>
          </div>
        );
      })}
    </>
  );
};

export default InfoPqrsdf;
