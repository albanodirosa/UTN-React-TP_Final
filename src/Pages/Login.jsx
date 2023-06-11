import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import Input from "../Components/Input";
import AlertCustom from "../Components/AlertCustom";
import ButtonWithLoading from "../Components/ButtonWithLoading";
import { AuthContext } from "../Context/AuthContext";
import { login } from "../Services/usuariosService";
import { loginMessage } from "../Utils/errorMessage";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ variant: "", text: "" });
  const navigate = useNavigate();
  const context = useContext(AuthContext);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const user = await login(data.email, data.password);
      console.log("🚀 ~ file: Registro.jsx:14 ~ onSubmit ~ user:", user);
      context.handleLogin(user);
      navigate("/");
      setLoading(false);
    } catch (e) {
      console.log(e.code);
      setAlert({
        variant: "danger",
        text: loginMessage[e.code] || "Ha ocurrido un error",
      });
      setLoading(false);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          name="formBasicEmail"
          type="email"
          placeholder="Ingrese su dirección de correo electrónico"
          register={{
            ...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
            }),
          }}
        >
          <Form.Text className="text-muted">
            {errors.email?.type === "required" && (
              <span>El campo es obligatorio</span>
            )}
            {errors.email?.type === "pattern" && (
              <span>Formato de email no válido</span>
            )}
          </Form.Text>
        </Input>

        <Input
          label="Contraseña"
          name="formBasicPassword"
          type="password"
          placeholder="Ingrese su contraseña"
          register={{
            ...register("password", {
              required: true,
              minLength: 6,
              maxLength: 12,
            }),
          }}
        >
          <Form.Text className="text-muted">
            {errors.password?.type === "required" && (
              <span>El campo es obligatorio</span>
            )}
            {errors.password?.type === "minLength" && (
              <span>El mínimo es de 6 caracteres</span>
            )}
            {errors.password?.type === "maxLength" && (
              <span>El máximo es de 12 caracteres</span>
            )}
          </Form.Text>
        </Input>

        <ButtonWithLoading loading={loading}>Ingresar</ButtonWithLoading>
        <AlertCustom {...alert} />
      </Form>
    </div>
  );
}

export default Login;
