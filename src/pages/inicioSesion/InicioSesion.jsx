import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import lupa from "../../assets/lupa-loader.png";
import Branding from "../branding/Branding";

const InicioSesion = () => {
  const [branding, setBranding] = useState(true);

  useEffect(() => {
    if(localStorage.getItem("usuarioDondeComemo")!==null){
      window.location = "/Home"
    }
    setTimeout(() => {
      setBranding(false);
    }, 2000);

    return () => {};
  }, []);

  return (
    <>
      {branding ? (
        <Branding />
      ) : (
        <div className="inicioSesion-container d-flex-center d-flex-column">
          <img src={lupa} alt="" />
          <p className="font-family-primary font-w-400 descripcion-login">
            Para acceder a las mejores recomendaciones, deberás iniciar sesión o
            registrarte
          </p>
          <Link to={"/Login"}>
            <button className="principal-button">Iniciar sesión</button>
          </Link>
          <Link to={"/Registro"}>
            <button className="principal-button">Registrarme</button>
          </Link>
          <Link to={"/Home"}>
            <p className="saltar">Saltar este paso</p>{" "}
          </Link>
        </div>
      )}
    </>
  );
};

export default InicioSesion;
