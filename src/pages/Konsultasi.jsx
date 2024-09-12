import DaftarKonselor from "../components/DaftarKonselor";
import { Container, Row, Col, Alert } from "react-bootstrap";
import HeroCekKon from "../components/HeroCekKonsul";
import Stack from "react-bootstrap/Stack";
import NavbarSipenting from "../components/Navbar";
import Footer from "../components/Footer";
import { UserContext } from "../context/UserContex";
import { useContext } from "react";

function Konsultasi() {
  const { isConsulted } = useContext(UserContext);
  return (
    <>
      <div>
        <Stack gap={3}>
          <NavbarSipenting />
          <HeroCekKon
            img={
              "https://res.cloudinary.com/damsz0xlx/image/upload/v1685717659/Assets/konsultasi_h27iqj.png"
            }
            coba={"Yuk Pilih"}
            title={"Teman Konsultasi !"}
            descrip={
              "Dapatkan konsultasi medis anak yang cepat dan mudah dari dokter kami yang berpengalaman. Konsultasi medis anak yang nyaman dan aman dari rumah Anda sendiri. "
            }
          />
          <div className="container mb-3">
            <div className="d-flex justify-content-between mb-5 conselor-sections">
              <div className="mx-auto">
                <h2
                  className="fw-bold ms-3 mb-4 pt-2 text-center"
                  style={{ color: "#3a3c3b" }}
                >
                  Daftar Konselor Kami
                </h2>
              </div>
            </div>

            <Container>
              <Row className="ms-5">
                <Col lg={6} className="mb-5">
                  <DaftarKonselor
                    img={
                      "https://firebasestorage.googleapis.com/v0/b/backend-anak.appspot.com/o/user%2Fdefault.jpeg?alt=media"
                    }
                    nama={"Bidan Rosi Eka Marta"}
                    pengalaman={"konsultasi menyeluruh dan berpengalaman"}
                    ratings={["yellow", "yellow", "yellow", "yellow", "yellow"]}
                    consultState={isConsulted}
                  />
                </Col>
              </Row>
            </Container>
          </div>
          <Footer />
        </Stack>
      </div>
    </>
  );
}

export default Konsultasi;
