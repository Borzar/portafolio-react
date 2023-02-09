const imgStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "12px",
};

export const Skills = () => {
  return (
    <>
      <div className="container">
        <h1 style={{ marginBottom: "42px" }}>SKILLS</h1>
        <div>
          <h3>LENGUAJES DE PROGRAMACIóN</h3>
          <div
            className="d-flex gap-3 p-1"
            style={{ justifyContent: "center", marginBottom: "34px" }}
          >
            <div
              style={{
                textAlign: "center",
              }}
            >
              <img
                src="/assets/html-image.png"
                alt="html logo"
                style={imgStyle}
              />
              <p>
                <b>html</b>
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <img
                src="/assets/css-image.png"
                alt="css logo"
                style={imgStyle}
              />
              <p>
                <b>css</b>
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <img src="/assets/js-image.png" alt="js logo" style={imgStyle} />
              <p>
                <b>js</b>
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <img
                src="/assets/ts-image.png"
                alt="type logo"
                style={imgStyle}
              />
              <p>
                <b>ts</b>
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <img
                src="/assets/python-image.png"
                alt="python logo"
                style={imgStyle}
              />
              <p>
                <b>python</b>
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h3>FRAMEWORKS Y LIBRERIAS</h3>
          <div
            className="d-flex gap-4 p-1"
            style={{ justifyContent: "center", marginBottom: "34px" }}
          >
            <div style={{ textAlign: "center" }}>
              <img
                src="/assets/react-image.png"
                alt="react logo"
                style={imgStyle}
              />
              <p>
                <b>react</b>
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <img
                src="/assets/angular-image.png"
                alt="angular logo"
                style={imgStyle}
              />
              <p>
                <b>angular</b>
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <img
                src="/assets/material-image.png"
                alt="material logo"
                style={imgStyle}
              />
              <p>
                <b>material UI</b>
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <img
                src="/assets/bootstrap-image.png"
                alt="bootstrap logo"
                style={imgStyle}
              />
              <p>
                <b>bootstrap</b>
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h3>PRUEBAS UNITARIAS E INTEGRACIÓN</h3>
          <div
            className="d-flex gap-4 p-1"
            style={{ justifyContent: "center", marginBottom: "34px" }}
          >
            <div style={{ textAlign: "center" }}>
              <img
                src="assets/react-testing-library-image.png"
                alt="react-testing logo"
                style={imgStyle}
              />
              <p>
                <b>react testing library</b>
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <img
                src="assets/jest-image.png"
                alt="jest logo"
                style={imgStyle}
              />
              <p>
                <b>JEST</b>
              </p>
            </div>
          </div>
        </div>

        <hr />
        <div>
          <h3>CONOCIMIENTOS EN</h3>
          <div
            className="d-flex gap-4 p-1"
            style={{ justifyContent: "center", marginBottom: "34px" }}
          >
            <div style={{ textAlign: "center" }}>
              <img
                src="assets/node-image.jpeg"
                alt="nodejs logo"
                style={imgStyle}
              />
              <p>
                <b>nodeJS</b>
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <img
                src="assets/express-image.png"
                alt="express logo"
                style={imgStyle}
              />
              <p>
                <b>express</b>
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <img
                src="assets/mongodb-image.png"
                alt="mongodb logo"
                style={imgStyle}
              />
              <p>
                <b>mongoDB</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
