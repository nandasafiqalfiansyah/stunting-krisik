import { useContext, useRef } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { BmiContext } from "../context/BmiContex";
import ReactToPrint from "react-to-print";

const BmiCalculator = () => {
  const {
    nama,
    setNama,
    jk,
    setJk,
    bb,
    setBb,
    tl,
    setTl,
    umur,
    setUmur,
    tinggi,
    setTinggi,
    hasil,
    calculateBmi,
    clearData,
  } = useContext(BmiContext);

  const componentRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBmi();
  };

  const handleReset = () => {
    clearData();
  };

  return (
    <Container className="mt-3 form">
      <h2
        className="fw-bold mb-4 fs-3 text-center"
        style={{ color: "#3a3c3b" }}
      >
        Masukkan Data Index Cek Gizi
      </h2>
      <Form onSubmit={handleSubmit} className="text-start fw-bold">
        <Row className="mt-5">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="p-2 fs-6 fw-semibold">
                Nama Lengkap
              </Form.Label>
              <Form.Control
                className="rounded-5"
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Masukkan Nama"
                required
                pattern="[A-Za-z\s]*"
                title="Mohon masukkan hanya huruf dan spasi"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="p-2 fs-6 fw-semibold">
                Pilih Jenis Kelamin
              </Form.Label>
              <Form.Select
                className="rounded-5"
                value={jk}
                onChange={(e) => setJk(e.target.value)}
                required
              >
                <option value="">Jenis Kelamin :</option>
                <option value="laki-laki">Laki-laki</option>
                <option value="perempuan">Perempuan</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label className="p-2 fs-6 fw-semibold">
                Berat Badan (kg)
              </Form.Label>
              <Form.Control
                className="rounded-5"
                type="number"
                value={bb}
                onChange={(e) => setBb(e.target.value)}
                placeholder="Masukkan Berat Badan"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="p-2 fs-6 fw-semibold">
                Tanggal Lahir
              </Form.Label>
              <Form.Control
                className="rounded-5"
                type="date"
                value={tl}
                onChange={(e) => setTl(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="p-2 fs-6 fw-semibold">
                Umur (bulan)
              </Form.Label>
              <Form.Control
                className="rounded-5"
                type="number"
                value={umur}
                onChange={(e) => setUmur(e.target.value)}
                placeholder="Masukkan Umur"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="p-2 fs-6 fw-semibold">
                Tinggi Badan (cm)
              </Form.Label>
              <Form.Control
                className="rounded-5"
                type="number"
                value={tinggi}
                onChange={(e) => setTinggi(e.target.value)}
                placeholder="Masukkan Tinggi"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="mt-4 text-center text-lg-center mb-5 mt-5">
          <Button
            type="submit"
            className="btn-custom btclor py-2 px-5 rounded-5 fs-6 fw-semibold"
            id="cekstunting1"
            style={{ backgroundColor: "#54bca4", borderColor: "white" }}
          >
            Mulai Cek
          </Button>
        </div>
      </Form>

      {hasil && (
        <Alert variant="success" className="mt-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-8" style={{ color: "#3a3c3b" }}>
                <div className="fw-semibold fs-5">
                  <div className="row mb-2">
                    <div className="col-6 col-md-7">Nama :</div>
                    <div className="col-6 col-md-5 text-end">{nama}</div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-6 col-md-7">Umur :</div>
                    <div className="col-6 col-md-5 text-end">{umur}</div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-6 col-md-7">Berat Badan :</div>
                    <div className="col-6 col-md-5 text-end">{bb}</div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-6 col-md-7">Tinggi Badan :</div>
                    <div className="col-6 col-md-5 text-end">{tinggi}</div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-6 col-md-7">Jenis Kelamin :</div>
                    <div className="col-6 col-md-5 text-end">{jk}</div>
                  </div>
                  <div className="row">
                    <div className="col-6 col-md-7">Hasil :</div>
                    <div className="col-6 col-md-5 text-end">{hasil}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <Button
                variant="danger"
                className="btn-custom py-2 px-5 rounded-5 fs-6 fw-semibold"
                onClick={handleReset}
              >
                Mulai Lagi
              </Button>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <ReactToPrint
                trigger={() => (
                  <Button
                    variant="primary"
                    className="btn-custom py-2 px-5 rounded-5 fs-6 fw-semibold"
                    style={{ backgroundColor: "#007bff", borderColor: "white" }}
                  >
                    Print PDF
                  </Button>
                )}
                content={() => componentRef.current}
              />
            </div>
          </div>
        </Alert>
      )}
      <div style={{ display: "none" }}>
        <ComponentToPrint
          ref={componentRef}
          nama={nama}
          umur={umur}
          bb={bb}
          tinggi={tinggi}
          jk={jk}
          hasil={hasil}
        />
      </div>
    </Container>
  );
};

import React from "react";
import PropTypes from "prop-types";

const ComponentToPrint = React.forwardRef(
  ({ nama, umur, bb, tinggi, jk, hasil }, ref) => (
    <div ref={ref} className="p-3">
      <h2 className="fw-bold mb-4 fs-3" style={{ color: "#3a3c3b" }}>
        Data Index Cek Gizi
      </h2>
      <div className="fw-semibold fs-5">
        <div className="row mb-2">
          <div className="col-6">Nama :</div>
          <div className="col-6 text-end">{nama}</div>
        </div>
        <div className="row mb-2">
          <div className="col-6">Umur :</div>
          <div className="col-6 text-end">{umur}</div>
        </div>
        <div className="row mb-2">
          <div className="col-6">Berat Badan :</div>
          <div className="col-6 text-end">{bb}</div>
        </div>
        <div className="row mb-2">
          <div className="col-6">Tinggi Badan :</div>
          <div className="col-6 text-end">{tinggi}</div>
        </div>
        <div className="row mb-2">
          <div className="col-6">Jenis Kelamin :</div>
          <div className="col-6 text-end">{jk}</div>
        </div>
        <div className="row">
          <div className="col-6">Hasil :</div>
          <div className="col-6 text-end">{hasil}</div>
        </div>
      </div>
    </div>
  )
);

ComponentToPrint.displayName = "ComponentToPrint";

ComponentToPrint.propTypes = {
  nama: PropTypes.string.isRequired,
  umur: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  bb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  tinggi: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  jk: PropTypes.string.isRequired,
  hasil: PropTypes.string.isRequired,
};
export default BmiCalculator;
