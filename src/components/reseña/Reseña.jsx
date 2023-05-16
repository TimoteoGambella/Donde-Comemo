import React from "react";

const Reseña = () => {
  return (
    <div className="reseñaContainer">
      <div className="usuario">
        <div className="logoUsuario">U</div>
        <div>
          <p className="nombreUsuario">Usuario 123</p>
          <p className="infoUsuario">Masculino, 20 años</p>
        </div>
      </div>
      <div className="comentario">
        ¡Excelente experiencia! Fuimos atentidos por Facundo, que nunca se
        olvidó de nuestra mesa y siempre nos trajo todo rapidísimo :)
      </div>
    </div>
  );
};

export default Reseña;
