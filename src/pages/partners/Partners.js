import React, { useState } from 'react'
import rectangulo from '../../ilustraciones/rectangulo.png'
import benefits1 from '../../ilustraciones/beneficios1.png'
import benefits2 from '../../ilustraciones/beneficios2.png'
import logos from '../../ilustraciones/partners_logo.png'
import PartnersLogos from './PartnersLogos'

export const Partners = () => {

    const partners = [
        {
            logo: logos,
            partnerId: 1
        },
        {
            logo: logos,
            partnerId: 1
        },
        {
            logo: logos,
            partnerId: 1
        },
        {
            logo: logos,
            partnerId: 1
        },
        {
            logo: logos,
            partnerId: 1
        },
        {
            logo: logos,
            partnerId: 1
        },
        {
            logo: logos,
            partnerId: 2
        },
        {
            logo: logos,
            partnerId: 2
        },
        {
            logo: logos,
            partnerId: 2
        },
        {
            logo: logos,
            partnerId: 3
        },    
        {
            logo: logos,
            partnerId: 3
        },
        {
            logo: logos,
            partnerId: 3
        },
        {
            logo: logos,
            partnerId: 3
        },
        {
            logo: logos,
            partnerId: 3
        },
        {
            logo: logos,
            partnerId: 3
        },
        {
            logo: logos,
            partnerId: 3
        }
    ]
    
    const [filtro, setFiltro] = useState('')

  return (
    <> 
        <div className='partners_hero flex items-center justify-center'>
            <div className="partners_hero_content flex flex-col items-start justify-around">
                <h1 className='partners_title'>Acelera tu roadmap de tecnologia con nuestras <span>integraciones nativas</span></h1>
                <div className="bar"></div>
                <p className='partners_p'>Con las integraciones de Pinflag podrás montar tu e-commerce en momentos. Puedes usar nuestras más de 20 integraciones solo con click y sin código. </p>
            </div>
            
            <div className="partners_img">
                <img src={rectangulo} alt="" />
            </div>
        </div>
        <div className="benefits flex flex-col items-center justify-evenly">
            <div className='benefits_title'>
                <h2 className='text-center font-bold'>benefits</h2>
            </div>
            <div className='flex items-start justify-evenly w-full'>
                <div className="benefits_card flex flex-col items-start justify-center">
                    <h2>Agrega con clicks y no codigo</h2>
                    <p>Utiliza nuestras más de 20 integraciones activando las que desees para tu negocio.</p>
                    <img src={benefits1} alt="" />
                </div>
                <div className="benefits_card2 flex flex-col items-start justify-center">
                    <h2>Herramientas flexibles para tus necesidades</h2>
                    <p>Nuestras integraciones y plataformas están disponibles en las nuevas tecnologías enfocadas a la adaptabilidad del dispositivo. Aprovecha y utiliza nuestras integraciones.</p>
                    <img src={benefits2} alt="" />
                </div>
                <div className="bar"></div>
            </div>
        </div>
        <div className="partners_logos">
            <div className="partners_logo_title">
                <h2 className='text-center font-bold'>Lorem ipsum dolor sit <span>+100</span> amet </h2>
            </div>
            <div className="filters_logos flex items-start justify-around">
                <div className="filters">
                    <ul>
                        <li> <button onClick={() => setFiltro('')}>Todos</button> </li>
                        <li> <button onClick={() => setFiltro(1)}>Filtro 1</button> </li>
                        <li> <button onClick={() => setFiltro(2)}>Filtro 2</button> </li>
                        <li> <button onClick={() => setFiltro(3)}>Filtro 3</button> </li>
                    </ul>
                </div>
                <div className="logos grid grid-cols-4">
                {partners.filter(e => e.partnerId === filtro).map(e => <PartnersLogos partnerId={e.partnerId} img={e.logo}></PartnersLogos>)}
                {partners.filter(() => filtro == '').map(e => <PartnersLogos partnerId={e.partnerId} img={e.logo}></PartnersLogos>)}
                </div>

                {/* {partners.filter(e => e.partnerId === filtro).map(e => <PartnersLogos partnerId={e.partnerId} img={e.logo}></PartnersLogos>)} */}
                
            </div>
        </div>
    </>
  )
}
