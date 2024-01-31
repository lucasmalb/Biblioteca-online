import biblioteca from "./assets/biblioteca.webp";
import { Link } from "react-router-dom";
import "./navbar.css"
import Usuario from "../Usuario/Usuario";
const navbar = () => {
    return (
        <navbar className="nav">
            <div className="div-contenedor">
                <div>
                <Link to='/' className="logo"><img className="img-logo" src={biblioteca} alt=" imagen-logo"/></Link>
                 </div>
                <div className="div-input">
                    <input></input>
                </div>
                <div className="button-nav">
                    <button><p>Registrarse</p></button>
                    <button className="INICIAR"><p>Iniciar Sesion</p></button>
                    
                </div>
                <div className="Usuario">
                    <Usuario/>
                </div>


            </div>

        </navbar>    
    )

}

export default navbar