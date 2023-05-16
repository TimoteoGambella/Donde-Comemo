import React from "react";
import lupa from "../../assets/lupa-loader.png";

const Loader = () => {
  return (
    <div className="loader-cotainer">
      <div className="lupa-loader">
        <img src={lupa} alt="" />
      </div>
    </div>
  );
};

export default Loader;
