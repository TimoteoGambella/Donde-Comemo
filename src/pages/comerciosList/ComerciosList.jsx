import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import { UseApiContext } from "../../context/ApiContext";
import Comercios from "../comercios/Comercios";

const ComerciosList = () => {
  const [restos, setRestos] = useState([]);
  const apiContext = useContext(UseApiContext);
  const { collectionByParam } = apiContext;
  const { idCategoria } = useParams();
  const [loading, setLoading] = useState(false);

  const seleccionarPorCategoria = collectionByParam(
    "restaurantes",
    "categoria",
    idCategoria
  );

  useEffect(() => {
    setLoading(true);
    seleccionarPorCategoria.then((value) => {
      let restaurantes = value;
      setRestos(restaurantes);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return <Comercios restos={restos} />;
  }
};

export default ComerciosList;
