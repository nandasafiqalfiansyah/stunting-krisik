import { Container, Row, Col } from "react-bootstrap";
// import "./herocekonsul.css";

const HeroCekKonsul = ({ img, title, descrip, coba }) => {
  return (
    <div className="hero hero-view" id="hero">
      <Container>
        <Row className="mb-md-0 mb-5 text-center">
          <Col lg={6}>
            <div className="text-center text-lg-start mt-3">
              <img
                className="hero-img img-fluid float-start mx-5"
                src={img}
                alt="..."
                style={{ width: "75%" }}
              />
            </div>
          </Col>
          <Col lg={6} py-lg-5>
            <div className="hero-content py-5">
              <h1 className="text-lg-start fw-bold main-title">
                {" "}
                {coba} <br /> <span className="singkatan ">{title}</span>{" "}
              </h1>
              <p className="text-lg-start mt-lg-2 main-content fs-5">
                {descrip}
              </p>
            </div>
          </Col>
        </Row>
        <hr />
      </Container>
    </div>
  );
};

import PropTypes from "prop-types";

HeroCekKonsul.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  descrip: PropTypes.string.isRequired,
  coba: PropTypes.string.isRequired,
};

export default HeroCekKonsul;
