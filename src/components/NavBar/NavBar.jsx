import React from "react";
import "./NavBar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import logo from "./img/logo.png";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container fluid>
      <a className="navbar-brand" href="#">
      <img src={logo} alt="logo" className="logo" />
        </a>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
          {/* LOS ELEMENTOS QUE ESTAN OCULTOS SERÁN AGREGADOS MAS ADELANTE YA QUE ERAN MÁS DE LOS SOLICITADOS PARA ESTA ENTREGA*/}
    <NavDropdown title="Guitarras" id="basic-nav-dropdown" className="items_menu">
            <NavDropdown.Item >Guitarras Acusticas</NavDropdown.Item>
            <NavDropdown.Item >Guitarras Eléctricas</NavDropdown.Item>
            {/* <NavDropdown.Item href="#">Guitarras Clasicas</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Accesorios Guitarras</NavDropdown.Item>
            <NavDropdown.Item href="#">Amplificadores Guitarras</NavDropdown.Item>
            <NavDropdown.Item href="#">Pedales y Pedaleras Guitarra</NavDropdown.Item> */}
    </NavDropdown>
    {/*<NavDropdown title="Bajos" id="basic-nav-dropdown" className="items_menu">
            <NavDropdown.Item href="#">Bajos</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Accesorios para Bajo</NavDropdown.Item>
            <NavDropdown.Item href="#">Amplificadores Bajo</NavDropdown.Item>
            <NavDropdown.Item href="#">Pedales y Pedaleras Bajo</NavDropdown.Item> 
            </NavDropdown>*/}
            <NavDropdown title="Percusión" id="basic-nav-dropdown" className="items_menu">
            <NavDropdown.Item href="#">Baterías Acústicas</NavDropdown.Item>
              <NavDropdown.Item href="#">Baterías Electrónicas</NavDropdown.Item>
              {/* <NavDropdown.Item href="#">Platillos</NavDropdown.Item>
              <NavDropdown.Item href="#">Redoblantes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Accesorios</NavDropdown.Item>
              <NavDropdown.Item href="#">Percusión</NavDropdown.Item>
              <NavDropdown.Item href="#">Pequeña percusión</NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title="Teclados y Pianos" id="basic-nav-dropdown" className="items_menu">
            <NavDropdown.Item href="#">Teclados</NavDropdown.Item>
            <NavDropdown.Item href="#">Pianos</NavDropdown.Item>
            {/* <NavDropdown.Divider />
            <NavDropdown.Item href="#">Soportes para Piano y Teclado</NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title="Vientos" id="basic-nav-dropdown" className="items_menu">
            <NavDropdown.Item href="#">Saxofones</NavDropdown.Item>
            <NavDropdown.Item href="#">Trompetas</NavDropdown.Item>
            {/* <NavDropdown.Item href="#">Otros</NavDropdown.Item> */}
            </NavDropdown>
            {/*<NavDropdown title="Audio y Home Studio" id="basic-nav-dropdown" className="items_menu">
            <NavDropdown.Item href="#">Parlantes Bluetooth</NavDropdown.Item>
            <NavDropdown.Item href="#">Audio Hogar</NavDropdown.Item>
             <NavDropdown.Item href="#">Micrófonos y Soportes</NavDropdown.Item>
            <NavDropdown.Item href="#">Auriculares</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Monitores de Estudio</NavDropdown.Item>
            <NavDropdown.Item href="#">Placas de audio</NavDropdown.Item>
            <NavDropdown.Item href="#">Consolas y Mixers</NavDropdown.Item>
            <NavDropdown.Item href="#">Paneles acústicos</NavDropdown.Item>
            <NavDropdown.Item href="#">Accesorios de sonido</NavDropdown.Item> 
            </NavDropdown>
            <NavDropdown title="Otros" id="basic-nav-dropdown" className="items_menu">
            <NavDropdown.Item href="#">Ukeleles</NavDropdown.Item>
            <NavDropdown.Item href="#">Ins. de cuerda</NavDropdown.Item>
            </NavDropdown>*/}
          </Nav>
          <Form className="d-flex buscardor">
            <Form.Control
              type="search"
              placeholder="Buscar productos, marcas y más"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success boton_buscar">Buscar</Button>
          </Form>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
