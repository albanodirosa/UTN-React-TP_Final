import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Producto from "./Producto";
import { getAllProductos } from "../Services/productosService";
import Buscador from "./Buscador";
import Loading from "./Loading";

function Productos() {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const [buscar, setBuscar] = useState("");

  useEffect(() => {
    const request = async () => {
      try {
        const querySnapshot = await getAllProductos(buscar);
        console.log(
          "🚀 ~ file: Productos.jsx:25 ~ request ~ response:",
          querySnapshot.docs
        );
        setProductos(querySnapshot.docs);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    request();
  }, [buscar]);

  const handleChange = (event) => {
    const value = event.target.value;
    console.log("🚀 ~ file: Productos.jsx:31 ~ handleChange ~ value:", value);
    setBuscar(value);
  };

  return (
    <Loading loading={loading}>
      <h1>{"Listado de Productos"}</h1>
      <Buscador buscar={buscar} handleChange={handleChange} />
      <Row>
        {productos.map((producto) => (
          <Producto
            key={producto.id}
            id={producto.id}
            nombre={producto.data().title}
            precio={producto.data().price}
            thumbnail={producto.data().thumbnail}
            categoria=""
          />
        ))}
      </Row>
    </Loading>
  );
}

export default Productos;
