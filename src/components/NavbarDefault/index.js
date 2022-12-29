import React from "react";
import "./index.scss";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { itemsMenu } from "../../objectsJson.js";
import BrandCuraduria from "../../assets/images/brandCuraduria.png";
const NavbarDefault = () => {
  return (
    <Navbar collapseOnSelect expand="xl" className="navbar-menu">
      <Container>
        <Navbar.Brand>
          <img
            src={BrandCuraduria}
            alt=""
            width="275"
            height="60"
            className="brand-navbar"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="button-toogle"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-menu">
            {itemsMenu.map((item) => {
              return item.submenu ? (
                <NavDropdown
                  key={item.id}
                  title={item.title}
                  className={item.className}
                >
                  {item.submenu.map((itemSub, index) => (
                    <NavDropdown.Item key={index} href={itemSub.url}>
                      {itemSub.nameSubmenu}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                <Nav.Link
                  href={item.url}
                  key={item.id}
                  className={item.className}
                >
                  {item.title}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarDefault;
