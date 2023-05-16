import React, { useContext, useEffect, useState } from "react";
import corazon from "../../assets/fav.png";
import corazonVacio from "../../assets/nofav.png";
import { UseApiContext } from "../../context/ApiContext";

const Like = ({ resto }) => {
  const user = JSON.parse(localStorage.getItem("usuarioDondeComemo"));
  const apiContext = useContext(UseApiContext);
  const { actionToFavs } = apiContext;
  const [fav, setfav] = useState(false);
  const { getUser } = apiContext;
  const { favoritos, setFavoritos } = apiContext;

  async function traerUsuario() {
    const valor = await getUser(user);
    if(valor.length!==0){
      if (valor[0].favoritos.array !== []) {
        setFavoritos(valor[0].favoritos.array);
      }
    }
  }

  const revisarSiEstaEnFavoritos = () => {
    if(resto.titulo===undefined){
      for (const key in favoritos) {
        if (favoritos[key].titulo===resto[0].titulo) {
          setfav(true);
        }
      }
    }else{
      for (const key in favoritos) {
        if (favoritos[key].titulo===resto.titulo) {
          setfav(true);
        }
      }
    }
  };

  useEffect(() => {
    traerUsuario();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if(resto!==undefined && resto.length!==0 && favoritos.length!==0){
      revisarSiEstaEnFavoritos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resto,favoritos]);

  const agregarFavoritos = () => {
    const existe = favoritos.find((r) => r.titulo === resto.titulo);
    if (existe) {
      return favoritos;
    }
    favoritos.push(resto);
    actionToFavs(user, favoritos);
  };
  const eliminarFavoritos = () => {
    const newFav = favoritos.filter((f) => f.titulo !== resto.titulo);
    setFavoritos(newFav);
    actionToFavs(user, newFav);
  };

  const handleFav = () => {
    setfav(!fav);
    if (fav) {
      eliminarFavoritos();
    } else {
      agregarFavoritos();
    }
    // actionToFavs(user, guardados);
  };

  return (
    <div>
      {user ? (
        <img onClick={handleFav} src={fav ? corazon : corazonVacio} alt="" />
      ) : null}
    </div>
  );
};

export default Like;
