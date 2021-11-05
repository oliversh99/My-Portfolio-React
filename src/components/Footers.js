import React from "react";

function Footer() {
  return (
    <footer className="footer bg-primary fixed-bottom">
      <div className="container">
        <div className="row ">
          {/* link to githubher */}
          <a href="https://github.com/oliversh99" className="mx-auto">
            <img
            // GITHUB LOGO 
              src="https://img.icons8.com/color/48/000000/github--v1.png"
              alt="Github"
              className="icon"
            />
            {/*  */}
          </a>
          <a
            href="LINK TO PORTOFOLIO HER"
            className="mx-auto"
          >
            <img
            // FOLDER LOGO 
              src="https://img.icons8.com/ultraviolet/50/000000/opened-folder.png"
              alt="Original Portfolio"
              className="icon"
            />
          </a>
          <a
            href="https://linkedin.com/in/olivar-raees-270951218"
            className="mx-auto"
          >
            <img
            // LINKEDIN LOGO 
              src="https://img.icons8.com/fluent/48/000000/linkedin.png"
              alt="LinkedIn"
              className="icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
