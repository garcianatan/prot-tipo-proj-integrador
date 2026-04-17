import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import imagemFundo from "../assets/img-fablab.jpg";
import "./Login.css";
import { FaCogs } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const resposta = await api.post("/auth/login", {
        email,
        senha
      });

      localStorage.setItem("token", resposta.data.token);
      localStorage.setItem("usuario", JSON.stringify(resposta.data.usuario));

      navigate("/");
    } catch (error) {
      alert(error?.response?.data?.erro || "Erro ao realizar login");
    }
  }

  return (
    <div
      className="container-login"
      style={{ backgroundImage: `url(${imagemFundo})` }}
    >
      <div className="login-header">
        <div className="login-logo">
          <span className="login-logo-icon">
            <FaCogs />
          </span>
          <span className="login-logo-text">FABLAB</span>
        </div>
      </div>

      <div className="overlay-login">
        <form className="form-login" onSubmit={handleLogin}>
          <div className="form-title">
            <h2>Login</h2>
          </div>

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}