import React from "react";
import { Link } from "react-scroll";

const links = [
  {
    id: 1,
    url: "/",
    text: "Inicio",
  },

  {
    id: 2,
    to: "projects",
    text: "Proyectos",
  },
  {
    id: 3,
    to: "about",
    text: "Sobre mi",
  },
  {
    id: 4,
    to: "contact",
    text: "Contacto",
  },
];

const NavLinks = () => {
  return (
    <>
      {links.map((item) => (
        <li key={item.id}>
          <Link
            to={item.to}
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            style={{ cursor: "pointer" }}
          >
            {item.text}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
