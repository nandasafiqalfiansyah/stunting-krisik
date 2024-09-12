import { Stack } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import NavbarSipenting from "../components/Navbar";
import CardArtikel from "../components/CardArtikel";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Artikel(params) {
  const [Artikel, setArtikel] = useState(null);

  useEffect(() => {
    fetchArtikel();
  }, []);
  // console.log(Artikel);
  const fetchArtikel = () => {
    fetch("https://64539f69c18adbbdfea29dd5.mockapi.io/artikel/5")
      .then((response) => response.json())
      .then((data) => setArtikel(data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div>
        <Stack gap={4}>
          <NavbarSipenting />
          {Artikel && (
            <div className="hero-artikel mt-5">
              <Container className="mt-5 text-center  ">
                <Row className="align-items-center">
                  <Col lg={5} className="py-lg-5 text-start text-lg-start ">
                    <div className="py-5">
                      <h3 className="text-warna fs-5" style={{fontWeight:"700"}}>{Artikel.jenisArtikel}</h3>
                      <h1 className="main-title judul-list-artikel fs-2" style={{color:"#3a3c3b", fontWeight:"600"}}>{Artikel.judulArtikel}</h1>
                      <p className="fw-light hero-artikel-deskripsi fs-5 fw-normal" style={{ lineHeight: "34px" }}>{Artikel.rangkuman}</p>
                      <Link to={`/artikel/${Artikel.id}`} style={{ textDecoration: "none" }} className="text-warna fw-bold fs-5">
                        Selengkapnya
                      </Link>
                    </div>
                  </Col>
                  <Col lg={7} className="hero-artikel-image py-5">
                    <div className="text-center text-lg-center mt-3">
                      <img src={Artikel.gambar} className="hero-img img-fluid" alt="Hero" />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          )}
          <Container className="artikel mt-3">
            <Row>
              <Col>
                <div className="text-center">
                  <h2 className="fw-bold">Artikel Terbaru</h2>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="artikel-list my-3">
                <CardArtikel />
              </Col>
            </Row>
          </Container>
          <Footer />
        </Stack>
      </div>
    </>
  );
}
export default Artikel;
