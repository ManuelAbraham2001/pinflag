import React from 'react'
import logo from '../../../ilustraciones/logo_footer.svg'
import footer_facebook from '../../../ilustraciones/footer_facebook.svg'
import footer_instagram from '../../../ilustraciones/footer_instagram.svg'
import footer_youtube from '../../../ilustraciones/footer_youtube.svg'
import footer_linkedin from '../../../ilustraciones/footer_linkedin.svg'

const Footer = () => {
  return (
    <>
        <div className="footer_conteiner flex w-full justify-between items-center">
            <div className="footer_content flex flex-col w-2/4">
                <img src={logo} alt="" />
                <span className='italic'> &copy; 2022 Pinflag Chile. Todos los derechos reservados.</span>
            </div>
            <div className="footer_content flex flex-col items-end w-1/4">
                <h2>¿Dudas?</h2>
                <span className='italic'>contacto@pinflag.cl</span>
                <div className="social flex flex-row justify-end w-full">
                    <img src={footer_facebook} alt="" />
                    <img src={footer_instagram} alt="" />
                    <img src={footer_youtube} alt="" />
                    <img src={footer_linkedin} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer