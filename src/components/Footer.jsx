import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footercolo px-md-0 px-3">
        <Container>
          <Row className="pt-5 pb-5 d-flex justify-content-around">
            <Col md={4} lg={4}>
              <Link to="/">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/sipendik-9a2d4.appspot.com/o/Logo%20(1).png?alt=media"
                  className="flogo"
                  width={"180"}
                  alt=""
                />
              </Link>

              <p className="fslogan fw-medium text-white mt-4 fs-6">
                Cegah stunting itu penting <br /> bersama{" "}
                <span className="dev">SIPENDIK</span>. <br />
                <span className="dev">#SayNoToStunting</span>
              </p>
              <div className="ficon d-flex justify-content-start">
                <img
                  src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201270/Assets/Facebook_u6ren2.png"
                  width={"60"}
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201272/Assets/Twitter_n5xxvy.png"
                  width={"60"}
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201271/Assets/Instagram_leicpi.png"
                  width={"60"}
                  alt=""
                />
              </div>
            </Col>
            <Col md={4} lg={3} className="mt-4 mt-md-0 ffotermenu">
              <div>
                <h5 className="text-white fw-bold fs-5">Halaman Menu</h5>
                <div className="mt-3 fw-medium text-white">
                  <Link
                    to="/"
                    className="d-block text-white mb-3 text-decoration-none fs-6"
                  >
                    Beranda
                  </Link>
                  <Link
                    to="/cekgizi"
                    className="d-block text-white mb-3 text-decoration-none fs-6"
                  >
                    Cek Gizi
                  </Link>
                  <Link
                    to="/"
                    className="d-block text-white mb-3 text-decoration-none fs-6"
                  >
                    Layanan Kami
                  </Link>
                  <Link
                    to="/register"
                    className="d-block text-white mb-3 text-decoration-none fs-6"
                  >
                    Daftar
                  </Link>
                  <Link
                    to="/login"
                    className="d-block text-white mb-3 text-decoration-none fs-6"
                  >
                    Masuk
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={4} lg={2} className="mt-4 mt-md-0">
              <div>
                <h5 className="text-white fw-bold fs-5">Layanan</h5>
                <div className="mt-3 fw-medium text-white">
                  <Link
                    to="/konsultasi"
                    className="d-block text-white mb-3 text-decoration-none fs-6"
                  >
                    Konsultasi
                  </Link>
                  <Link
                    to="/cekgizi"
                    className="d-block text-white mb-3 text-decoration-none fs-6"
                  >
                    Cek Gizi
                  </Link>
                  <Link
                    to="/artikel"
                    className="d-block text-white mb-3 text-decoration-none fs-6"
                  >
                    Artikel
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={4} lg={3} className="mt-4 mt-md-0">
              <div>
                <h5 className="text-white fw-bold fs-5">Kontak Kami</h5>
                <div className="mt-3 fw-medium text-white">
                  <img
                    src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201270/Assets/email_asuufb.png"
                    alt=""
                  />
                  <span>
                    <a
                      className="d-inline-flex ps-2 text-white mb-3 text-decoration-none fs-6"
                      href="mailto:sipendik@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      sipendik@gmail.com
                    </a>
                  </span>
                  <br />
                  <img
                    src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201273/Assets/telp_e9see9.png"
                    alt=""
                  />
                  <span>
                    <a
                      className="d-inline-flex ps-2 text-white mb-3 text-decoration-none fs-6"
                      href="https://wa.me/+628979213614"
                      target="_blank"
                      rel="noreferrer"
                    >
                      +6285330416462 (cs)
                    </a>
                  </span>
                  <br />
                  <img
                    src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201271/Assets/location_emsdtc.png"
                    alt=""
                  />
                  <span>
                    <a
                      className="d-inline-flex ps-2 text-white mb-3 text-decoration-none fs-6"
                      href="https://maps.app.goo.gl/x7Cu8gXSB4VGs39N9"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Kec. Pudak, <br /> Ponorogo Jawa Timur 63418
                    </a>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
          <hr />
          <Row className="mt-4 pb-4 d-flex justify-content-between align-items-center">
            <Col
              xs={12}
              md={2}
              className="d-flex  justify-content-md-start mb-3 mb-md-0"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/sipendik-9a2d4.appspot.com/o/logo-kelompok7.png?alt=media"
                alt="Logo Kelompok 7"
                className="me-2"
                style={{ height: "50px" }}
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/sipendik-9a2d4.appspot.com/o/logo-umpo.png?alt=media"
                alt="Universitas Muhammadiyah Ponorogo"
                className="me-2"
                style={{ height: "70px" }}
              />
            </Col>
            <Col
              xs={12}
              md={5}
              className=" text-md-start mb-3 mb-md-0 fcopyright fs-6 fw-medium text-white"
            >
              © {new Date().getFullYear()} <span className="dev">SIPENDIK</span>{" "}
              Kelompok 07 All rights reserved
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
