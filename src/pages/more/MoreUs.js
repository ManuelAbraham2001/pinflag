import React from "react";
import SobreNosotros from "../../components/sobreNosotros/SobreNosotros.js";
import "./MoreUs.css";
import nosotros1 from "../../ilustraciones/nosotros/nosotros1.png";
import user1 from "../../ilustraciones/nosotros/1.png";
import user2 from "../../ilustraciones/nosotros/2.png";
import user3 from "../../ilustraciones/nosotros/3.png";
import user4 from "../../ilustraciones/nosotros/4.png";

const MoreUs = () => {
  return (
    <div className="">
      <div className="conocenos justify-center mt-10 items-center back-grad pt-10 pb-10">
        <div className="border h-2/3">
          <h1 className=" title pl-10 pr-10 font-bold c-azul leading-snug">
            ¿Te gustaría ser parte del equipo Pinflag?{" "}
            <span className="c-calipso">¡Conócenos!</span>
          </h1>

          <div className="conocenos-left py-10 ">
            <img src={user1} className="user user1"  alt="" />
            <img src={user2} className="user user2"  alt="" />
          </div>
        </div>

        <div className="border w-full conocenos-right justify-around h-2/3">
          <img src={user3} className="user  user3"  alt="" />
          <img src={user4} className="user  user4" alt="" />

          <div className="flex flex-col justify-center  user5" >
            <div className="dotted-img self-start "></div>
            <p className="c-azul">¡Aquí podrías estar tú!</p>
          </div>
        </div>
      </div>
      <h2 className="text-center font-black  mt-20 mb-20 c-azul subtitle">
        Sobre <span className="c-calipso">nosotros</span>
      </h2>
      <SobreNosotros />
      <div className="flex justify-center">
        <img src={nosotros1} class="nosotros-1 mt-20" alt="" />
      </div>
      <div className="bg-violet text-center">
        <h2 className="text-white  font-semi-bold pt-20 mb-5 subtitle">
          ¡Te estamos buscando!
        </h2>
        <button className="py-4 px-10 rounded-full text-white font-bold mb-20">
          Postula aquí
        </button>
      </div>
    </div>
  );
};

export default MoreUs;
