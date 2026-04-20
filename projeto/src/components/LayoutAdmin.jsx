import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AdminRoute from "./AdminRoute";
import "../App.css";

export default function LayoutAdmin() {
  const navigate = useNavigate();
  const usuarioLogado = JSON.parse(sessionStorage.getItem("usuario"));

  function handleLogout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("usuario");
    navigate("/login");
  }

  return (
    <AdminRoute>
      <div className="app-layout">
        <Header usuario={usuarioLogado} onLogout={handleLogout} />

        <main className="app-main">
          <Outlet />
        </main>

        <Footer />
      </div>
    </AdminRoute>
  );
}