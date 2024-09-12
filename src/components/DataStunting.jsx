import React from "react";
import { Container, Card } from "react-bootstrap";

const DataSection = ({ img, title, cardText1, cardText2 }) => {
  return (
    <>
      <Card className="text-center mb-3" style={{ width: "14rem", height: "15rem", border: "4px solid", borderColor: "#54bca4" }}>
        <Card.Body className="d-flex flex-column align-items-center">
          <Card.Img src={img} alt="" style={{ maxWidth: "60px", maxHeight: "60px" }} className="mb-3" />
          <Card.Title className="card-title fw-bold fs-4">{title}</Card.Title>

          <Card.Text className="card-text">{cardText1}</Card.Text>
          <Card.Text className="card-text mt-1">{cardText2}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default DataSection;
