import lupa from "../../assets/lupa-loader.png";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import ModalRecupero from "../../components/modalRecupero/ModalRecupero";
import { useContext, useEffect, useState } from "react";
import { UseApiContext } from "../../context/ApiContext";
import { Link } from "react-router-dom";

const Login = () => {
  const [openModal, setOpenModal] = useState(false);
  const [usuarioFiltrado, setUsuarioFiltrado] = useState(null);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const apiContext = useContext(UseApiContext);
  const { collectionByParam } = apiContext;

  const validar = (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    setEmail(email);
    setPassword(password);
    const todosUsers = collectionByParam("usuarios", "email", email);
    todosUsers.then((value) => {
      let user = value;
      setUsuarioFiltrado(user);
    });
  };

  useEffect(() => {
    if (usuarioFiltrado) {
      if (usuarioFiltrado.length === 0) {
        Swal.fire({
          title: "Usuario no encontrado",
          icon: "error",
          confirmButtonText: "Intentar de nuevo o registrarse",
        });
      } else {
        if (
          usuarioFiltrado[0].email === email &&
          usuarioFiltrado[0].contrasena === password
        ) {
          localStorage.setItem(
            "usuarioDondeComemo",
            JSON.stringify(usuarioFiltrado[0].id)
          );
          window.location = "/Home";
        } else {
          Swal.fire({
            title: "Usuario o password incorrectos",
            icon: "error",
            confirmButtonText: "Intentar de nuevo ",
          });
        }
      }
    }
  }, [email, password, usuarioFiltrado]);

  return (
    <>
      <div className="login-container d-flex-center d-flex-column">
        <ModalRecupero
          open={openModal}
          onClose={() => {
            setOpenModal(false);
          }}
        />
        <img src={lupa} alt="" />
        <div className="form">
          <form>
            <div className="inputBox">
              <input
                id="email"
                className="campo-input"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="inputBox">
              <input
                id="password"
                className="campo-input"
                type="password"
                placeholder="Contraseña"
              />
            </div>
            <p
              onClick={() => setOpenModal(true)}
              className="forget font-family-primary"
            >
              ¿Olvidaste tu contraseña?
            </p>
            <Link to={"/"}>
              <div className="volverAtras">Volver atras</div>
            </Link>
            <div className="botonLogin">
              <input
                onClick={validar}
                className="principal-button"
                type="submit"
                value="Iniciar sesión"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
