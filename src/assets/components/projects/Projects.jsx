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
      info: "Creación de aplicación que realiza el crear, ver, editar y borrar un paciente, realizada en React",
    },

    {
      id: 2,
      title: "API Porciones de intercambio [En proceso]",
      image: "/",
      info: "Creación de API (Metodos GET) en laravel sobre porciones de intercambio de alimentos para poder ser utilizada para cuantificar o crear planes alimentarios.",
    },

    {
      id: 3,
      title: "Backend de ecommerce (CRUD)",
      image: "/",
      info: "Creado con JAVA con Springboot, cuenta con todos los items para realizar una aplicación ecommerce, y se puede integrar como API en frontend",
    },

    {
      id: 4,
      title: "Analisis de Datos OMS [En proceso]",
      image: "/img/oms.png",
      info: "Proyecto para iniciarme en el analisis de datos, realizado con R, libereias tydiverse",
    },

    {
      id: 5,
      title: "Portafolio",
      image: "/",
      info: "Creado con React, libreria MUI para el diseño, integración de envio de correos con EmailJS",
    },
    {
      id: 6,
      title: "Aplicación API Taylor Swift",
      image: "/img/api-ts.png",
      info: "Consumo de API con React",
    },
    {
      id: 7,
      title: "Calculadora",
      image: "/img/calculadora.png",
      info: "Calculadora creada con HTML, CSS y JS",
    },
    {
      id: 8,
      title: "Landing Page",
      image: `/img/landing.png`,
      info: "Pagina creada para profesora de danza con HTML, CSS y JS",
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
