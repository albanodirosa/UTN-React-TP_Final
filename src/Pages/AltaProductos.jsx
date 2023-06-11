import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { create } from "../Services/productosService";
import Input from "../Components/Input";

function AltaProductos() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const document = await create(data);
      console.log(
        "🚀 ~ file: AltaProductos.jsx:15 ~ onSubmit ~ document:",
        document
      );
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Nombre"
          name="formBasicNombre"
          placeholder="Ingrese nombre del producto"
          register={{ ...register("title", { required: true }) }}
        >
          <Form.Text className="text-muted">
            {errors.title && <span>El campo es obligatorio</span>}
          </Form.Text>
        </Input>

        <Input
          label="Categoría"
          name="formBasicCategoria"
          placeholder="Ingrese categoría del producto"
          register={{ ...register("category", { required: true }) }}
        >
          <Form.Text className="text-muted">
            {errors.category && <span>El campo es obligatorio</span>}
          </Form.Text>
        </Input>

        <Input
          label="Precio"
          name="formBasicPrecio"
          type="number"
          placeholder="Ingrese precio del producto"
          register={{ ...register("price", { required: true }) }}
        >
          <Form.Text className="text-muted">
            {errors.price && <span>El campo es obligatorio</span>}
          </Form.Text>
        </Input>

        <Input
          label="Descripción"
          name="formBasicDescripción"
          placeholder="Ingrese descripción del producto"
          register={{ ...register("description", { required: true }) }}
        >
          <Form.Text className="text-muted">
            {errors.description && <span>El campo es obligatorio</span>}
          </Form.Text>
        </Input>

        <Input
          label="Imagen"
          name="formBasicImagen"
          placeholder="Ingrese imagen del producto"
          register={{ ...register("thumbnail", { required: true }) }}
        >
          <Form.Text className="text-muted">
            {errors.thumbnail && <span>El campo es obligatorio</span>}
          </Form.Text>
        </Input>

        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </div>
  );
}

export default AltaProductos;
