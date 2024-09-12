import React, { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NavbarSipenting from "../components/Navbar";
import ArticleList from "../components/ListArtikel";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const IsianArtikel = () => {
  const { id } = useParams();
  const [artikelcontent, setArtikelContent] = useState({});

  // console.log(id);
  useEffect(() => {
    fetch(`https://64539f69c18adbbdfea29dd5.mockapi.io/artikel/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setArtikelContent(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div>
        <NavbarSipenting />
        {Object.keys(artikelcontent).length > 0 && (
          <div className="results">
            <div className="hero-image d-flex justify-content-center">
              <img
                className="img-fluid"
                src={artikelcontent.gambar}
                alt="Article"
              />
            </div>
            <div className="container mt-4">
              <div className="row">
                <div className="col-lg-1">
                  <div className="d-flex flex-lg-column justify-content icon-artikel mt-5 gap-3 fs-2">
                    <a href="# " className="me-3 text-decoration-none">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        style={{ color: "#263238" }}
                      />
                    </a>
                    <a href="# " className="me-3 text-decoration-none">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        style={{ color: "#263238" }}
                      />
                    </a>
                    <a href="# " className="text-decoration-none">
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        style={{ color: "#263238" }}
                      />
                    </a>
                  </div>
                </div>

                <div className="col-lg-10 isi-artikel">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a className="text-decoration-none" href="/">
                          Home
                        </a>
                      </li>
                      <li className="breadcrumb-item">
                        <a className="text-decoration-none" href="/artikel">
                          Artikel
                        </a>
                      </li>
                      <li className="breadcrumb-item text-warna" style={{fontWeight:"600"}}>
                        {artikelcontent.judulArtikel}
                      </li>
                    </ol>
                  </nav>

                  <p className="text-warna jenis-artikel fw-bold fs-4">
                    {artikelcontent.jenisArtikel}
                  </p>
                  <h1 className="judul-artikel mt-3 fw-semibold">
                    {artikelcontent.judulArtikel}
                  </h1>
                  <h6 className="tinjauan mt-3" style={{color:"#3a3c3b"}}>
                    Ditinjau oleh:{" "}
                    <span className="text-warna">
                      {" "}
                      dr. Fadhli Rizal Makarim{" "}
                    </span>{" "}
                    : 15 Juli 2021{" "}
                  </h6>
                  <div className="content-artikel mt-3 text-justify">
                    <p style={{color:"#3a3c3b"}}>
                      {artikelcontent.content1} {artikelcontent.content2}
                    </p>
                    <p style={{color:"#3a3c3b"}}>
                      {artikelcontent.content3} {artikelcontent.content4}
                    </p>

                    <p style={{color:"#3a3c3b"}}>
                      {artikelcontent.content1} {artikelcontent.content2}
                    </p>
                    <p style={{color:"#3a3c3b"}}>
                      {artikelcontent.content3} {artikelcontent.content4}
                    </p>

                    <p style={{color:"#3a3c3b"}}>
                      {artikelcontent.content1} {artikelcontent.content2}
                    </p>
                    <p style={{color:"#3a3c3b"}}>
                      {artikelcontent.content3} {artikelcontent.content4}
                    </p>

                    <p style={{color:"#3a3c3b"}}>
                      {artikelcontent.content1} {artikelcontent.content2}
                    </p>
                    <p style={{color:"#3a3c3b"}}>
                      {artikelcontent.content3} {artikelcontent.content4}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <section className="artikel">
          <Container className="text-center text-lg-start md-5 mb-5">
            <h3 className="fw-bold mb-4 pt-2 mt-4">
              Artikel Terkait
            </h3>
            <Container className="mt-5">
              <Row>
                <ArticleList />
              </Row>
            </Container>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default IsianArtikel;
