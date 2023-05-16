import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApiContext } from "./context/ApiContext.jsx";
import Login from "./pages/login/Login.jsx";
import InicioSesion from "./pages/inicioSesion/InicioSesion.jsx";
import Registro from "./pages/registro/Registro.jsx";
import "./styles/styles.scss";
import Home from "./pages/home/Home.jsx";
import Zonas from "./pages/zonas/Zonas.jsx";
import Categoris from "./pages/categorias/Categoris.jsx";
import Miperfil from "./pages/mi-perfil/Miperfil.jsx";
import ComerciosList from "./pages/comerciosList/ComerciosList.jsx";
import ZonasList from "./pages/comerciosList/ZonasList.jsx";
import ComerciosDetalleContainer from "./pages/comerciosDetalleContainer/ComerciosDetalleContainer.jsx";
import Menu from "./pages/menu/Menu.jsx";
import MisGuardados from "./pages/misGuardados/MisGuardados.jsx";
import { useMediaQuery } from "@mui/material";

function App() {
  const isScreen= useMediaQuery("(min-width:360px)")
  return (
    <>
      {isScreen ?
        <div className="mobile-div">
          <ApiContext>
            <Router>
              <Routes>
                <Route path="/" element={<InicioSesion />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Zonas" element={<Zonas />} />
                <Route path="/Categorias" element={<Categoris />} />
                <Route path="/Mi-perfil" element={<Miperfil />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Registro" element={<Registro />} />
                <Route path="/Comercios/:idCategoria" element={<ComerciosList />} />
                <Route path="/Zona/:idCategoria" element={<ZonasList />} />
                <Route
                  path="/Resto/:titulo"
                  element={<ComerciosDetalleContainer />}
                />
                <Route path="/Menu" element={<Menu />} />
                <Route path="/MiPerfil/MisGuardados" element={<MisGuardados />} />
              </Routes>
            </Router>
          </ApiContext>
        </div>
      :
        <div className='error-screen'>
          <p>Este sitio está disponible sólo para pantallas de 360px o mas grandes por el momento</p>
          <p>This site is available only for screens of 360px or more larger at this moment</p>
        </div>
      }
    </>
  );
}

export default App;
