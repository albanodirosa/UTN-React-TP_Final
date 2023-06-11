import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import { getById } from "../Services/productosService";

function Detalle() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState({});
  console.log("🚀 ~ file: Detalle.jsx:9 ~ Detalle ~ params:", id);
  useEffect(() => {
    const request = async () => {
      try {
        const response = await getById(id);
        console.log(
          "🚀 ~ file: Productos.jsx:15 ~ request ~ response:",
          response
        );
        setProducto(response.data());
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    request();
  }, [id]);

  const [aviso, setAviso] = useState("");

  const handleClick = () => {
    setAviso("Gracias por su compra");
  };

  return (
    <Loading loading={loading}>
      <h1>{producto.title}</h1>
      <img src={producto.thumbnail} alt={producto.name} />
      <p>{producto.category}</p>
      <p>${producto.price}</p>
      <p>Descripción</p>
      <p>{producto.description}</p>
      <button onClick={handleClick}>Comprar</button>
      <p>{aviso}</p>
    </Loading>
  );
}

export default Detalle;
