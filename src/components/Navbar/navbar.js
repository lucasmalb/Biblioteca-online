import biblioteca from "./assets/biblioteca.webp"

const navbar = () => {
    return (
        <navbar className="nav">
            <div>
                <div>

                        <img src={biblioteca} alt=" imagen-logo"/>

                </div>
                <div>
                    <input></input>
                </div>
                <div
                >
                    <button><p>Registrarse</p></button>
                    <button><p>Iniciar Sesion</p></button>
                </div>
                <div>
                    <img />
                </div>


            </div>

        </navbar>
    )

}

export default navbar