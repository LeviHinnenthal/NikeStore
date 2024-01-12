import { React, useRef, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const AddProducts = () => {
  const categoryRef = useRef(null);
  const descriptionRef = useRef(null);
  const imgPrincipalRef = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const img4Ref = useRef(null);
  const img5Ref = useRef(null);
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const size1Ref = useRef(null);
  const size2Ref = useRef(null);
  const size3Ref = useRef(null);
  const size4Ref = useRef(null);

  const [error, setError] = useState("");

  const validateInput = () => {
    // Validar que el título sea un string
    if (
      typeof nameRef.current.value !== "string" ||
      nameRef.current.value.trim() === ""
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
    const imgValue = imgPrincipalRef.current.value;
    if (!isValidUrl(imgValue)) {
      setError("La URL de la imagen no es válida.");
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
          category: categoryRef.current.value,
          description: descriptionRef.current.value,
          img: imgPrincipalRef.current.value,
          imgDetail: {
            imgDetailed: imgPrincipalRef.current.value,
            imgDetailed2: img2Ref.current.value,
            imgDetailed3: img3Ref.current.value,
            imgDetailed4: img4Ref.current.value,
          },

          name: nameRef.current.value,
          price: parseFloat(priceRef.current.value),
          sizes: {
            size1: size1Ref.current.value,
            size2: size2Ref.current.value,
            size3: size3Ref.current.value,
            size4: size4Ref.current.value,
          },
        });
        console.log("Document written with ID: ", docRef.id);
        // toast.success("Producto agregado correctamente");
        const clearInputs = () => {
          // categoryRef.current.value = "";
          // descriptionRef.current.value = "";
          // imgPrincipalRef.current.value = "";
          // img2Ref.current.value = "";
          // img3Ref.current.value = "";
          // img4Ref.current.value = "";
          // img5Ref.current.value = "";
          // img5Ref.current.value = "";
          nameRef.current.value = "";
          priceRef.current.value = "";
          // size1Ref.current.value = "";
          // size2Ref.current.value = "";
          // size3Ref.current.value = "";
          // size4Ref.current.value = "";
        };
        clearInputs();
      } catch (e) {
        console.error("Error adding document: ", e);
        // toast.error("Error al agregar el producto");
      }
    }
  };

  return (
    <div className="flex flex-col shadow-lg p-10 rounded-lg mx-auto w-[500px] my-10 bg-black text-white">
      <h2 className="mb-6">ADD PRODUCT</h2>
      <form className="flex flex-col">
        <input
          ref={categoryRef}
          id="category"
          type="text"
          placeholder="Category"
          className="border-1 rounded-lg p-2 bg-transparent mb-2"
        ></input>
        <input
          ref={descriptionRef}
          id="description"
          type="text"
          placeholder="Description"
          className="border-1 rounded-lg p-2 bg-transparent mb-2"
        ></input>
        <input
          ref={imgPrincipalRef}
          id="imgPrincipal"
          type="text"
          placeholder="URL de la imagen principal"
          className="border-1 rounded-lg p-2 bg-transparent mb-2"
        ></input>
        <input
          ref={img2Ref}
          id="img2"
          type="text"
          placeholder="URL de la imagen 2"
          className="border-1 rounded-lg p-2 bg-transparent mb-2"
        ></input>
        <input
          ref={img3Ref}
          id="img3"
          type="text"
          placeholder="URL de la imagen 3"
          className="border-1 rounded-lg p-2 bg-transparent mb-2"
        ></input>
        <input
          ref={img4Ref}
          id="img4"
          type="text"
          placeholder="URL de la imagen 4"
          className="border-1 rounded-lg p-2 bg-transparent mb-2"
        ></input>
        <input
          ref={img5Ref}
          id="img5"
          type="text"
          placeholder="URL de la imagen 5"
          className="border-1 rounded-lg p-2 bg-transparent mb-2"
        ></input>
        <input
          ref={nameRef}
          id="name"
          type="text"
          placeholder="Name of the product"
          className="border-1 rounded-lg p-2 bg-transparent mb-2"
        ></input>
        <input
          ref={priceRef}
          id="price"
          type="text"
          placeholder="Price of the product"
          className="border-1 rounded-lg p-2 bg-transparent mb-2"
        ></input>
        <input
          ref={size1Ref}
          id="size1"
          type="text"
          placeholder="Size1 of the product"
          className="border-1 rounded-lg p-2 bg-transparent mb-2"
        ></input>
        <input
          ref={size2Ref}
          id="size2"
          type="text"
          placeholder="Size2 of the product"
          className="border-1 rounded-lg p-2 bg-transparent mb-2"
        ></input>
        <input
          ref={size3Ref}
          id="size2"
          type="text"
          placeholder="Size2 of the product"
          className="border-1 rounded-lg p-2 bg-transparent mb-2"
        ></input>
        <input
          ref={size4Ref}
          id="size3"
          type="text"
          placeholder="Size3 of the product"
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
      {/* <ToastContainer /> */}
    </div>
  );
};

export default AddProducts;
