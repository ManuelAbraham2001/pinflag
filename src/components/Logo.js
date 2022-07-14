import React from "react";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/" className="logo ml-2 lg:mr-2">
      <img
        src="https://pinflag.cl/wp-content/uploads/2021/06/logo_blog-13-1.png"
        alt="Pinflag logo"
      />
    </Link>
  );
};

export default Logo;
