import { Stack, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div>
        <Stack gap={3}>
          <div className="text-center mt-5">
            <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1685933152/Assets/amico_zk16g5.png" alt="error" style={{ width: 350, height: 350 }} className="mb-3 mt-4" />
            <p className="fw- fs-4">Oops! Halaman yang Anda cari tidak ditemukan.</p>
            <Button className="btn mt-3 rounded-pill px-4 py-2" style={{ backgroundColor: "#54BCA4", borderColor: "white" }}>
              <Link to="/" style={{ textDecoration: "none", color: "white" }} className="linkto">
                Kembali ke Beranda
              </Link>
            </Button>
          </div>
        </Stack>
      </div>
    </>
  );
}

export default NotFound;
