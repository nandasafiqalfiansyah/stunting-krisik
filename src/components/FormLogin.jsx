import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const [isShowpassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    message: "",
    status: false,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "email" && value.trim() === "") {
      setError({
        ...error,
        message: "Email tidak boleh kosong!",
        status: true,
      });
    } else if (name === "password" && value.trim() === "") {
      setError({
        ...error,
        message: "Password tidak boleh kosong!",
        status: true,
      });
    } else if (name === "password" && value.length < 6) {
      setError({
        ...error,
        message: "Password minimal 6 karakter!",
        status: true,
      });
    } else {
      setError({ message: "", status: false });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (error.status === true) {
      toast.error(error.message);
    } else {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://64539f69c18adbbdfea29dd5.mockapi.io/user"
        );
        if (response.status === 200) {
          const users = await response.data;
          const user = users.find(
            (u) => u.email === form.email && u.password === form.password
          );
          if (user) {
            toast.success("Login berhasil!");
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/konsultasi");
          } else {
            toast.error("Email atau password salah!");
          }
        }
      } catch (error) {
        toast.error("Terjadi kesalahan. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    }
  };

  const isFormValid = form.email.trim() === "" || form.password.trim() === "";

  return (
    <div className="d-flex flex-md-row flex-column">
      <div className="linear-bg w-100 xl-w-45 d-flex align-items-center justify-content-center">
        <img
          src="https://res.cloudinary.com/damsz0xlx/image/upload/v1685717659/Assets/konsultasi_h27iqj.png"
          alt=""
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "500px",
            maxHeight: "500px",
          }}
        />
      </div>
      <div className="bg-white w-100 xl-w-55 d-flex justify-content-center align-items-center">
        <div className="p-4 p-md-5 w-100" style={{ maxWidth: "500px" }}>
          <h1 className="fw-bold text-dark mb-3">Selamat Datang</h1>
          <h1 className="fw-bold text-dark mb-3">Kembali di SIPENDIK</h1>
          <div className="fw-medium text-dark mb-4 fs-5">
            Belum memiliki akun?{" "}
            <Link
              to={"/register"}
              style={{
                color: "#54BCA4",
                textDecoration: "underline",
              }}
            >
              Daftar
            </Link>
          </div>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label fw-medium text-dark"
                style={{ fontSize: "16px" }}
              >
                Email
              </label>
              <input
                type="email"
                value={form.email}
                name="email"
                onChange={(e) => handleChange(e)}
                className="form-control rounded-pill"
                placeholder="Masukkan email"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              {error.email && (
                <div className="text-danger mt-2">{error.email}</div>
              )}
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label fw-medium text-dark"
                style={{ fontSize: "16px" }}
              >
                Password
              </label>
              <div className="input-group">
                <input
                  type={isShowpassword ? "text" : "password"}
                  className="form-control rounded-pill"
                  value={form.password}
                  name="password"
                  onChange={(e) => handleChange(e)}
                  placeholder="Masukkan password"
                  id="exampleInputPassword1"
                />
              </div>
              {error.password && (
                <div className="text-danger mt-2">{error.password}</div>
              )}
            </div>
            <button
              type="submit"
              style={{
                marginTop: "20px",
                fontWeight: "600",
                backgroundColor: "#54bca4",
                border: "1px solid #54bca4",
              }}
              disabled={isFormValid || loading}
              className="btn btn-success w-100 rounded-pill"
            >
              {loading ? (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              ) : (
                "Masuk"
              )}
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
