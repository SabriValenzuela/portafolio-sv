import { Button, styled } from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";
import { Container } from "react-bootstrap";
import { Skills } from "./skills";

export const AboutMe = () => {
  return (
    <div>
      <div
        style={{
          padding: "40px",
        }}
      >
        <h2>Sobre Mi</h2>
        <br />
        {/*    <h2> Sabrina Valenzuela </h2>
          <h3> Desarrolladora Fullstack</h3>
          <h3> Nutricionista </h3> */}
        <div
          style={{
            textAlign: "justify",
            fontSize: "16px",
          }}
        >
          <p>
            {" "}
            Desarrolladora de software con más de un año de experiencia en el
            diseño y desarrollo de aplicaciones web. Especializada en
            plataformas interactivas y sistemas de gestión, con enfoque en la
            experiencia de usuario, integración de APIs y manejo eficiente de
            bases de datos. Competente en tecnologías como React, Laravel, PHP,
            y JavaScript, comprometida con entregar soluciones innovadoras y
            funcionales.
          </p>{" "}
          <p>
            {" "}
            Actualmente, busco oportunidades que me permitan enfrentar nuevos
            desafíos en el área de la programación, especialmente en proyectos
            relacionados con la salud, donde pueda contribuir con una visión
            integral y técnica. Además, estoy ampliando mis habilidades en
            análisis de datos con enfoque en salud para potenciar el uso de la
            información en la toma de decisiones estratégicas.
          </p>
        </div>
      </div>
      <Skills />
      <hr />
    </div>
  );
};
