import React from 'react'
import slider from '../../ilustraciones/home/slider.png'
import paso1 from '../../ilustraciones/home/paso1.svg'
import paso2 from '../../ilustraciones/home/paso2.svg'
import paso3 from '../../ilustraciones/home/paso3.svg'
import paso4 from '../../ilustraciones/home/paso4.svg'

const Prefooter_home = () => {
  return (
    <> 
        <div className="prefooter">
            <div className="sliderAuto">
                <img src={slider} alt="" />
            </div>
            <div className="prefooter_title">
                <h2 className='text-center'>Comienza <span>asi de facil</span></h2>
            </div>
            <div className="setp_by_step flex w-full items-end justify-around">
                <div className="setp_by_step_img flex flex-col items-center justify-center">
                    <img src={paso1} alt="" />
                    <span>Crea tu cuenta</span>
                </div>
                <div className="setp_by_step_img flex flex-col items-center justify-center">
                    <img src={paso2} alt="" />
                    <span>Instalamos nuestro plugin</span>
                </div>
                <div className="setp_by_step_img flex flex-col items-center justify-center">
                    <img src={paso3} alt="" />
                    <span>Elige tu transportista</span>
                </div>
                <div className="setp_by_step_img flex flex-col items-center justify-center">
                    <img src={paso4} alt="" />
                    <span>¡Todo listo! Comienza a vender</span>
                </div>
            </div>
        </div>

    
    </>
  )
}

export default Prefooter_home