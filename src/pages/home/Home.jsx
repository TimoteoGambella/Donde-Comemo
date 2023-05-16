import React, { useEffect, useState } from "react";
import bar from "../../assets/bars.png";
import x from "../../assets/x.png";
import { motion } from "framer-motion";
import h1 from "../../assets/res1.png";
import h2 from "../../assets/res2.png";
import h3 from "../../assets/res3.png";
import { Link } from "react-router-dom";
import NavBar from "../../components/nav/Nav";
import MenuDesplegable from "../../components/menuDesplegable/MenuDesplegable";

const Home = () => {
  const [sizeH, setSizeH] = useState(0);
  const [menu, setMenu] = useState(true);

  useEffect(() => {
    setSizeH(document.getElementById("root").clientHeight);
  }, []);

  window.addEventListener("resize", () =>
    setSizeH(document.getElementById("root").clientHeight)
  );

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="home-container">
      <div className="circulo-uno"></div>
      <div className="circulo-dos"></div>
      <div className="top-bar">
        <img onClick={handleMenu} src={menu ? bar : x} alt="" />
        <h3>¿Dónde comemo’?</h3>
      </div>
      {!menu ? <MenuDesplegable setMenu={handleMenu} /> : null}
      <div className="saludo-home font-family-primary d-flex-row">
        <p>Bienvenido🎉</p>
      </div>
      <div className="input-div">
        <input type="serch" placeholder="¿Buscás un lugar concreto?" />
      </div>
      <motion.div className="carrousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -980 }}
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
      <div className="categorias">
        <Link to={"/Comercios/Restaurantes"}>
          <button>Restaurantes</button>{" "}
        </Link>
        <Link to={"/Comercios/Bares"}>
          <button>Bares</button>
        </Link>
        {document.getElementById("root").clientHeight > 700 && (
          <Link to={"/Comercios/Cafes"}>
            <button>Cafes</button>
          </Link>
        )}
      </div>
      <div className="nav-bar home">
        <NavBar zona={"home"} />
      </div>
    </div>
  );
};

export default Home;
