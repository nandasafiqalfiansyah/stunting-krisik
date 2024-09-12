import { Container, Row, Col } from "react-bootstrap";

function Artikel({ img, title, des }) {
  return (
    <>
      <Container className="text-center">
        <h3 className="fw-700 mt-7 mb-4">Artikel Kami</h3>
        <Row className="mt-5">
          <Col sm={6} lg={4} mb={4}>
            <div className="mx-4">
              <div className="img-wrapper">
                <img
                  src="@/assets/web/images/news/post1.jpg"
                  className="d-block w-100"
                  style={{ borderRadius: "15px" }}
                  alt="..."
                />
              </div>
              <div className="news-content mt-4">
                <p className="card-text text-start fs-7">
                  Bupati Banyuwangi: Libatkan Perempuan Lawan Terorisme
                </p>
                <div className="text-end">
                  <a
                    href="https://www.merdeka.com/peristiwa/bupati-banyuwangi-libatkan-perempuan-lawan-terorisme.html"
                    className="btn fs-7"
                  >
                    Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6} lg={4} mb={4}>
            <div className="mx-4">
              <div className="img-wrapper">
                <img
                  src="@/assets/web/images/news/post2.jpeg"
                  className="d-block w-100"
                  style={{ borderRadius: "15px" }}
                  alt="..."
                />
              </div>
              <div className="news-content mt-4">
                <p className="card-text text-start fs-7">
                  Bupati Banyuwangi: Perempuan Pelaku Terorisme Bukan Bentuk
                  Kesetaraan Gender
                </p>
                <div className="text-end">
                  <a
                    href="https://news.detik.com/berita-jawa-timur/d-5518807/bupati-banyuwangi-perempuan-pelaku-terorisme-bukan-bentuk-kesetaraan-gender?single=1"
                    className="btn fs-7"
                  >
                    Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6} lg={4} mb={4}>
            <div className="mx-4">
              <div className="img-wrapper">
                <img
                  src="@/assets/web/images/news/post3.jpg"
                  className="d-block w-100"
                  style={{ borderRadius: "15px" }}
                  alt="..."
                />
              </div>
              <div className="news-content mt-4">
                <p className="card-text text-start fs-7">
                  LP3ES Catat Peran Perempuan Dalam Jaringan Terorisme Meningkat
                </p>
                <div className="text-end">
                  <a
                    href="https://nasional.tempo.co/read/1448618/lp3es-catat-peran-perempuan-dalam-jaringan-terorisme-meningkat"
                    className="btn fs-7"
                  >
                    Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Artikel;
