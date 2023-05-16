import { motion } from "framer-motion";
import h1 from "../../assets/res1.png";
import h2 from "../../assets/res2.png";
import h3 from "../../assets/res3.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Link } from "react-router-dom";
import NavBar from "../../components/nav/Nav";

const Categoris = () => {
  return (
    <div className="categorias-container">
      <div className="circulo-uno"></div>
      <div className="top-bar">
        <Link to={"/home"}>
          <ArrowBackIcon />
        </Link>
        <h3>Categorias</h3>
      </div>
      <div className="categorias-categorias">
        <Link to={"/Comercios/Restaurantes"}>
          {" "}
          <button id={"Restaurantes"}>Restaurantes</button>
        </Link>
        <Link to={"/Comercios/Bares"}>
          {" "}
          <button id={"Bares"}>Bares</button>
        </Link>
        <Link to={"/Comercios/Cafes"}>
          {" "}
          <button id={"Cafes"}>Cafés</button>
        </Link>
        <Link to={"/Comercios/Rápida"}>
          {" "}
          <button id={"Rápida"}>Rapida</button>
        </Link>
        <Link to={"/Comercios/Étnica"}>
          {" "}
          <button id={"Étnica"}>Etnica</button>
        </Link>
        <Link to={"/Comercios/Veggie"}>
          <button id={"Veggie"}>Veggie</button>
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

      <div className="nav-bar categorias">
        <NavBar zona={"categorias"} />
      </div>
    </div>
  );
};

export default Categoris;
