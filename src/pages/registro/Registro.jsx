import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import lupa from "../../assets/lupa-loader.png";
import { UseApiContext } from "../../context/ApiContext";
import { Link } from "react-router-dom";

const Registro = () => {
  const apiContext = useContext(UseApiContext);
  const { addUser } = apiContext;

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const newUser = {
      nombreApellido: data.nombre,
      email: data.email,
      contrasena: data.password,
      favoritos: { array: [], titulo: "favoritos" },
    };
    const nUser = await addUser(newUser);

    localStorage.setItem(
      "usuarioDondeComemo",
      JSON.stringify(nUser._key.path.segments[1])
    );
    window.location = "/Home";
  };

  return (
    <div className="registro-container  d-flex-center d-flex-column">
      <img src={lupa} alt="" />
      <p className="font-family-primary font-w-400 descripcion-registro">
        ¡Registrarte no te llevará más de 1 minuto!
      </p>
      <div className="form d-flex-center d-flex-column">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={"div-input"}>
            <input
              className="campo-input"
              type="text"
              placeholder="Nombre"
              {...register("nombre", { required: true })}
            />
            {errors?.nombre?.type === "required" && (
              <p className="error">Se nececita este campo</p>
            )}
          </div>
          <div className={"div-input"}>
            <input
              className="campo-input"
              type="text"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
              })}
            />
            {errors?.email?.type === "required" && (
              <p className="error">Se nececita este campo</p>
            )}
            {errors?.email?.type === "pattern" && (
              <p className="error">Formato incorrecto</p>
            )}
          </div>
          <div className={"div-input"}>
            <input
              className="campo-input"
              type="password"
              placeholder="Nueva contraseña"
              {...register("password", { required: true, minLength: 5 })}
            />
            {errors?.password?.type === "required" && (
              <p className="error">Se nececita este campo</p>
            )}
            {errors?.password?.type === "minLength" && (
              <p className="error">
                El password no puede tener menos de 5 caracteres
              </p>
            )}
          </div>
          <div className={"div-input"}>
            <input
              className="campo-input"
              type="password"
              placeholder="Repetir contraseña"
              {...register("password_repeat", {
                required: true,
                minLength: 5,
              })}
            />
            {watch("password_repeat") !== watch("password") &&
            getValues("password_repeat") ? (
              <p className="error">Las claves no coinciden</p>
            ) : null}
          </div>
          <Link to={"/"}>
            <div className="volverAtras">Volver atras</div>
          </Link>
          <div className="button-submit">
            {watch("password_repeat") === watch("password") ? (
              <input
                className="principal-button"
                type="submit"
                value="Registrarme"
              />
            ) : (
              <input
                disabled
                className=" disabled"
                type="submit"
                value="Registrarme"
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registro;
