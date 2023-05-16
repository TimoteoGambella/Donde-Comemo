import React from "react";
import lupa from "../../assets/lupa-loader.png";

const Branding = () => {
  return (
    <>
      <div className="branding-container d-flex-center d-flex-column">
        <h1 className="font-title">¿Donde comemo?</h1>
        <img className="imagen-lupa" src={lupa} alt="" />
        <p className="font-family-primary font-w-400 descripcion-branding">
          La guia gastronómica que córdoba necesitaba
        </p>
      </div>
    </>
  );
};

export default Branding;
