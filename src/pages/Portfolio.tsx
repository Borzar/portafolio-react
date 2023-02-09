interface porfoliosProps {
  title: string;
  description: string;
  img: string;
  programmingLanguages: string;
  link: string;
}

const porfoliosFrontend: porfoliosProps[] = [
  {
    title: "Calendar APP",
    description:
      "Aplicacion de uso corporativo en el cual los usuarios pueden reservar espacios y horas especificas. Todo usuario puede ver las agendas de otros y el dueño. Requiere autenticacion",
    img: "/assets/calendar.png",
    programmingLanguages: "/assets/react-image.png",
    link: "https://github.com/Borzar/calendar-app",
  },
  {
    title: "Gifs APP",
    description:
      "App de gifs solo para fines de aprendizaje, en donde tenemos una barra de busqueda para mostrar los gifs especificados. Esta App se hizo con Angular y accediendo a la API de gifs-app",
    img: "/assets/gifs-app.png",
    programmingLanguages: "/assets/angular-image.png",
    link: "https://github.com/Borzar/gifsApp-angular",
  },
  {
    title: "React-Notes",
    description:
      "Aplicacion simple en donde puedes ir guardardo notas y recordatorios",
    img: "/assets/react-notes.png",
    programmingLanguages: "/assets/react-image.png",
    link: "https://github.com/Borzar/react-notes-app",
  },
];

const porfoliosBackend: porfoliosProps[] = [
  {
    title: "Calendar-backend",
    description:
      "Backend para Calendar-App, utilizando NodeJs, Express, MongoDB. Tambien utiliza sistema de Tokens y autenticación",
    img: "/assets/node-image.png",
    programmingLanguages: "/assets/js-image.png",
    link: "https://github.com/Borzar/calendar-backend",
  },
];

export const Portfolio = () => {
  return (
    <>
      <h1 style={{ marginBottom: "42px" }}>PORFOLIO</h1>
      <h2 style={{ marginBottom: "34px" }}>PORFOLIO FRONTEND</h2>
      <div className="d-flex" style={{ justifyContent: "center" }}>
        {porfoliosFrontend.map((x) => (
          <div
            className="card m-3 p-3 shadow p-3 mb-5 bg-body-tertiary rounded"
            style={{ width: "18rem" }}
          >
            <img
              src={x.img}
              className="card-img-top"
              alt="logo description"
              style={{ width: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title">{x.title}</h5>
              <p className="card-text">{x.description}</p>
              <img
                src={x.programmingLanguages}
                style={{ width: "70px", height: "50px" }}
                alt="programming languages"
              />
              <hr />
              <a href={x.link} className="btn btn-primary">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <h2 style={{ marginBottom: "42px" }}>PORFOLIO BACKEND</h2>
      {porfoliosBackend.map((x) => (
        <div className="d-flex" style={{ justifyContent: "center" }}>
          <div
            className="card m-3 p-3 shadow p-3 mb-5 bg-body-tertiary rounded"
            style={{ width: "18rem" }}
          >
            <img
              src={x.img}
              className="card-img-top"
              alt="logo description"
              style={{ width: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title">{x.title}</h5>
              <p className="card-text">{x.description}</p>
              <img
                src={x.programmingLanguages}
                style={{ width: "70px", height: "50px" }}
                alt="programming languages"
              />
              <hr />
              <a href={x.link} className="btn btn-primary">
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
