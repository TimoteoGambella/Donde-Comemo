import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import ComerciosDetalle from "../comerciosDetalle/ComerciosDetalle";
import { UseApiContext } from "../../context/ApiContext";

const ComerciosDetalleContainer = () => {
  const { titulo } = useParams();
  const [restos, setRestos] = useState([]);
  const apiContext = useContext(UseApiContext);
  const { collectionByParam } = apiContext;
  const [loading, setLoading] = useState(false);

  const seleccionarPorCategoria = collectionByParam(
    "restaurantes",
    "titulo",
    titulo
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
    return <ComerciosDetalle restos={restos} />;
  }
};

export default ComerciosDetalleContainer;
