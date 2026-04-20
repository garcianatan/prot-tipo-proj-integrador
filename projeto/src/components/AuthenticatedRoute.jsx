//para rotas que servem para qualquer usuário logado.
import { Navigate } from "react-router-dom";

export default function AuthenticatedRoute({ children }) {
  const token = sessionStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}