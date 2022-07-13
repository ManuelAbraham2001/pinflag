import NavLinks from "./NavLinks";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./MobileNavigation.css";

const MobileNavigation = () => {

  const [open, setOpen] = useState(false);
  const closeMobile = () => setOpen(false);
  const hamburgerIcon = (
    <FontAwesomeIcon
      icon={faBars}
      onClick={() => setOpen(!open)}
    ></FontAwesomeIcon>
  );
  const closeIcon = (
    <FontAwesomeIcon
      icon={faXmark}
      onClick={() => setOpen(!open)}
    ></FontAwesomeIcon>
  );

  return (
    <nav>
      {open ? closeIcon : hamburgerIcon} 
      {open && <NavLinks isMobile={true} closeMobile={closeMobile} />}
    </nav>
  );
};

export default MobileNavigation;