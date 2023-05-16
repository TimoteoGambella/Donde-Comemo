import React, { useState } from "react";
import home from "../../assets/logo-home.png";
import zonas from "../../assets/logo-ubicacion.png";
import categorias from "../../assets/logo-cats.png";
import perfil from "../../assets/logo-user.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const NavBar = ({ zona }) => {
  const [iconoHome, setIconoHome] = useState(false);
  const [iconoZonas, setIconoZonas] = useState(false);
  const [iconoCategorias, setIconoCategorias] = useState(false);
  const [iconoMiPerfil, setIconoMiPerfil] = useState(false);

  useEffect(() => {
    if (zona === "home") {
      setIconoHome(true);
    } else if (zona === "zonas") {
      setIconoZonas(true);
    } else if (zona === "categorias") {
      setIconoCategorias(true);
    } else if (zona === "mi perfil") {
      setIconoMiPerfil(true);
    } else {
    }
  }, [zona]);

  return (
    <div className="Navbar-container">
      <ul>
        <Link to={"/Home"}>
          {" "}
          <div>
            <span className={iconoHome ? "background-ico" : ""}>
              <img src={home} alt="logo-home" />
            </span>
            <li>Home</li>
          </div>
        </Link>
        <Link to={"/Zonas"}>
          {" "}
          <div>
            <span className={iconoZonas ? "background-ico" : ""}>
              <img src={zonas} alt="logo-home" />
            </span>
            <li>Zonas</li>
          </div>
        </Link>
        <Link to={"/Categorias"}>
          {" "}
          <div>
            <span className={iconoCategorias ? "background-ico" : ""}>
              <img src={categorias} alt="logo-home" />
            </span>
            <li>Categorias</li>
          </div>{" "}
        </Link>
        <Link to={"/Mi-perfil"}>
          <div>
            <span className={iconoMiPerfil ? "background-ico" : ""}>
              <img src={perfil} alt="logo-home" />
            </span>
            <li>Mi perfil</li>
          </div>{" "}
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
