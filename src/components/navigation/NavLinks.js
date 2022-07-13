import { Link, useLocation } from "react-router-dom";

const NavLinks = (props) => {
  const location = useLocation();
  const urlActual = location.pathname;

  return (
    <ul>
      <li>
        <Link
          onClick={() => {
            props.isMobile && props.closeMobile();
          }}
          to="/"
          //   className={`${
          //     (urlActual === "/inicio" || urlActual === "/") && "selected"
          //   }`}
          //ESTO ES POR SI SE LE DA UN ESTILO A ALGUNA CATEGORIA MIENTRAS ESTE SELECCIONADA
        >
          Inicio
        </Link>
      </li>
      <li>
        <Link
          onClick={() => {
            props.isMobile && props.closeMobile();
          }}
          to="/servicios"
          //   className={`${urlActual === "/servicios" && "selected"}`}
        >
          Servicios
        </Link>
      </li>
      <li>
        <Link
          onClick={() => {
            props.isMobile && props.closeMobile();
          }}
          to="/planes"
          //   className={`${urlActual === "/planes" && "selected"}`}
        >
          Planes
        </Link>
      </li>
      <li>
        <Link
          onClick={() => {
            props.isMobile && props.closeMobile();
          }}
          to="/partners"
          //   className={`${urlActual === "/partners" && "selected"}`}
        >
          Partners
        </Link>
      </li>
      <li>
        <Link
          onClick={() => {
            props.isMobile && props.closeMobile();
          }}
          to="/blog"
          //   className={`${urlActual === "/blog" && "selected"}`}
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          onClick={() => {
            props.isMobile && props.closeMobile();
          }}
          to="/mas"
          //   className={`${urlActual === "/mas" && "selected"}`}
        >
          Más
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
