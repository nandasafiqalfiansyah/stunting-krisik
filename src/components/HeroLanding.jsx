import { Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

function HeroLanding() {
  return (
    <div className="hero hero-view" id="hero">
      <Container>
        <Row className="mb-md-0 mb-5 text-center">
          <Col lg={6} py-lg-5>
            <div className="hero-content py-5">
              <h1 className="text-lg-start fw-bold main-title">
                SIPENDIK{" "}
                <span className="singkatan">
                  Sistem <br /> Pencegahan Stunting Desa Krisik
                </span>
              </h1>
              <p className="text-lg-start mt-lg-2 main-content fs-5">
                SIPENDIK merupakan layanan konsultasi stunting, cek stunting dan
                edukasi yang bertujuan untuk pencegahan stunting pada masyakarat
                Desa Krisik.
              </p>

              <div className="mt-4 text-lg-start">
                <Link to="/cekgizi" className="rounded-5 btncek">
                  Coba Cek Gizi
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="text-center text-lg-start mt-3">
              <img
                src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201273/Assets/hero_e6ssza.png"
                className="hero-img img-fluid float-end mx-5"
                style={{ width: "75%" }}
                alt="Hero"
              />
            </div>
          </Col>
        </Row>
        <hr />
      </Container>
    </div>
  );
}

export default HeroLanding;
