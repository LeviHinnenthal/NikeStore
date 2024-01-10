import { React, useRef, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProducts = () => {
  const titleRef = useRef(null);
  const priceRef = useRef(null);
  const imgRef = useRef(null);
  const starsRef = useRef(null);

  const [error, setError] = useState("");

  const validateInput = () => {
    // Validar que el título sea un string
    if (
      typeof titleRef.current.value !== "string" ||
      titleRef.current.value.trim() === ""
    ) {
      setError("El título debe ser un string no vacío.");
      return false;
    }

    // Validar que el precio sea un número
    const priceValue = parseFloat(priceRef.current.value);
    if (isNaN(priceValue) || priceValue <= 0) {
      setError("El precio debe ser un número mayor que cero.");
      return false;
    }

    // Validar que la img sea una URL
    const imgValue = imgRef.current.value;
    if (!isValidUrl(imgValue)) {
      setError("La URL de la imagen no es válida.");
      return false;
    }

    // Validar que las stars estén en el rango de 0 a 5
    const starsValue = parseInt(starsRef.current.value);
    if (isNaN(starsValue) || starsValue < 0 || starsValue > 5) {
      setError("Las estrellas deben estar en el rango de 0 a 5.");
      return false;
    }

    return true;
  };

  const isValidUrl = (url) => {
    // Esta es una validación básica de URL, puedes ajustarla según tus necesidades
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlPattern.test(url);
  };

  const addProduct = async () => {
    setError(""); // Limpiar el mensaje de error antes de realizar la validación
    if (validateInput()) {
      try {
        const docRef = await addDoc(collection(db, "products"), {
          title: titleRef.current.value,
          price: parseFloat(priceRef.current.value),
          img: imgRef.current.value,
          stars: parseInt(starsRef.current.value),
        });
        console.log("Document written with ID: ", docRef.id);
        toast.success("Producto agregado correctamente");
        const clearInputs = () => {
          titleRef.current.value = "";
          priceRef.current.value = "";
          imgRef.current.value = "";
          starsRef.current.value = "";
        };
        clearInputs();
      } catch (e) {
        console.error("Error adding document: ", e);
        toast.error("Error al agregar el producto");
      }
    }
  };

  return (
    <div className="flex flex-col shadow-lg p-10 rounded-lg mx-auto w-[500px] my-10 bg-primary-100 text-white">
      <h2 className="mb-6">ADD PRODUCT</h2>
      <form className="flex flex-col">
        <input
          ref={titleRef}
          id="title"
          type="text"
          placeholder="Título"
          className="border-1 rounded-lg p-2 bg-transparent mb-2"
        ></input>
        <input
          ref={priceRef}
          id="price"
          type="text"
          placeholder="Precio"
          className="border-1 rounded-lg p-2 bg-transparent mb-2"
        ></input>
        <input
          ref={imgRef}
          id="img"
          type="text"
          placeholder="URL de la imagen"
          className="border-1 rounded-lg p-2 bg-transparent mb-2"
        ></input>
        <input
          ref={starsRef}
          id="stars"
          type="text"
          placeholder="Estrellas"
          className="border-1 rounded-lg p-2 bg-transparent mb-2"
        ></input>
        <button
          type="button"
          className="agregar border-1 my-6 bg-white shadow-inner text-black uppercase rounded-lg p-2"
          onClick={addProduct}
        >
          Agregar Producto
        </button>
      </form>
      {error && <p style={{ color: "white" }}>{error}</p>}
      <ToastContainer />
    </div>
  );
};

export default AddProducts;
