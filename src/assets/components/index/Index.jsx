import { Button, styled } from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";
import { Container } from "react-bootstrap";
import "./text.css";

export const Index = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));

  const target = document.getElementById("target");
  let array = ["Creativa", "Comprometida", "Proactiva", "Trabajo en equipo"];
  let wordIndex = 0;
  let letterIndex = 0;

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
    <div>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "20px",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            padding: "40px",
          }}
        >
          <h2 id="target"> Hola, Soy Sabrina Valenzuela </h2>
          <h2 id="target"> Desarrolladora FullStack </h2>
          <h2 id="target"> y Nutricionista</h2>

          <br />
          <ColorButton variant="contained">Hablemos!</ColorButton>
        </div>
        <div>
          <img src="../../img/foto_sabri.png" />
        </div>
      </Container>
      <hr />
    </div>
  );
};
