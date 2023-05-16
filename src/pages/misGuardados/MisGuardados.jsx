import React, { useContext, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import camara from "../../assets/camera.png";
import iuser from "../../assets/iuser.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Modal from "../../components/modal/Modal";
import { UseApiContext } from "../../context/ApiContext";
import Like from "../../components/like/Like";
import Loader from "../../components/loader/Loader";
import NavBar from "../../components/nav/Nav";

const MisGuardados = () => {
  const user = JSON.parse(localStorage.getItem("usuarioDondeComemo"));
  const [logueado, setLogueado] = useState(false);
  const apiContext = useContext(UseApiContext);
  const { getUser } = apiContext;
  const [fullUser, setFullUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const { favoritos, setFavoritos } = apiContext;

  async function traerUsuario() {
    const valor = await getUser(user);
    setLoading(false);
    if (valor[0].favoritos.array !== []) {
      setFavoritos(valor[0].favoritos.array);
    }
  }

  useEffect(() => {
    traerUsuario();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <>
        <div className="miperfil-container">
          <div className="circulo-uno"></div>
          <div className="top-bar">
            <Link to={"/home"}>
              <ArrowBackIcon />
            </Link>
            <h3>Mis Guardados</h3>
          </div>
          <div className="misGuardados-container">
            <div className="saludo-zonas font-family-primary d-flex-row">
              <p>Estos son tus lugares favoritos 😎</p>
            </div>
            <div className="contenedorDeCards">
              {favoritos.map((resto, index) => {
                return (
                  <div key={index} className="cardsComercios">
                    <div className="top-card">
                      <div className="top-izquierdo">
                        <h3>{resto.titulo}</h3>
                        <h6>{resto.categoria}</h6>
                      </div>
                      <div className="top-derecho">
                        <Like resto={resto} />
                      </div>
                    </div>
                    <div className="comercio-imagen">
                      <img src={resto["foto-main"]} alt="" />
                    </div>
                    <div>
                      <div className="direccion">
                        <h5>{resto.calle}</h5>
                        <h6>{resto.numero}</h6>
                      </div>
                      <div className="cardComercio-descripcion">
                        <p>{resto.descripcion}</p>
                      </div>
                      <div className="cardComercio-button">
                        <Link to={`/Resto/${resto.titulo}`}>
                          <button>Ver mas</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="nav-bar mi-perfil">
            <NavBar zona={"mi perfil"} />
          </div>
        </div>
      </>
    );
  }
};
export default MisGuardados;
