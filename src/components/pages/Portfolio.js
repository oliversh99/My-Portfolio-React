import React from "react";
import { projects } from "../../data";
import Projects from "./cards/Project";

export default function Portfolio() {
  return (
    <section className="container">
      <div className="project">
        <h2 className="top-title">Portfolio</h2>
        <hr></hr>
      </div>

      <div className="row" id="card-data">
        {projects.map((project) => (
          <Projects
            title={project.title}
            image={project.image}
            link={project.link}
            subtitle={project.subtitle}
            description={project.description}
            live={project.live}
          />
        ))}
      </div>
    </section>
  );
}
