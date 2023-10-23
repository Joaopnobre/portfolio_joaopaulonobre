import "./Projects.css";
import Spaceman from "../../assets/Spaceman.png";
import Airbnb from "../../assets/Airbnb-Clone.png";

function Projects() {
  return (
    <>
      <h2>Projects</h2>

      <section className="projects">
        <div className="project-card">
          <a href="https://github.com/Joaopnobre/Spaceman">
            <div className="project-box">
              <img className="spaceman" src={Spaceman} alt="spaceman" />
            </div>
          </a>
          <div className="info-box">
            <h3>SPACEMAN</h3>
          </div>
        </div>
        <div className="project-card">
          <a href="https://github.com/Joaopnobre/airbnb-clone">
            <div className="project-box2">
              <img className="airbnb" src={Airbnb} alt="airbnb" />
            </div>
          </a>
          <div className="info-box">
            <h3>Airbnb Clone</h3>
          </div>
        </div>
      </section>

      {/* <section id="projects">
     

        <div className="infos">
          <div className="project-box">
            <h3 className="project-title">Spaceman - Skateboarding Store</h3>

            <p className="description">
              Develop a store with multiple pages, login, account registration,
              shopping cart
            </p>
            <a
              className="view"
              href="https://github.com/Joaopnobre/Spaceman.git"
            >
              Project View
            </a>
          </div>
          <div className="project-box">
            <h3 className="project-title">Airbnb Clone</h3>
            <p className="description">
              Clone of Airbnb home page with modal. Project made in React.js for
              training and improving bootstrap
            </p>
            <a
              className="view"
              href="https://github.com/Joaopnobre/airbnb-clone.git"
            >
              Project View
            </a>
          </div>
          <div className="project-box">
            <h3 className="project-title">Brading Page</h3>
            <p className="description">
              Exercise of developing a branding page using react. I chose Nike
              to be that brand.{" "}
            </p>
            <a
              className="view"
              href="https://github.com/Joaopnobre/Brand-Page.git"
            >
              Project View
            </a>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Projects;
