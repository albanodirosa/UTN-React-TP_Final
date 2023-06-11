import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";
import Home from "./Pages/Home";
import Registro from "./Pages/Registro";
import Login from "./Pages/Login";
import Detalle from "./Pages/Detalle";
import NotFound from "./Pages/NotFound";
import AltaProductos from "./Pages/AltaProductos";
import ModificarProductos from "./Pages/ModificarProductos";
import NavBar from "./Components/NavBar";
import AuthProvider from "./Context/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alta" element={<Registro />} />
            <Route path="/ingreso" element={<Login />} />
            <Route path="/producto/alta" element={<AltaProductos />} />
            <Route
              path="/producto/modificar/:id"
              element={<ModificarProductos />}
            />
            <Route path="/producto/:id" element={<Detalle />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </AuthProvider>
    </Router>
  );
}

export default App;
