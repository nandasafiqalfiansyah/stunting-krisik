import { BmiProvider } from "../context/BmiContex";
import BmiCalculator from "../components/FromBmi";
import Footer from "../components/Footer";
import HeroCekKonsul from "../components/HeroCekKonsul";
import NavbarSipenting from "../components/Navbar";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import ArticleList from "../components/ListArtikel";
function CekImt(params) {
  return (
    <>
      <div>
        <Stack gap={3}>
          <NavbarSipenting />
          <HeroCekKonsul
            img={"https://res.cloudinary.com/damsz0xlx/image/upload/v1683201271/Assets/cekstunting_sxkcbq.png"}
            coba={"Yuk Coba"}
            title={"Cek Status Gizi !"}
            descrip={
              "Pantau pertumbuhan dan perkembangan anak Anda secara berkala. Untuk mengetahui seberapa sehat anak Anda. Cek kondisi anak Anda bisa menggunakan layanan kami. "
            }
          />

          <BmiProvider>
            <BmiCalculator />
          </BmiProvider>

          <section className="artikel">
            <Container className="text-center text-lg-start md-5 mb-5">
              <h3 className="fw-bold mb-4 pt-2 mt-4">Artikel Terkait</h3>
              <Container>
                <Row className="mt-5">
                  <ArticleList />
                </Row>
              </Container>
            </Container>
          </section>

          <Container className="text-center text-lg-start md-5 mb-5">
            <h3 className="fw-bold mb-4 layanan1" style={{color:"#3a3c3b"}}>Layanan Konsultasi</h3>
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
              <div className="mb-3 mb-lg-0">
                <p className="ms-0 layanan 2" style={{color:"#98a09c", fontSize:"20px", lineHeight:"40px"}}>
                  Dapatkan konsultasi medis anak yang cepat dan mudah dari konselor kami yang berpengalaman. Konsultasi
                  medis anak yang nyaman dan aman dari rumah Anda sendiri
                </p>
              </div>
              <div className="p-4 text-end ">
                <Link
                  to="/konsultasi"
                  className=" konseling btn rounded-5 px-5 py-2 text-sm-center text-white fw-semibold d-inline-block "
                  style={{ backgroundColor: "#54bca4" }}
                >
                  Konseling
                </Link>
              </div>
            </div>
          </Container>
          <Footer />
        </Stack>
      </div>
    </>
  );
}
export default CekImt;
