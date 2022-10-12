import React from 'react'
import SobreNosotros from '../../components/sobreNosotros/SobreNosotros'
import img4 from '../../ilustraciones/nosotros/4.png'
import img1 from '../../ilustraciones/nosotros/1.png'
import img2 from '../../ilustraciones/nosotros/2.png'
import img3 from '../../ilustraciones/nosotros/3.png'
import nosotros1 from '../../ilustraciones/nosotros/nosotros1.png'

const MoreUs = () => {
  return (
    <>
        <div className="moreUs_hero_container flex items-center justify-center">
            <div className="moreUs_hero_content w-3/4 flex items-center justify-center">
                <div className="moreUs_title">
                    <h1>¿Te gustaría ser parte del equipo Pinflag? <span>¡Conócenos!</span></h1>
                </div>
                <div className="moreUs_img_title flex flex-col items-center justify-center gap-4">
                    <div className="pointed_img"></div>
                    <p>¡Aquí podrías estar tú!</p>
                </div>
            </div>
            <div className="moreUs_img_normal w-1/4">
                <img src={img4} alt="" />
            </div>
        </div>
        <div className="moreUs_hero_staff flex items-center justify-around">
                <img id='staff1_img' src={img1} alt="" />
                <img id='staff2_img' src={img2} alt="" />
                <img id='staff3_img' src={img3} alt="" />
        </div>
        <SobreNosotros></SobreNosotros>
        <div className="looking_for_you">
            <img className='mx-auto' src={nosotros1} alt="" />
            <div className="looking_for_you_content flex flex-col items-center justify-center gap-8">
                <h2 className='font-bold mx-auto'>¡Te estamos buscando!</h2>
                <a href='#'>Postula aquí</a>
            </div>
        </div>
    </>
  )
}

export default MoreUs