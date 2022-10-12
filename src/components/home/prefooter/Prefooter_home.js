import React from 'react'
import paso1 from '../../../ilustraciones/home/paso1.svg'
import paso2 from '../../../ilustraciones/home/paso2.svg'
import paso3 from '../../../ilustraciones/home/paso3.svg'
import paso4 from '../../../ilustraciones/home/paso4.svg'
import pointed_line_prefooter1 from '../../../ilustraciones/home/pointed_line_prefooter1.svg'
import pointed_line_prefooter2 from '../../../ilustraciones/home/pointed_line_prefooter2.svg'
import pointed_line_prefooter3 from '../../../ilustraciones/home/pointed_line_prefooter3.svg'
import brand1 from '../../../ilustraciones/clientes/lippi.png'
import brand2 from '../../../ilustraciones/clientes/geography.png'
import brand3 from '../../../ilustraciones/clientes/haka.png'
import brand4 from '../../../ilustraciones/clientes/wd40.png'

const Prefooter_home = () => {
  return (
    <> 
        <div className="prefooter">
            <div className="slider_brans">
                <div className="slider_brans_track flex">
                    <div className="slide_brans">
                        <img src={brand1} alt="" />
                    </div>
                    <div className="slide_brans">
                        <img src={brand2} alt="" />
                    </div>
                    <div className="slide_brans">
                        <img src={brand3} alt="" />
                    </div>
                    <div className="slide_brans">
                        <img src={brand4} alt="" />
                    </div>

                    <div className="slide_brans">
                        <img src={brand1} alt="" />
                    </div>
                    <div className="slide_brans">
                        <img src={brand2} alt="" />
                    </div>
                    <div className="slide_brans">
                        <img src={brand3} alt="" />
                    </div>
                    <div className="slide_brans">
                        <img src={brand4} alt="" />
                    </div>
                </div>
            </div>
            <div className="prefooter_title">
                <h2 className='text-center'>Comienza <span>asi de facil</span></h2>
            </div>
            <div className="setp_by_step flex items-end justify-between">
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
                <div className="pointed_lines_prefooter">
                    <img id='pointed_line_prefooter1' src={pointed_line_prefooter1} alt="" />
                    <img id='pointed_line_prefooter2' src={pointed_line_prefooter2} alt="" />
                    <img id='pointed_line_prefooter3' src={pointed_line_prefooter3} alt="" />
                </div>
            </div>
        </div>

    
    </>
  )
}

export default Prefooter_home