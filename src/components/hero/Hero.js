import React from 'react'
import video from '../../ilustraciones/video.svg'
import rectangulo from '../../ilustraciones/rectangulo.png'

const Hero = () => {
  return (
    <div className='hero flex items-center justify-evenly w-full'>
        <div className="hero_title flex flex-col items-start justify-between">
            <h1>Múltiples opciones de despacho <span>tu e-commerce</span></h1>
            <p>Crece aún más con nosotros y mejora tu propuesta con puntos pick-up, tiendas o a domicilio.</p>
            <a href="#">Ver video</a>
        </div>
        <div className="hero_video">
            <img src={rectangulo} alt="video" />
        </div>
    </div>
  )
}

export default Hero