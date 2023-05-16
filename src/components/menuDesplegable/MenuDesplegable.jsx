import React from "react";

const MenuDesplegable = ({ setMenu }) => {
  return (
    <>
      <div onClick={setMenu} className="background-oscuro"></div>
      <div className="menuDesplegable">
        <ul>
          <li>Promociones</li>
          <li>Nuestro Top 10</li>
          <li>
            Proximamente 🔥: <br />
            Lugares
            <br /> con espectaculos
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuDesplegable;
