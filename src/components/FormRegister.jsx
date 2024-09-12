import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [isShowPassword] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    message: "",
    status: false,
  });
  const [loading, setLoading] = useState(false); // Add loading state

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
    } else if (name === "username" && value.trim() === "") {
      setError({
        ...error,
        message: "Username tidak boleh kosong!",
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
    console.log(error);
    console.log("register", form);

    if (error.status === true) {
      toast.error(error.message);
      return; // Prevent further execution
    }

    setLoading(true); // Set loading to true

    try {
      // Check if the email or username already exist in the API
      const response = await axios.get(
        "https://64539f69c18adbbdfea29dd5.mockapi.io/user"
      );
      const users = response.data;

      const emailExists = users.some((user) => user.email === form.email);
      const usernameExists = users.some(
        (user) => user.username === form.username
      );

      if (emailExists) {
        toast.error("Email sudah terdaftar. Silakan gunakan email lain.");
        return;
      }

      if (usernameExists) {
        toast.error("Username sudah terdaftar. Silakan gunakan username lain.");
        return;
      }

      // If the email and username are available, proceed with the registration
      await axios.post(
        "https://64539f69c18adbbdfea29dd5.mockapi.io/user",
        form
      );
      toast.success("Register berhasil!");
      navigate("/login"); // Redirect to the "login" page
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Set loading to false after the request
    }
  };

  return (
    <div className="d-flex flex-md-row flex-column">
      <div className="linear-bg w-100 xl-w-45 d-flex align-items-center justify-content-center">
        <img
          src="https://res.cloudinary.com/damsz0xlx/image/upload/v1685717659/Assets/konsultasi_h27iqj.png"
          alt="Konsultasi"
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "500px",
            maxHeight: "500px",
          }}
        />
      </div>
      <div className="bg-white w-100 xl-w-55">
        <div className="d-flex justify-content-center px-4 py-5">
          <div className="" style={{ width: "100%", maxWidth: "500px" }}>
            <h1 className="fw-bold mt-3 text-dark">Daftar</h1>
            <h1 className="fw-bold text-dark">Akun di SIPENDIK</h1>
            <div className="fw-medium mt-2 text-dark fs-5">
              Sudah memiliki akun?{" "}
              <Link
                to="/login"
                style={{ color: "#54BCA4", textDecoration: "underline" }}
              >
                Masuk
              </Link>
            </div>
            <form onSubmit={onSubmit} className="mt-4">
              <div className="mb-3">
                <label
                  htmlFor="exampleInputUsername"
                  className="form-label fw-medium text-dark"
                >
                  Username
                </label>
                <input
                  type="text"
                  value={form.username}
                  name="username"
                  onChange={handleChange}
                  className="form-control rounded-pill"
                  placeholder="Masukkan username"
                  id="exampleInputUsername"
                />
                {error.username && (
                  <div className="text-danger mt-2">{error.username}</div>
                )}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label fw-medium text-dark"
                >
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  name="email"
                  onChange={handleChange}
                  className="form-control rounded-pill"
                  placeholder="Masukkan email"
                  id="exampleInputEmail1"
                />
                {error.email && (
                  <div className="text-danger mt-2">{error.email}</div>
                )}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label fw-medium text-dark"
                >
                  Password
                </label>
                <div className="input-group">
                  <input
                    type={isShowPassword ? "text" : "password"}
                    className="form-control rounded-pill"
                    value={form.password}
                    name="password"
                    onChange={handleChange}
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
                className="btn w-100 rounded-pill fw-bold mt-4"
                style={{
                  backgroundColor: "#54bca4",
                  borderColor: "#54bca4",
                  border: "1px solid #54bca4",
                  color: "#fff",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                disabled={
                  !form.username || !form.email || !form.password || loading
                }
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </>
                ) : (
                  "Daftar"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterForm;
