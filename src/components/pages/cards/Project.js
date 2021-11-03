import React from "react";

const styles = {
  image: {
    maxWidth: 350,
    maxHeight: 250,
  },
};

export default function Projects(props) {
  return (
    <div className="card col-6 col-md-4 m-5 p-2">
      <div className="img-container">
        <img
          alt={props.title}
          src={props.image}
          style={styles.image}
          className="img-responsive img"
        />
      </div>
      <div className="content">
        <p className="card-title">{props.title}</p>
        <div class="proj-icons-container">
          <a href={props.link} className="btn">
            <img
              class="project-icon"
              src="https://img.icons8.com/fluent/48/000000/github.png"
              alt="GitHub Repo"
            />
            {props.subtitle}
          </a>
          <a href={props.live} className="btn">
            <img
              class="live-icon"
              src="https://img.icons8.com/ultraviolet/40/000000/web-design.png"
              alt="Live App"
            />
            Live Application
          </a>
        </div>
        <p class="topics">{props.description}</p>
      </div>
    </div>
  );
}
