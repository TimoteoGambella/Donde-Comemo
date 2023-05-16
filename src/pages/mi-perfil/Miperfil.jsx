import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import camara from "../../assets/camera.png";
import iuser from "../../assets/iuser.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Modal from "../../components/modal/Modal";
import NavBar from "../../components/nav/Nav";

const Miperfil = () => {
  const usuario = JSON.parse(localStorage.getItem("usuarioDondeComemo"));
  const [logueado, setLogueado] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (usuario === null) {
      setLogueado(false);
    } else {
      setLogueado(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (logueado) {
    return (
      <>
        <div className="miperfil-container">
          <Modal
            open={openModal}
            onClose={() => {
              setOpenModal(false);
            }}
          />
          <div className="circulo-uno"></div>
          <div className="top-bar">
            <Link to={"/home"}>
              <ArrowBackIcon />
            </Link>
            <h3>Mi Perfil</h3>
          </div>
          <div className="imagen-perfil">
            {logueado ? (
              <div className="img-login">
                <img className="imgUsuario" src={iuser} alt="" />
              </div>
            ) : (
              <div className="no-logueado">
                <img src={camara} alt="imagen-camara" />
              </div>
            )}
          </div>
          {/* <div className="saludo">
            {logueado ? <p>Hola {usuario.nombre} </p> : <div></div>}
          </div> */}
          <div className="miperfil-categorias">
            <Link to={"/MiPerfil/MisGuardados"}>
              <button>Mis guardados</button>
            </Link>
            <button>Mis reseñas</button>
            <button>Mis datos</button>
            <button>FAQs</button>

            <button onClick={() => setOpenModal(true)}>Salir</button>
          </div>

          <div className="nav-bar mi-perfil">
            <NavBar zona={"mi perfil"} />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="miperfil-container">
          <Modal
            open={openModal}
            onClose={() => {
              setOpenModal(false);
            }}
          />
          <div className="circulo-uno"></div>
          <div className="top-bar">
            <Link to={"/home"}>
              <ArrowBackIcon />
            </Link>
            <h3>Mi Perfil</h3>
          </div>
          <div className="usuarioNoLogueado">
            <p>Logueate para ver esta seccion</p>
            <Link to={"/"}>
              {" "}
              <button>Loguearme</button>{" "}
            </Link>
          </div>

          <div className="nav-bar mi-perfil">
            <NavBar zona={"mi perfil"} />
          </div>
        </div>
      </>
    );
  }
};

export default Miperfil;
