import { proyects } from "../proyects/data"

export const ProyectTable = () => {
  let count = 1
  return (
      <div className="table-container scroller rounded shadow">
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

          {proyects.map((x) => (
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
  )
}
