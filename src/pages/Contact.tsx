const logoStyle = {
  width: "30px",
  height: "30px",
};

export const Contact = () => {
  return (
    <>
      <div className="container">
        <h1 style={{ marginBottom: "42px" }}>CONTÁCTAME</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/assets/email-image.png"
            alt="email logo"
            style={logoStyle}
          />
          <b>
            Email&nbsp;
            <a
              style={{ display: "inline" }}
              href="mailto:boris.zlobos@gmail.com"
            >
              boris.zlobos@gmail.com
            </a>
          </b>
        </div>
        <div>
          <img src="/assets/wsp-image.png" alt="wsp logo" style={logoStyle} />
          <b>Whatsapp +56 9 89474890</b>
        </div>
        <div>
          <img
            src="/assets/linkedin-image.png"
            alt="linkedin logo"
            style={logoStyle}
          />
          <b>
            LinkedIn&nbsp;
            <a
              style={{ display: "inline" }}
              href="https://www.linkedin.com/in/boris-zarate-lobos-324b9b10a/"
            >
              in/BorisZarate
            </a>
          </b>
        </div>
      </div>
    </>
  );
};
