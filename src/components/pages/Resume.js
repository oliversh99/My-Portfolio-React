import React from "react";
import { skills } from "../../data";

export default function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Olivar Raees</h2>
          <ul>
            <li>
              {/* Entry-level web developer with high proficiency in full-stack
              development, but passionate for responsive web design. */}
            </li>
          </ul>

          <div className="row">
            <div class="mt-5">
              <a href="my linkden link">
                <img
                // icons link
                  src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                  alt="LinkedIn"
                />
              </a>
            </div>
            <div class="mt-5">
              <a href="my git hublink">
                <img
                // icons link
                  src="https://img.icons8.com/color/48/000000/github--v1.png"
                  alt="GitHub"
                />
              </a>
            </div>
          </div>

          {/* <a
            href="link to google documents"
            class="btn btn-primary"
          >
            Download Resume
          </a> */}
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <div className="card" style={{ width: 400 }}>
            <ul className="list-group list-group-flush">
              {skills.map((skill) => (
                <li className="list-group-item" key={skill}>
                  <span className="">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
