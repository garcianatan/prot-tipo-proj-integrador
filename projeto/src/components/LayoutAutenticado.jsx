//layout comum para qualquer usuário logado
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AuthenticatedRoute from "./AuthenticatedRoute";

export default function LayoutAutenticado() {
  const navigate = useNavigate();
  const usuarioLogado = JSON.parse(sessionStorage.getItem("usuario"));

  function handleLogout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("usuario");
    navigate("/login");
  }

  return (
    <AuthenticatedRoute>
      <div className="app-layout">
        <Header usuario={usuarioLogado} onLogout={handleLogout} />

        <main className="app-main">
          <Outlet />
        </main>

        <Footer />
      </div>
    </AuthenticatedRoute>
  );
}