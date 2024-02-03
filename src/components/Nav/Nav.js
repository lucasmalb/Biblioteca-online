import biblioteca from "./assets/biblioteca.webp";
import { Link } from "react-router-dom";
import "./Nav.css";
import Usuario from "../Usuario/Usuario";

const Nav = () => {
  return (
    <navbar className="nav">
      <div className="div-contenedor">
        <div>
          <Link to="/" className="logo">
            <img className="img-logo" src={biblioteca} alt="imagen-logo" />
          </Link>
        </div>
        <div className="div-input">
          <input></input>
        </div>
        <div className="button-nav">
          <button>
            <p>Registrarse</p>
          </button>
          <button className="iniciar">
            <p>Iniciar Sesión</p>
          </button>
          <Usuario className="usuario" />
        </div>

      </div>
    </navbar>
  );
};

export default Nav;