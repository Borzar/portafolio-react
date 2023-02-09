import { Link, Outlet } from "react-router-dom";
import "bootstrap/js/src/collapse.js";

export const Root = () => {
  return (
    <>
      <nav className="navbar fixed-top bg-body-tertiary shadow p-3 mb-5 bg-body-tertiary rounded">
        <div
          className="container-fluid"
          style={{
            justifyContent: "space-evenly",
            alignItems: "baseline",
          }}
        >
          <Link to="/">
            <b className="text-dark">BORIS</b>
          </Link>
          <Link to="/about">
            <b className="text-dark">SOBRE MI</b>
          </Link>
          <Link to="/portafolio">
            <b className="text-dark">PORFOLIO</b>
          </Link>
          <Link to="/skills">
            <b className="text-dark">SKILLS</b>
          </Link>
          <Link to="/contact">
            <b className="text-dark">CONTACTO</b>
          </Link>
        </div>
      </nav>
      <div
        className="bg-body p-3"
        style={{ width: "100%", margin: "auto", textAlign: "center" }}
      >
        <Outlet />
      </div>
    </>
  );
};
