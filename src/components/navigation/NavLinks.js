import { Link, useLocation } from "react-router-dom";
import "./NavLinks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Logo";
const NavLinks = (props) => {
  const location = useLocation();
  const urlActual = location.pathname;

  return (
    <ul className="flex flex-col lg:flex lg:flex-row align-middle justify-around pt-8">
      <li>
        <Link
          onClick={() => {
            props.isMobile && props.closeMobile();
          }}
          to="/"
          className="font-bold px-3 flex justify-between align-middle"
          //   className={`${
          //     (urlActual === "/inicio" || urlActual === "/") && "selected"
          //   }`}
          //ESTO ES POR SI SE LE DA UN ESTILO A ALGUNA CATEGORIA MIENTRAS ESTE SELECCIONADA
        >
          Inicio
          <FontAwesomeIcon
            icon={faAngleDown}
            className="lg:ml-2 mt-1"
          ></FontAwesomeIcon>
        </Link>
      </li>
      <li>
        <Link
          onClick={() => {
            props.isMobile && props.closeMobile();
          }}
          to="/servicios"
          className="font-bold px-3 flex justify-between align-middle"
          //   className={`${urlActual === "/servicios" && "selected"}`}
        >
          Servicios
          <FontAwesomeIcon
            icon={faAngleDown}
            className="lg:ml-2 mt-1"
          ></FontAwesomeIcon>
        </Link>
      </li>
      <li>
        <Link
          onClick={() => {
            props.isMobile && props.closeMobile();
          }}
          to="/planes"
          className="font-bold px-3 flex justify-between align-middle"
          //   className={`${urlActual === "/planes" && "selected"}`}
        >
          Planes
          <FontAwesomeIcon
            icon={faAngleDown}
            className="lg:ml-2 mt-1"
          ></FontAwesomeIcon>
        </Link>
      </li>
      <li>
        <Link
          onClick={() => {
            props.isMobile && props.closeMobile();
          }}
          to="/partners"
          className="font-bold px-3 flex justify-between align-middle"
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
          className="font-bold px-3 flex justify-between align-middle"
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
          className="font-bold px-3 flex justify-between align-middle"
          //   className={`${urlActual === "/mas" && "selected"}`}
        >
          Más
          <FontAwesomeIcon
            icon={faAngleDown}
            className="lg:ml-2 mt-1"
          ></FontAwesomeIcon>
        </Link>
      </li>
      <li>
        <Link className="font-bold px-3 lg:ml-10" to="/">
          Iniciar sesión
        </Link>
      </li>
      <li>
        <Link
          className="empieza font-bold  lg:rounded-3xl px-3 py-2 lg:text-white lg:bg-blue-300"
          to="/"
        >
          Empieza gratis
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
