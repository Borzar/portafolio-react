export const About = () => {
  return (
    <div className="about-page">
      <h1>sobre mi</h1>
      <h2>
        Boris <span>Zarate</span>
      </h2>
      <span className="d-flex">
        +56 9 89474890 -&nbsp;
        <span>
          <a className="email-info" href="mailto:boris.zlobos@email.com">
            boris.zlobos@gmail.com
          </a>
        </span>
      </span>
      <br />
      <div className="text-muted">
        Bienvenido a mi porfolio como Desarrollador. En la actualidad me
        desempeño como desarrollador Frontend especialmente con la biblioteca de
        React, aunque también he desarrollado algunas API's del lado backend,
        utilizando NodeJS, Express y MongoDB. <br /> <br />
        Me gusta la programación y la resolución de problemas. Me motiva el
        crecimiento profesional para obtener los mejores resultados en cada
        proyecto.
      </div>
      <br />
      <br />
      <div className="d-flex gap-4">
        <a
          className="btn btn-secondary shadow"
          href="assets/CV_Boris_Zarate_Lobos_2023.pdf"
          download
        >
          Curriculum
        </a>
        <a
          className="btn btn-secondary shadow"
          href="https://github.com/Borzar?tab=repositories"
        >
          GitHub
        </a>
        <a
          className="btn btn-secondary shadow"
          href="https://www.linkedin.com/in/boris-zarate-lobos-324b9b10a/"
        >
          LinkedIn
        </a>
      </div>
    </div>
  )
}
