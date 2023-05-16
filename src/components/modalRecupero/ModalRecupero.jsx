import React, { useState } from "react";

const ModalRecupero = ({ open, onClose }) => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEnviarClick = () => {
    const valid = validateEmail(email);
    setIsValidEmail(valid);
    if (valid) {
      // Realizar la lógica para enviar el correo
      // ...
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div className="modalRecuperoContainer">
      <div onClick={onClose} className="background-oscuro"></div>
      <div className="modalRecupero">
        <div className="textoModalRecupero">
          <p>Ingresa tu correo para recuperar tu clave</p>
        </div>
        <div className="inputModalRecupero">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          {!isValidEmail && (
            <p className="error">Correo electrónico inválido</p>
          )}
          <div className="botonEnviar">
            <button onClick={handleEnviarClick} className="botonModal">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalRecupero;
