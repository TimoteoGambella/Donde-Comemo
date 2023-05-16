import React from "react";

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  const eliminarUsuario = () => {
    localStorage.removeItem("usuarioDondeComemo");
    window.location = "/";
  };

  return (
    <div className="modalContainer">
      <div className="modal">
        <div className="textoModal">
          <p>¿Estás seguro que deseas salir? 😥</p>
        </div>
        <div className="botonesModal">
          <button onClick={onClose} className="botonModal">
            No
          </button>
          <button onClick={eliminarUsuario} className="botonModal">
            Si
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
