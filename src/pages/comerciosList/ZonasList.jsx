import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import { UseApiContext } from "../../context/ApiContext";
import Comercios from "../comercios/Comercios";

const ZonasList = () => {
  const [restos, setRestos] = useState([]);
  const apiContext = useContext(UseApiContext);
  const { collectionByParam } = apiContext;
  const { idCategoria } = useParams();
  const [loading, setLoading] = useState(false);

  const seleccionarPorCategoria = collectionByParam(
    "restaurantes",
    "zona",
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

  // useEffect(() => {
  //   traerRestaurantes.then((valor) => {
  //     let restaurantes = valor;

  //     let todos = restaurantes.filter((producto) => {
  //       return producto;
  //     });

  //     setRestos(todos);
  //   });
  //
  if (loading) {
    return <Loader />;
  } else {
    return (
      <div>
        {" "}
        <Comercios restos={restos} />
      </div>
    );
  }
};

export default ZonasList;
