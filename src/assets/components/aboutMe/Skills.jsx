import React from "react";
import { IconContext } from "react-icons";
import {
  FaAngular,
  FaBootstrap,
  FaCss3,
  FaDatabase,
  FaFigma,
  FaGit,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import "./skills.css";

export const Skills = () => {
  const skillIcons = [
    {
      id: 1,
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      id: 2,

      icon: <FaPhp />,
      name: "PHP",
    },
    {
      id: 3,

      icon: <FaLaravel />,
      name: "Laravel",
    },
    {
      id: 4,

      icon: <FaReact />,
      name: "React",
    },
    {
      id: 5,

      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      id: 6,

      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      id: 7,

      icon: <FaFigma />,
      name: "Figma",
    },
    {
      id: 8,

      icon: <FaGit />,
      name: "Git",
    },
    {
      id: 9,

      icon: <FaAngular />,
      name: "Angular",
    },
    {
      id: 10,

      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      id: 10,

      icon: <FaDatabase />,
      name: "SQL",
    },
  ];

  return (
    <div>
      <IconContext.Provider value={{ className: "icons-class" }}>
        <div className="container-icons">
          {skillIcons.map((icon) => {
            return (
              <div className="icon-animation" key={icon.id}>
                {icon.icon}
                <h4>{icon.name}</h4>
              </div>
            );
          })}
        </div>
      </IconContext.Provider>
    </div>
  );
};
