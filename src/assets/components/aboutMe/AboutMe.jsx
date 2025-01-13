import { Button, styled } from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";
import { Skills } from "./Skills";
import cv from "/img/CV Sabrina Valenzuela Nutricionista Desarrolladora.pdf";

export const AboutMe = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));

  return (
    <div
      id="about"
      style={{
        backgroundColor: "#f4f4f4",
        padding: "20px 20px",
      }}
    >
      <div /* style={{ backgroundColor: "#f9f9f9", padding: "60px 20px" }} */>
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ textAlign: "center", color: purple[500] }}>Sobre Mi</h2>
          <hr
            style={{
              width: "50px",
              height: "4px",
              backgroundColor: purple[500],
              border: "none",
              margin: "10px auto",
            }}
          />
          <div
            style={{
              textAlign: "justify",
              fontSize: "16px",
              lineHeight: "1.6",
              color: "#333",
              margin: "20px 0",
            }}
          >
            <p>
              Desarrolladora de software con más de un año de experiencia en el
              diseño y desarrollo de aplicaciones web. Especializada en
              plataformas interactivas y sistemas de gestión, con enfoque en la
              experiencia de usuario, integración de APIs y manejo eficiente de
              bases de datos. Competente en tecnologías como React, Laravel,
              PHP, y JavaScript, comprometida con entregar soluciones
              innovadoras y funcionales.
            </p>
            <p>
              Actualmente, busco oportunidades que me permitan enfrentar nuevos
              desafíos en el área de la programación, especialmente en proyectos
              relacionados con la salud, donde pueda contribuir con una visión
              integral y técnica. Además, estoy ampliando mis habilidades en
              análisis de datos con enfoque en salud para potenciar el uso de la
              información en la toma de decisiones estratégicas.
            </p>
          </div>
          <div
            style={{
              maxWidth: "800px",
              margin: "40px auto",
              textAlign: "center",
              color: "#333",
            }}
          >
            {/*   <h3 style={{ marginTop: "40px", color: purple[500] }}>
            Conocimientos en:
          </h3> 
          <br />*/}
            <Skills />
          </div>
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <ColorButton variant="contained" size="large">
              <a
                href={cv}
                download
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Descarga mi CV
              </a>
            </ColorButton>
          </div>
        </div>
      </div>

      {/*    <div
        style={{
          maxWidth: "800px",
          margin: "40px auto",
          textAlign: "center",
          color: "#333",
        }}
      >
        <Skills />

        <h3 style={{ marginTop: "40px", color: purple[500] }}>
          Experiencia Laboral
        </h3>
        <h3 style={{ marginTop: "20px", color: purple[500] }}>Cursos</h3>
        <hr
          style={{
            width: "50px",
            height: "4px",
            backgroundColor: purple[500],
            border: "none",
            margin: "10px auto",
          }}
        />
      </div>*/}
    </div>
  );
};
