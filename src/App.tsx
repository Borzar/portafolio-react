import { useState } from 'react'
import { About } from './pages/About'
import { Experiencie } from './pages/Experiencie'
import { Portfolio } from './pages/Portfolio'
import { Technologies } from './pages/Technologies'

function App() {
  const [aboutLink, setAboutLink] = useState('no-active')
  const [experienceLink, setExperiencieLink] = useState('no-active')
  const [technologiesLink, setTechnologiesLink] = useState('no-active')
  const [portfolioLink, setPortfolioLink] = useState('no-active')

  const activePortfolioLink = () => {
    setAboutLink('no-active')
    setExperiencieLink('no-active')
    setTechnologiesLink('no-active')
    setPortfolioLink('active')
  }

  const activeTechnologiesLink = () => {
    setAboutLink('no-active')
    setExperiencieLink('no-active')
    setPortfolioLink('no-active')
    setTechnologiesLink('active')
  }

  const activeExperiencieLink = () => {
    setTechnologiesLink('no-active')
    setPortfolioLink('no-active')
    setAboutLink('no-active')
    setExperiencieLink('active')
  }

  const activeAboutLink = () => {
    setExperiencieLink('no-active')
    setTechnologiesLink('no-active')
    setPortfolioLink('no-active')
    setAboutLink('active')
  }

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
            <a className={aboutLink} onClick={activeAboutLink} href="#about">
              Sobre mi
            </a>
          </li>
          <li className="navbar-vertical-item">
            <a
              className={experienceLink}
              onClick={activeExperiencieLink}
              href="#experience"
            >
              Experiencia
            </a>
          </li>
          <li className="navbar-vertical-item">
            <a
              className={technologiesLink}
              onClick={activeTechnologiesLink}
              href="#technologies"
            >
              Tecnologías
            </a>
          </li>
          <li className="navbar-vertical-item">
            <a
              className={portfolioLink}
              onClick={activePortfolioLink}
              href="#porfolio"
            >
              Portafolio
            </a>
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

        <section className="resume-section" id="technologies">
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
  )
}

export default App
