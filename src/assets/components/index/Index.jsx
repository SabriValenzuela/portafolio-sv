import { Button, styled } from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";
import { Container } from "react-bootstrap";
import "./text.css";
import perfil from "/img/foto_sabri.png";

export const Index = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    "&:hover": {
      backgroundColor: purple[700],
      transform: "scale(1.05)",
      transition: "all 0.3s ease",
    },
  }));

  const createLetter = () => {
    const letter = document.createElement("span");
    target.appendChild(letter);

    letter.classList.add("letter");
    letter.style.opacity = "0";
    letter.style.animation = "anim 2s ease forwards";
    letter.textContent = array[wordIndex][letterIndex];

    setTimeout(() => {
      letter.remove();
    }, 2000);
  };

  const loop = () => {
    setTimeout(() => {
      if (wordIndex >= array.length) {
        wordIndex = 0;
        letterIndex = 0;
        loop();
      } else if (letterIndex < array[wordIndex].length) {
        // createLetter();
        letterIndex++;
        loop();
      } else {
        letterIndex = 0;
        wordIndex++;
        setTimeout(() => {
          loop();
        }, 2000);
      }
    }, 80);
  };
  loop();

  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1200px",
          backgroundColor: "white",
          borderRadius: "15px",
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
          padding: "40px",
        }}
      >
        {/* Texto de presentación */}
        <div>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: purple[700],
              marginBottom: "20px",
            }}
            id="target"
          >
            Hola, Soy Sabrina Valenzuela
          </h1>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "500",
              color: "#333",
              marginBottom: "20px",
            }}
          >
            Desarrolladora full stack y nutricionista
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#555",
              marginBottom: "30px",
            }}
          >
            Profesional de la salud y desarrolladora de software con más de un
            año de experiencia en el diseño y desarrollo de aplicaciones web.
          </p>
          <ColorButton variant="contained" href="#contact">
            {/*  <a style={{ textDecoration: "none" }}> */} ¡Hablemos!
            {/*     </a> */}
          </ColorButton>
        </div>

        {/* Imagen de perfil */}
        <div
          style={{
            maxWidth: "400px",
            textAlign: "center",
          }}
        >
          <img
            src={perfil}
            alt="Perfil"
            style={{
              width: "100%",
              maxWidth: "300px",
              borderRadius: "50%",
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
            }}
          />
        </div>
      </Container>
    </div>
  );
};
