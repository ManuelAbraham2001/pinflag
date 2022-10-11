import React from "react";
import "./sobreNosotros.css";
import linkedin from '../../ilustraciones/nosotros/staff/linkedin.png';
import staff1 from '../../ilustraciones/nosotros/staff/staff1.png';
import staff2 from '../../ilustraciones/nosotros/staff/staff2.png';
import staff3 from '../../ilustraciones/nosotros/staff/staff3.png';

const sobreNosotros = () => {
  const staff = [
    {
      foto: staff1,
      nombre: "Rosmarie Bahrens",
      bio: "asklñdas ilnajdjlk fjnifalopagjkldfkjlgdf klgpeo gmdflk mbdflkdfjbdlfmbdflm dfkmdflkdfm vdk opv",
      puesto: "Graphic Designer",
      linkedin: "#",
    },
    {
        foto: staff2,
      nombre: "Jun Wang",
      bio: "asklñdas ilnajdjlk fjnifalopagjkldfkjlgdf klgpeo gmdflk mbdflkdfjbdlfmbdflm dfkmdflkdfm vdk opv",
      puesto: "Marketing",
      linkedin: "#",
    },
    {
        foto: staff3,
      nombre: "Juan José García",
      bio: "asklñdas ilnajdjlk fjnifalopagjkldfkjlgdf klgpeo gmdflk mbdflkdfjbdlfmbdflm dfkmdflkdfm vdk opv",
      puesto: "CEO",
      linkedin: "#",
    },
    {
        foto: staff3,
        nombre: "NPC",
        bio: "asklñdas ilnajdjlk fjnifalopagjkldfkjlgdf klgpeo gmdflk mbdflkdfjbdlfmbdflm dfkmdflkdfm vdk opv",
        puesto: "Random",
        linkedin: "#",
      },
      {
        foto: staff3,
        nombre: "NPC",
        bio: "asklñdas ilnajdjlk fjnifalopagjkldfkjlgdf klgpeo gmdflk mbdflkdfjbdlfmbdflm dfkmdflkdfm vdk opv",
        puesto: "Random",
        linkedin: "#",
      },
      {
        foto: staff3,
        nombre: "NPC",
        bio: "asklñdas ilnajdjlk fjnifalopagjkldfkjlgdf klgpeo gmdflk mbdflkdfjbdlfmbdflm dfkmdflkdfm vdk opv",
        puesto: "Random",
        linkedin: "#",
      },
      {
        foto: staff3,
        nombre: "NPC",
        bio: "asklñdas ilnajdjlk fjnifalopagjkldfkjlgdf klgpeo gmdflk mbdflkdfjbdlfmbdflm dfkmdflkdfm vdk opv",
        puesto: "Random",
        linkedin: "#",
      },
      {
        foto: staff3,
        nombre: "NPC",
        bio: "asklñdas ilnajdjlk fjnifalopagjkldfkjlgdf klgpeo gmdflk mbdflkdfjbdlfmbdflm dfkmdflkdfm vdk opv",
        puesto: "Random",
        linkedin: "#",
      },
      {
        foto: staff3,
        nombre: "NPC",
        bio: "asklñdas ilnajdjlk fjnifalopagjkldfkjlgdf klgpeo gmdflk mbdflkdfjbdlfmbdflm dfkmdflkdfm vdk opv",
        puesto: "Random",
        linkedin: "#",
      },
      {
        foto: staff3,
        nombre: "NPC",
        bio: "asklñdas ilnajdjlk fjnifalopagjkldfkjlgdf klgpeo gmdflk mbdflkdfjbdlfmbdflm dfkmdflkdfm vdk opv",
        puesto: "Random",
        linkedin: "#",
      },
      {
        foto: staff3,
        nombre: "NPC",
        bio: "asklñdas ilnajdjlk fjnifalopagjkldfkjlgdf klgpeo gmdflk mbdflkdfjbdlfmbdflm dfkmdflkdfm vdk opv",
        puesto: "Random",
        linkedin: "#",
      },
      {
        foto: staff3,
        nombre: "NPC",
        bio: "asklñdas ilnajdjlk fjnifalopagjkldfkjlgdf klgpeo gmdflk mbdflkdfjbdlfmbdflm dfkmdflkdfm vdk opv",
        puesto: "Random",
        linkedin: "#",
      },
      {
        foto: staff3,
        nombre: "NPC",
        bio: "asklñdas ilnajdjlk fjnifalopagjkldfkjlgdf klgpeo gmdflk mbdflkdfjbdlfmbdflm dfkmdflkdfm vdk opv",
        puesto: "Random",
        linkedin: "#",
      },
      {
        foto: staff3,
        nombre: "NPC",
        bio: "asklñdas ilnajdjlk fjnifalopagjkldfkjlgdf klgpeo gmdflk mbdflkdfjbdlfmbdflm dfkmdflkdfm vdk opv",
        puesto: "Random",
        linkedin: "#",
      },

  ];

  return (
    <div className="contenedor">
      {staff.map((e) => (
        <div className="tarjeta">
          <img src={e.foto} className="profile-pic"/>
          <a src={e.linkedin} className="linkedin">
            <img src={linkedin}></img>
          </a>
          <h2>{e.nombre}</h2>
          <p>"{e.bio}"</p>
          <div className="button">{e.puesto}</div>
        </div>
      ))}
    </div>
  );
};

export default sobreNosotros;
