import { ProjectsCards } from "./Cards";
import "./card.css";

export const AllProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Consumo de Api de letras de canciones",
      image: "/",
      info: "home",
    },
    {
      id: 2,
      title: "App del Clima",
      image: "/",
      info: "Consumo de api de clima, horario y conversión de divisas",
    },
    {
      id: 3,
      title: "App del Clima",
      image: "/",
      info: "Consumo de api de clima, horario y conversión de divisas",
    },
    {
      id: 1,
      title: "Consumo de Api de letras de canciones",
      image: "/",
      info: "home",
    },
  ];

  return (
    <>
      <br />
      <h2>Proyectos</h2>
      <br />
      <div className="container-grid">
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
    </>
  );
};
