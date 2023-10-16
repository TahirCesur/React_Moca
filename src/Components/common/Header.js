/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../Ass/style.css";

function Header() {
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded((prevState) => !prevState);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      fixed="top"
      expanded={expanded}
    >
      <Container>
        <Link
          to="/"
          onClick={() => {
            setExpanded(false);
            handleClick();
          }}
          className="logo"
        >
          <img
            src="assets/img/Moca-Logo.webp"
            alt="Moca-Logo"
            title="Moca-Logo"
            className="img-fluid"
          />
        </Link>

        <Navbar.Toggle onClick={toggleNav} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          expanded={expanded}
          className="justify-content-center"
          id="basic-navbar-nav"
        >
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => {
                setExpanded(false);
                handleClick();
              }}
            >
              {t("ANASAYFA")}
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/hakkimizda"
              onClick={() => {
                setExpanded(false);
                handleClick();
              }}
            >
              {t("HAKKIMIZDA")}
            </Nav.Link>

            <NavDropdown title={t("OCAKLARIMIZ")} id="collasible-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                to="/antalyaelmali1"
                onClick={() => {
                  setExpanded(false);
                  handleClick();
                }}
              >
                {t("ANTALYA ELMALI 1")}
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/antalyaelmali2"
                onClick={() => {
                  setExpanded(false);
                  handleClick();
                }}
              >
                {t("ANTALYA ELMALI 2")}
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/bursaorhaneli"
                onClick={() => {
                  setExpanded(false);
                  handleClick();
                }}
              >
                {t("BURSA BURÇ ORHANELİ")}
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/balikesirwhiteriver"
                onClick={() => {
                  setExpanded(false);
                  handleClick();
                }}
              >
                {t("BALIKESİR WHİTE RİVER")}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={Link}
              to="/urunlerimiz"
              onClick={() => {
                setExpanded(false);
                handleClick();
              }}
              style={{ display: "block" }}
            >
              {t("ÜRÜNLERİMİZ")}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/iletisim"
              onClick={() => {
                setExpanded(false);
                handleClick();
              }}
            >
              {t("İLETİŞİM")}
            </Nav.Link>

            <li className="list-inline-item">
              <a
                href="https://www.facebook.com/surkay.marble"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.youtube.com/channel/UCpKorXDwqZ1ak4Ccf0ziDYA"
                target="_blank"
                rel="noopener noreferrer"
                title="Youtube"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="tel:(+90)2242493435" className="text" title="Tel">
                <i className="fa fa-mobile"></i>
              </a>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
