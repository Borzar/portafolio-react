import { About } from "./pages/About";
import { Experiencie } from "./pages/Experiencie";
import { Portfolio } from "./pages/Portfolio";
import { Technologies } from "./pages/Technologies";

function App() {
  return (
    <>
      <nav className="navbar-vertical">
        <ul className="navbar-vertical-container">
          <li className="navbar-vertical-item">
            <img
              className="profile-image"
              src="assets/profile.jpg"
              alt="foto perfil"
            ></img>
          </li>
          <li className="navbar-vertical-item">
            <a href="#about">Sobre mi</a>
          </li>
          <li className="navbar-vertical-item">
            <a href="#experience">Experiencia</a>
          </li>
          <li className="navbar-vertical-item">
            <a className=" js-scroll-trigger" href="#skills">
              Tecnologías
            </a>
          </li>
          <li className="navbar-vertical-item">
            <a href="#porfolio">Portafolio</a>
          </li>
        </ul>
      </nav>

      <section className="main-section">
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <About />
          </div>
        </section>
        <hr />

        <section className="resume-section" id="experience">
          <div className="resume-section-content">
            <Experiencie />
          </div>
        </section>
        <hr />

        <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <Technologies />
          </div>
        </section>
        <hr />

        <section className="resume-section" id="porfolio">
          <div className="resume-section-content">
            <Portfolio />
          </div>
        </section>
        <hr />
      </section>
    </>
  );
}

export default App;
