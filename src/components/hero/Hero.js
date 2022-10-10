import React, { useState } from 'react'
import video from '../../ilustraciones/home/video_hero.png'
import location from '../../ilustraciones/home/location.svg'
import location1 from '../../ilustraciones/home/location1.svg'
import location2 from '../../ilustraciones/home/location2.svg'
import location3 from '../../ilustraciones/home/location3.svg'
import location4 from '../../ilustraciones/home/location4.svg'
import location5 from '../../ilustraciones/home/location5.svg'
import ReactPlayer from 'react-player';

const Hero = () => {

  const [videoStatus, setVideoStatus] = useState(<></>)

  const videoHandler = () => {

    document.body.style.overflow = "hidden"

    const closeHandler = e => {
        if(e.target.id === 'video-handler'){
            document.body.style.overflow = "scroll"
            setVideoStatus(<></>)
        }
    }
    
    setVideoStatus(
    <>
        <div id='video-handler' onClick={e => closeHandler(e)} className="video-handler flex items-center justify-center">
            <div>
                <ReactPlayer
                url='https://www.youtube.com/watch?v=fpJtOyZVeIA'
                className='react-player'
                controls
                width='1600px'
                height='800px'
                />
            </div>
        </div>
    </>)

  }

  return (
    <>
        <div className='hero flex items-center justify-evenly w-full'>
            <div className="hero_title flex flex-col items-start justify-between">
                <h1>Múltiples opciones de despacho en <span>tu e-commerce</span></h1>
                <p>Crece aún más con nosotros y mejora tu propuesta con puntos pick-up, tiendas o a domicilio.</p>
                <a href="#">Ver video</a>
            </div>
            {videoStatus}
            <div className="hero_video">
                <img className='hover:cursor-pointer' onClick={() => videoHandler()} src={video} alt="video" />
            </div>
            <div className='hero_svgs'>
                <img src={location} alt="" id='location'/>
                <img src={location1} alt="" id='location1' />
                <img src={location2} alt="" id='location2'/>
                <img src={location3} alt="" id='location3'/>
                <img src={location4} alt="" id='location4'/>
                <img src={location5} alt="" id='location5'/>
            </div>
        </div>
    </>

    
  )
}

export default Hero