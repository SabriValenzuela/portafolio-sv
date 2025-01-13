import { Button, styled } from "@mui/material";
import { ProjectsCards } from "./Cards";
import "./card.css";
import { purple } from "@mui/material/colors";

export const AllProjects = () => {
  const projects = [
    {
      id: 1,
      title: "CRUD API HL7-FHIR",
      image: "/img/hl7.png",
      info: "Creación de aplicación que realiza el crear, ver, editar y borrar un paciente, realizada en React.",
      github: "https://github.com/SabriValenzuela/hl7-app",
      demo: "https://hl7-app-azure.vercel.app",
    },

    {
      id: 2,
      title: "API Porciones de intercambio",
      image: "/img/food-api.png",
      info: "Creación de API (Metodos GET) en laravel sobre porciones de intercambio de alimentos para poder ser utilizada para cuantificar o crear planes alimentarios.",
      github: "https://github.com/SabriValenzuela/food-api",
    },

    {
      id: 3,
      title: "Backend Ecommerce (CRUD)",
      image: "/img/api-ecommerce.png",
      info: "Creado con Springboot(JAVA), para creación de productos para realizar una aplicación ecommerce, y cuenta con apartado blog.",
      github: "https://github.com/SabriValenzuela/API-ecommerce",
    },

    {
      id: 4,
      title: "Analisis de Datos OMS ",
      image: "/img/oms.png",
      info: "Proyecto inicial de analisis de datos, realizado con R, librerias tydiverse,ggplot2 y plotly [En proceso]",
      github: "https://github.com/SabriValenzuela/Analisis-Datos-OMS",
    },

    {
      id: 5,
      title: "Portafolio",
      image: "/img/portafolio.png",
      info: "Creado con React, libreria MUI para el diseño, integración de envio de correos con EmailJS.",
      github: "https://github.com/SabriValenzuela/portafolio-sv",
    },
    {
      id: 6,
      title: "Aplicación API Taylor Swift",
      image: "/img/api-ts.png",
      info: "Consumo de API con React",
      github: "https://github.com/SabriValenzuela/Taylor-Swift-App",
      demo: "https://taylor-swift-app.vercel.app/",
    },
    /*     {
      id: 7,
      title: "Calculadora",
      image: "/img/calculadora.png",
      info: "Calculadora creada con HTML, CSS y JS",
    }, */
    {
      id: 8,
      title: "Landing Page",
      image: `/img/landing.png`,
      info: "Pagina creada para profesora de danza con HTML, CSS y JS",
      github: "https://github.com/SabriValenzuela/landing-page-fs",
      demo: "https://landing-page-fs-wine.vercel.app",
    },
  ];

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));

  return (
    <>
      <div
        id="projects"
        style={{
          backgroundColor: "#f4f4f4",
          padding: "20px 20px",
        }}
      >
        <h2 style={{ textAlign: "center", color: purple[500] }}>Proyectos</h2>
        <hr
          style={{
            width: "50px",
            height: "4px",
            backgroundColor: purple[500],
            border: "none",
            margin: "10px auto",
          }}
        />

        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "2.5rem",
          }}
        >
          {projects.map((project) => {
            return (
              <div key={project.id}>
                <ProjectsCards
                  title={project.title}
                  info={project.info}
                  image={project.image}
                  github={project.github}
                  demo={project.demo}
                />
              </div>
            );
          })}
          {/*  <ProjectsCards title={title} /> */}
        </div>
      </div>
    </>
  );
};
