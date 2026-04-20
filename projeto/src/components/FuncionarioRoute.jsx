import { Navigate } from "react-router-dom";

export default function FuncionarioRoute({ children }) {
  const token = sessionStorage.getItem("token");
  const usuario = JSON.parse(sessionStorage.getItem("usuario"));

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (usuario?.tipo !== "funcionario") {
    return <Navigate to="/" replace />;
  }

  return children;
}