import React from "react";

const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },

  {
    id: 2,
    url: "/about",
    text: "Sobre mi",
  },
  {
    id: 3,
    url: "/projects",
    text: "Proyectos",
  },
  {
    id: 4,
    url: "/contact",
    text: "Contacto",
  },
];

const NavLinks = () => {
  return (
    <>
      {links.map((item) => (
        <li key={item.id}>
          <a href={item.url}>{item.text}</a>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
