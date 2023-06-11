import { useContext } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { AuthContext } from "../Context/AuthContext";

function NavBar() {
  const context = useContext(AuthContext);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          {!context.login && (
            <>
              <Nav.Link as={Link} to="/alta">
                Registro
              </Nav.Link>
              <Nav.Link as={Link} to="/ingreso">
                Login
              </Nav.Link>
            </>
          )}
          {context.login && (
            <>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/producto/alta">
                  Nuevo
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/" onClick={context.handleLogout}>
                Salir
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
      {context.login && <div>Bienvenido {context.user.name}</div>}
    </Navbar>
  );
}

export default NavBar;
