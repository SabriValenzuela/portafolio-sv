import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const form = useRef();

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

  /*  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }; */

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("te amo");
    emailjs
      /*   .sendForm(
        "service_sflt55h",
        /*   "your_template_id",
        formData,
        "4M7FcBvF62yKPYvMO" 
      ) */
      .sendForm("service_sflt55h", "template_qs36wtl", form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        (result) => {
          alert("Mensaje enviado con éxito");
        },
        (error) => {
          alert("Error al enviar el mensaje: " + error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      style={{
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      <Container
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          maxWidth: "1200px",
          backgroundColor: "white",
          borderRadius: "15px",
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
          padding: "40px",
        }}
      >
        {/* Redes Sociales */}
        <Box
          style={{
            flex: 1,
            textAlign: "left",
            paddingRight: "20px",
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            style={{
              fontWeight: "bold",
              marginBottom: "20px",
              color: purple[700],
            }}
          >
            Contáctame
          </Typography>

          <Typography
            variant="body1"
            style={{
              fontSize: "18px",
              color: "#555",
              marginBottom: "30px",
            }}
          >
            Información de contacto
          </Typography>
          <Stack direction="column" spacing={2}>
            <a
              href="sabrina.valenzuela@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                color: "#555",
                textDecoration: "none",
                fontSize: "18px",
              }}
            >
              <FaEnvelope style={{ marginRight: "10px" }} />
              sabrina.valenzuela@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/tu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                color: "#555",
                textDecoration: "none",
                fontSize: "18px",
              }}
            >
              <FaLinkedin style={{ marginRight: "10px" }} />
              LinkedIn
            </a>

            <a
              href="https://github.com/SabriValenzuela"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                color: "#555",
                textDecoration: "none",
                fontSize: "18px",
              }}
            >
              <FaGithub style={{ marginRight: "10px" }} />
              GitHub
            </a>
          </Stack>
        </Box>

        {/* Formulario */}
        <Box
          style={{
            flex: 2,
            paddingLeft: "20px",
          }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
            onSubmit={handleSubmit}
            ref={form}
          >
            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth
              name="from_name"
            />
            <TextField
              label="correo"
              variant="outlined"
              fullWidth
              name="user_email"
            />
            <TextField
              label="Asunto"
              name="asunto"
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Mensaje"
              name="message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
            />
            <ColorButton type="submit" variant="contained">
              Enviar
            </ColorButton>
          </form>
        </Box>
      </Container>
    </div>
  );
}
