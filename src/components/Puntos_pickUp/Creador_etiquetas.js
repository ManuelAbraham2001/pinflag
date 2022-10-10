import React from 'react'
import rectangulo from '../../ilustraciones/rectangulo.png'
import hero from '../../ilustraciones/servicios/etiquetasHero.png'

const Creador_etiquetas = () => {
  return (
    <>
        <div className="services_container flex items-center justify-evenly">
            <div className="services_title flex flex-col items-start justify-center gap-12">
                <h1>Todo integrado <span>en un solo lugar</span></h1>
                <p>Pinflag es una plataforma “headless” de e-commerce que potencia un check-out optimizado, direcciones, puntos pick-up, omnicanalidad, trazabilidad e infraestructura multicourier.</p>
            </div>
            <div className="services_img">
                <img src={hero} alt="" />
            </div>
        </div>

        <div className="pickup_points_container">
            <div className="pickup_points_header flex items-center justify-center">
                <h2>Reduce tus costos logísticos y mejora la eficiencia de tu bodega</h2>
            </div>
            <div className="bubbles_container flex items-center mx-auto justify-between">
                <div className="bubble flex items-center flex-col justify-center">
                    <h2>+40%</h2>
                    <p>De tarifas más económicas</p>
                </div>
                <div className="bubble flex items-center flex-col justify-center">
                    <h2>+60%</h2>
                    <p>De eficiencia en el procesamiento del pedido</p>
                </div>
            </div>
        </div>

        <div className="pickup_services_container">
            <div className="pickup_services flex items-center justify-evenly shadow-lg">
                <div className="pickup_services_content flex flex-col items-start justify-center gap-10">
                    <h2>Mas de 10 opciones <br /> <span>de transportistas</span></h2>
                    <p className='max-w-xl'>Elige el que más te acomode, ya sea por precio o nivel de servicio. <span>Podrás configurar tus propias condiciones.</span></p>
                </div>
                <div className="pickup_services_img">
                    <img src={rectangulo} alt="" />
                </div>
            </div>
            <div className="pickup_services flex items-center justify-evenly shadow-lg">
                <div className="pickup_services_content flex flex-col items-start justify-center gap-10">
                    <h2>Imprime etiquetas de <br /> <span>forma unitaria o masiva</span></h2>
                    <p className='max-w-xl'><span>Podrás conectar tu WMS a nuestra API para una integración automática o podrás imprimir las etiquetas desde nuestro administrador. </span></p>
                </div>
                <div className="pickup_services_img order-first">
                    <img src={rectangulo} alt="" />
                </div>
            </div>
            <div className="pickup_services flex items-center justify-evenly shadow-lg">
                <div className="pickup_services_content flex flex-col items-start justify-center gap-10">
                    <h2>Podras cotizar en linea <br /> <span>los precios del courier</span></h2>
                    <p className='max-w-xl'><span>Ahorra hasta un 30% en logística de transporte en cualquier tipo de envío gracias a nuestras tarifas.</span></p>
                </div>
                <div className="pickup_services_img">
                    <img src={rectangulo} alt="" />
                </div>
            </div>
            <div className="pickup_services flex items-center justify-evenly shadow-lg">
                <div className="pickup_services_content flex flex-col items-start justify-center gap-10">
                    <h2>Optimiza tu rendimiento <br /> <span>operacional</span></h2>
                    <p className='max-w-4xl'>Ahorra tiempo en logística y mejora la experiencia con las integraciones nativas de los transportistas. <span>Podrás ahorrar hasta un 60% de tiempo.</span> </p>
                </div>
                <div className="pickup_services_img order-first">
                    <img src={rectangulo} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Creador_etiquetas