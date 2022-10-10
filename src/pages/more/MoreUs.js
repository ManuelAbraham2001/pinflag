import React from "react";
import sobreNosotros from "../../components/sobreNosotros/sobreNosotros";
import "./MoreUs.css";
const MoreUs = () => {
  return (
    <div>
      <div>
        <div>
          <h1>
            ¿Te gustaría ser parte del equipo Pinflag?{" "}
            <span className="c-calipso">¡Conócenos!</span>
          </h1>
          <div className="dotted-img"></div>
          <div className="dotted-img"></div>
        </div>
        <div>
          <div className="dotted-img"></div>
          <div className="dotted-img"></div>
          <div className="dotted-img"></div>
        </div>
      </div>
      <h2>
        Sobre <span className="c-calipso">nosotros</span>
      </h2>
      <div>

      </div>
      <div>
        <h2>¡Te estamos buscando!</h2>
        <button>Postula aquí</button>
      </div>
    </div>
  );
};

export default MoreUs;
