export const Home = () => {
  return (
    <div>
      <h1 style={{ marginBottom: "42px" }}>BORIS ZÁRATE LOBOS</h1>
      <div style={{ marginBottom: "34px" }}>
        BIENVENIDO A MI PORFOLIO COMO DESARROLLADOR FRONTEND
      </div>
      <div style={{ marginBottom: "34px" }}>
        Si quieres ponerte en contacto conmigo escribeme a {""}
        <a style={{ display: "inline" }} href="mailto:boris.zlobos@gmail.com">
          boris.zlobos@gmail.com
        </a>
      </div>
      <a
        className="btn btn-success"
        style={{ textAlign: "center", marginBottom: "34px" }}
        href="/assets/CV_Boris_Zarate_Lobos_2023.pdf"
        download
      >
        Descarga mi curruculum
      </a>
      <div className="d-flex justify-content-center gap-5">
        <button className="btn btn-primary">LINKEDIN</button>
        <button className="btn btn-primary">GITHUB</button>
      </div>
    </div>
  );
};
