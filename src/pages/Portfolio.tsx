interface porfoliosProps {
  title: string
  languages: string
  framework: string
  link: string
}

const portfolios: porfoliosProps[] = [
  {
    title: 'Calendar APP',
    languages: 'Typescript',
    framework: 'React',
    link: 'https://github.com/Borzar/calendar-app',
  },
  {
    title: 'Gifs APP',
    languages: 'Typescript',
    framework: 'Angular',
    link: 'https://github.com/Borzar/gifsApp-angular',
  },
  {
    title: 'React notes',
    languages: 'Typescript',
    framework: 'React',
    link: 'https://github.com/Borzar/react-notes-app',
  },
  {
    title: 'Calendar backend',
    languages: 'Javascript',
    framework: 'NodeJS-Express',
    link: 'https://github.com/Borzar/calendar-backend',
  },
  {
    title: 'Angular bases',
    languages: 'Typescript',
    framework: 'Angular',
    link: 'https://github.com/Borzar/angular-bases',
  },
  {
    title: 'Express backend',
    languages: 'Javascript',
    framework: 'NodeJS-Express',
    link: 'https://github.com/Borzar/express-backend',
  },
  {
    title: 'Python course',
    languages: 'Python',
    framework: ' - ',
    link: 'https://github.com/Borzar/python-course',
  },
  {
    title: 'Crud react hook form',
    languages: 'Typescript',
    framework: 'React',
    link: 'https://github.com/Borzar/crud-react-hook-form',
  },
  {
    title: 'Heroes APP',
    languages: 'Typescript',
    framework: 'React',
    link: 'https://github.com/Borzar/HeroesApp',
  },
  {
    title: 'Poke front',
    languages: 'Typescript',
    framework: 'React',
    link: 'https://github.com/Borzar/poke-front',
  },
  {
    title: 'Giphy',
    languages: 'Typescript',
    framework: 'React',
    link: 'https://github.com/Borzar/giphy',
  },
]

export const Portfolio = () => {
  let count = 1
  return (
    <div className="portfolio-page">
      <h1>Portafolio</h1>
      <div className="scroller rounded shadow">
        <table className="table table-light table-hover">
          <thead className="table-secondary sticky-top">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Lenguaje</th>
              <th scope="col">Framework</th>
              <th scope="col">Link</th>
            </tr>
          </thead>

          {portfolios.map((x) => (
            <tbody key={x.title}>
              <tr>
                <th scope="row">{count++}</th>
                <td>{x.title}</td>
                <td>{x.languages}</td>
                <td>{x.framework}</td>
                <td>
                  <a href={x.link} className="btn btn-outline-dark">
                    GitHub
                  </a>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  )
}
