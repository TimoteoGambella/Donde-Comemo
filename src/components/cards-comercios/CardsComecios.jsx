import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import Like from "../like/Like";
import NavBar from "../nav/Nav";

const CardsComecios = ({ restos }) => {
  return (
    <>
      <div className="cardsComercios-container">
        <div className="top-bar">
          <Link to={"/home"}>
            <ArrowBackIcon />
          </Link>
          <h3>restaurantes</h3>
        </div>
        <div className="input-div">
          <input type="serch" placeholder="¿Buscás un lugar concreto?" />
        </div>
        <div className="contenedorDeCards">
          {restos.map((resto, index) => {
            return (
              <div key={index} className="cardsComercios">
                <div className="top-card">
                  <div className="top-izquierdo">
                    <h3>{resto.titulo}</h3>
                    <h6>{resto.categoria}</h6>
                  </div>
                  <div className="top-derecho">
                    <Like resto={resto} />
                  </div>
                </div>
                <div className="comercio-imagen">
                  <img src={resto["foto-main"]} alt="" />
                </div>
                <div>
                  <div className="direccion">
                    <h5>{resto.calle}</h5>
                    <h6>{resto.numero}</h6>
                  </div>
                  <div className="cardComercio-descripcion">
                    <p>{resto.descripcion}</p>
                  </div>
                  <div className="cardComercio-button">
                    <Link to={`/Resto/${resto.titulo}`}>
                      <button>Ver mas</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <NavBar />
      </div>
    </>
  );
};

export default CardsComecios;
