import React from "react";
import { motion } from "framer-motion";
import h1 from "../../assets/res1.png";
import h2 from "../../assets/res2.png";
import h3 from "../../assets/res3.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Link } from "react-router-dom";
import NavBar from "../../components/nav/Nav";

const Zonas = () => {
  return (
    <div className="zonas-container">
      <div className="circulo-uno"></div>
      <div className="top-bar">
        <Link to={"/home"}>
          <ArrowBackIcon />
        </Link>
        <h3>Zonas</h3>
      </div>
      <div className="saludo-zonas font-family-primary d-flex-row">
        <p>Elegí la zona que planeas visitar 📍</p>
      </div>
      <div className="categorias-zonas">
        <Link to={"/Zona/norte"}>
          <button>NORTE</button>
        </Link>
        <Link to={"/Zona/sur"}>
          <button>SUR</button>
        </Link>
        <Link to={"/Zona/este"}>
          <button>ESTE</button>
        </Link>
        <Link to={"/Zona/oeste"}>
          <button>OESTE</button>
        </Link>
      </div>
      <motion.div className="carrousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -720 }}
          className="inner-carrousel"
        >
          <motion.div className="item">
            <img src={h1} alt="" />
          </motion.div>
          <motion.div className="item">
            <img src={h2} alt="" />
          </motion.div>
          <motion.div className="item">
            <img src={h3} alt="" />
          </motion.div>
          <motion.div className="item">
            <img src={h1} alt="" />
          </motion.div>
          <motion.div className="item">
            <img src={h2} alt="" />
          </motion.div>
          <motion.div className="item">
            <img src={h3} alt="" />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="nav-bar">
        <NavBar zona={"zonas"} />
      </div>
    </div>
  );
};

export default Zonas;
