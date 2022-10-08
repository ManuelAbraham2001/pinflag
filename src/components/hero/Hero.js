import React from 'react'
import video from '../../ilustraciones/video.svg'

const Hero = () => {
  return (
    <div className='hero flex items-center justify-evenly w-full'>
        <div className="hero_title flex flex-col items-start justify-between">
            <h1>Múltiples opciones de despacho en <span>tu e-commerce</span></h1>
            <p>Crece aún más con nosotros y mejora tu propuesta con puntos pick-up, tiendas o a domicilio.</p>
            <a href="#">Ver video</a>
        </div>
        <div className="hero_video">
            <img onClick={e => console.log(e)} src={video} alt="video" />
        </div>
    </div>
  )
}

export default Hero