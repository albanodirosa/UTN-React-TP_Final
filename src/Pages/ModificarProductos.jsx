import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { update, getById, deleteProducto } from "../Services/productosService";
import Input from "../Components/Input";

function ModificarProductos() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const navigate = useNavigate();

  useEffect(() => {
    const result = async () => {
      try {
        const response = await getById(id);
        setValue("title", response.data().title);
        setValue("category", response.data().category);
        setValue("price", response.data().price);
        setValue("description", response.data().description);
        setValue("thumbnail", response.data().thumbnail);
      } catch (e) {
        console.log(e);
      }
    };
    result();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      const document = await update(id, data);
      console.log(
        "🚀 ~ file: AltaProductos.jsx:15 ~ onSubmit ~ document:",
        document
      );
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickEliminar = async () => {
    try {
      const response = await deleteProducto(id);
      console.log(
        "🚀 ~ file: ModificarProductos.jsx:42 ~ handleClickEliminar ~ response:",
        response
      );
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>Modificar Producto</h1>
      <Button variant="danger" onClick={handleClickEliminar}>
        Eliminar
      </Button>
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

export default ModificarProductos;
