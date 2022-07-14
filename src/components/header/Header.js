import React, { useState } from "react";
import Logo from "../Logo";
import DesktopNavigation from "../navigation/DesktopNavigation";
import MobileNavigation from "../navigation/MobileNavigation";
import BotonEmpezar from "../BotonEmpezar";
import "./_header.scss";

const Header = () => {
  return (
        <header className="flex lg:align-middle lg:justify-center justify-between border">
      <Logo />
      <BotonEmpezar/>
      <DesktopNavigation />
      <MobileNavigation />
    </header>
  )
};

export default Header;
