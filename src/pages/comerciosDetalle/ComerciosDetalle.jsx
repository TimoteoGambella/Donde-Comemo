import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Like from "../../components/like/Like";
import { motion } from "framer-motion";
import facebook from "../../assets/logo-fb.png";
import estrella from "../../assets/estrella.png";
import instagram from "../../assets/logo-ig.png";
import mascotas from "../../assets/mascota.png";
import niños from "../../assets/hijos.png";
import discapacidad from "../../assets/discapacidad.png";
import NavBar from "../../components/nav/Nav";
import Reseña from "../../components/reseña/Reseña";

const ComerciosDetalle = ({ restos }) => {console.log(restos)
  return (
    <div className="comercioDetalle-container">
      <div className="top-bar">
        <Link to={"/home"}>
          <ArrowBackIcon />
        </Link>
        <Like resto={restos[0]} />
      </div>
      <div className="circulo"></div>
      {restos.map((el, i) => {
        const pet = el.pets;
        return (
          <div key={i} className="contenido">
            <motion.div className="carrousel">
              <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -760 }}
                className="inner-carrousel"
              >
                {el["fotos-carousel"].map((img, i) => {
                  return (
                    <div key={i}>
                      <motion.div className="item">
                        <img src={img} alt="" />
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>
            <div className="infoContainer">
              <div className="info">
                <div className="puntos">
                  <img src={estrella} alt="" />
                  <p>4.5</p>
                </div>
                <div className="tituloComercio">
                  <h2>{el.titulo}</h2>
                </div>
                <div className="comercioDetalles">
                  <p>{el.calle}</p>
                  <p>{el.numero}</p>
                  <p>Menu</p>
                  {pet ? (
                    <div className="friendly">
                      <img src={mascotas} alt="" />
                      <img src={niños} alt="" />
                      <img src={discapacidad} alt="" />
                      <img src={facebook} alt="" />
                      <img src={instagram} alt="" />
                    </div>
                  ) : (
                    <div>
                      <p>not friendly</p>
                      <img src={facebook} alt="" />
                      <img src={instagram} alt="" />
                    </div>
                  )}
                </div>
                <div className="sobre">
                  <h2>Sobre este establecimiento</h2>
                  <p>{el.descripcion}</p>
                </div>
              </div>
            </div>
            <motion.div className="carrouselReseña">
              <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -450 }}
                className="inner-carrousel"
              >
                <motion.div className="itemReseña">
                  <Reseña />
                </motion.div>
                <motion.div className="itemReseña">
                  <Reseña />
                </motion.div>
                <motion.div className="itemReseña">
                  <Reseña />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        );
      })}
      <NavBar />
    </div>
  );
};

export default ComerciosDetalle;
