import React, { Component } from "react";
import { Crisp } from "crisp-sdk-web";
import { Stack, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContex";
import "../App.css";

const ChatBox = () => {
  // componentDidMount() {
  //   Crisp.configure("51b50fc1-2ed2-4f2e-9d1c-5636b8a34d9a");
  // }
  const { handleConsult } = useContext(UserContext);

  useEffect(() => {
    handleConsult(true);
  }, []);

  return (
    <div>
      <Stack gap={3}>
        <div className="text-center mt-5">
          <img
            src="https://res.cloudinary.com/damsz0xlx/image/upload/v1686235709/bro_eto8s3.png"
            alt="error"
            style={{ width: 350, height: 350 }}
            className="mb-3 mt-4"
          />
          <p className="fw-bold fs-4 mt-3">Silakan Melakukan Konsultasi</p>
          <Link to="/">
            <Button
              className="rounded-5 me-4"
              style={{
                border: "1px solid #54bca4",
                backgroundColor: "#eefcf3",
                color: "#54bca4",
              }}
            >
              Kembali ke Beranda
            </Button>
          </Link>
          <Button
            className="rounded-5"
            style={{
              backgroundColor: "#54bca4",
              border: "1px solid #54bca4",
              color: "ffffff",
            }}
          >
            <a
              href="https://wa.me/+6285330416462"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              Lanjut Konsultasi
            </a>
          </Button>
        </div>
      </Stack>
    </div>
  );
};

export default ChatBox;
