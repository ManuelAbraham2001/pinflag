import React from 'react'
import logo from '../../../ilustraciones/logo_footer.svg'

const Footer = () => {
  return (
    <>
        <div className="footer_conteiner flex w-full justify-between items-center">
            <div className="footer_content flex flex-col w-2/4">
                <img src={logo} alt="" />
                <span className='italic'>2022 Pinflag Chile. Todos los derechos reservados.</span>
            </div>
            <div className="footer_content flex flex-col items-end w-1/4">
                <h2>¿Dudas?</h2>
                <span className='italic'>contacto@pinflag.cl</span>
                <div className="social flex flex-row justify-end w-full">
                    <div className="logotest"></div>
                    <div className="logotest"></div>
                    <div className="logotest"></div>
                    <div className="logotest"></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer