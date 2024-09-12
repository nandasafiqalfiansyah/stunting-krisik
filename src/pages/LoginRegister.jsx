// React import removed as it's not used in this component
// React import removed as it's not used in this component
import { useLocation } from "react-router-dom";
import LoginForm from "../components/FormLogin";
import RegisterForm from "../components/FormRegister";

const LoginRegister = () => {
  const location = useLocation();
  return (
    <>{location.pathname == "/login" ? <LoginForm /> : <RegisterForm />}</>
  );
};

export default LoginRegister;
