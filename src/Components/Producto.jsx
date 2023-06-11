import { useContext } from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Producto.css";
import { AuthContext } from "../Context/AuthContext";

function Producto({ id, nombre, precio, categoria, descripcion, thumbnail }) {
  const context = useContext(AuthContext);
  return (
    <Col xs={12} sm={6} lg={4} xxl={3}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={thumbnail} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {categoria}${precio}
            {descripcion}
          </Card.Text>
          <Button variant="primary" as={Link} to={`/producto/${id}`}>
            Ver Detalle
          </Button>
          {context.login && (
            <Button
              variant="primary"
              as={Link}
              to={`/producto/modificar/${id}`}
            >
              Modificar
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Producto;
