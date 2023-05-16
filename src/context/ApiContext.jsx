import { createContext, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  query,
  collection,
  where,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import emailjs from "@emailjs/browser";

export const UseApiContext = createContext();

export const ApiContext = ({ children }) => {

  
  const [favoritos, setFavoritos] = useState([]);

  const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const searchCollections = async (nameCollection) => {
    // LLAMADA SIMPLE PARA OBTENER TODOS LOS DATOS SOBRE CIERTAS COLECCIONES DE LA BASE DE DATOS.
    const collectionsData = await getDocs(
      query(collection(db, nameCollection))
    );
    const collections = collectionsData.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return collections;
  };

  const collectionByParam = async (nameCollection, param, type) => {
    // REVISAR EN LA DOCUMENTACION DE FIREBASE COMO LLAMAR DOCUMENTOS CON PARAMETRO WHERE. USAR "param" Y "type".
    const collectionsData = await getDocs(
      query(collection(db, nameCollection), where(param, "==", type))
    );
    const collections = collectionsData.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return collections;
  };

  const getUser = async (idUser) => {
    // OBTENER UN USUARIO DE FIREBASE
    const users = await searchCollections("usuarios");
    return users.filter((user) => user.id === idUser);
  };

  const addUser = async (newUser) => {
    // AGREGAR UN NUEVO USUARIO A LA COLECCION "usuarios" CON SU CORRESPONDIENTE ARRAY.
    const user = await addDoc(collection(db, "usuarios"), newUser);
    return user;
  };

  // PARAMETROS QUE DEBE TENER EL DOCUMENTO "USER"
  // usuarioEjemplo={
  //     nombreApellido:"",
  //     email:"",
  //     contrasena:"",
  //     favoritos:[],
  // }

  const actionToFavs = async (idUser, obj) => {
    // AGREGAR O ELIMINAR UN FAVORITO A CIERTO USUARIO
    const user = doc(db, "usuarios", idUser);
    console.log(obj)
    await setDoc(
      user,
      { favoritos: { titulo: "favoritos", array: obj } },
      { merge: true }
    );
  };

  const emailJS = async (data) => {
    // API NECESARIA PARA ENVIAR UN CORREO ELECTRONICO A CIERTO MAIL.

    // ARRAY NECESARIO DE "data"
    // const array= {
    //     nombre:"",
    //     contrasena:"",
    //     toMail:""
    // }

    emailjs
      .send("", "", data, "")
      .then(
        function (response) {
          return true;
        },
        function (error) {
          return false;
        }
      );
  };

  return (
    <UseApiContext.Provider
      value={{
        searchCollections,
        collectionByParam,
        getUser,
        addUser,
        actionToFavs,
        emailJS,
        favoritos,
        setFavoritos,
      }}
    >
      {children}
    </UseApiContext.Provider>
  );
};
