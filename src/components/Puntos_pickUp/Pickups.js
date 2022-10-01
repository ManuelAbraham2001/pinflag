import React from 'react'
import servicios from '../../ilustraciones/servicios.svg'
import pickups1 from '../../ilustraciones/pickups1.svg'
import pickups2 from '../../ilustraciones/pickups2.svg'
import pickups3 from '../../ilustraciones/pickups3.svg'
import pickups4 from '../../ilustraciones/pickups4.svg'
import pickups6 from '../../ilustraciones/pickups6.svg'
import camion from '../../ilustraciones/paso3.svg'

const Pickups = () => {
  return (
    <>
        <div className="services_container flex items-center justify-evenly">
            <div className="services_title flex flex-col items-start justify-center gap-12">
                <h1>Todo integrado <span>en un solo lugar</span></h1>
                <p>Pinflag es una plataforma “headless” de e-commerce que potencia un check-out optimizado, direcciones, puntos pick-up, omnicanalidad, trazabilidad e infraestructura multicourier.</p>
            </div>
            <div className="services_img">
                <img src={servicios} alt="" />
            </div>
        </div>

        <div className="pickup_points_container">
            <div className="pickup_points_header flex items-center justify-center">
                <h2>Cumple las expectativas de tus clientes con más opciones de envío</h2>
            </div>
            <div className="bubbles_container flex items-center mx-auto justify-between">
                <div className="bubble flex items-center flex-col justify-center">
                    <h2>+21%</h2>
                    <p>De ventas gracias a más ofertas de envío</p>
                </div>
                <div className="bubble flex items-center flex-col justify-center">
                    <h2>+43%</h2>
                    <p>De los consumidores prefieren usar Click and Collect</p>
                </div>
            </div>
        </div>

        <div className="pickup_services_container">
            <div className="pickup_services flex items-center justify-evenly shadow-lg">
                <div className="pickup_services_content flex flex-col items-start justify-center gap-10">
                    <h2>Ofrece más de <br /> <span>2.000 puntos de retiro</span></h2>
                    <p className='max-w-xl'>A los clientes les encanta, y a nosotros también. <span>El 23% de los consumidores compra con esta</span> opciones de despacho a tus clientes.</p>
                </div>
                <div className="pickup_services_img">
                    <img src={pickups1} alt="" />
                </div>
            </div>
            <div className="pickup_services flex items-center justify-evenly shadow-lg">
                <div className="pickup_services_content flex flex-col items-start justify-center gap-10">
                    <h2>Disminuye tus <br /> <span>costos logísiticos</span></h2>
                    <p className='max-w-xl'><span>Obtén un 40% de descuento en la tarifa de envío cuando es a punto pick-up.</span></p>
                </div>
                <div className="pickup_services_img order-first">
                    <img src={pickups2} alt="" />
                </div>
            </div>
            <div className="pickup_services flex items-center justify-evenly shadow-lg">
                <div className="pickup_services_content flex flex-col items-start justify-center gap-10">
                    <h2>Tus consumidores <br /> <span>lo agradecerán</span></h2>
                    <p className='max-w-xl'><span>Hasta un 20% más de ventas por tener más opciones de envío.</span></p>
                </div>
                <div className="pickup_services_img">
                    <img src={pickups3} alt="" />
                </div>
            </div>
            <div className="pickup_services flex items-center justify-evenly shadow-lg">
                <div className="pickup_services_content flex flex-col items-start justify-center gap-10">
                    <h2>Disminuye la huella <span>de carbono</span></h2>
                    <p className='max-w-4xl'>Al enviar pedidos a puntos pick-up, estos son centralizados, por lo que los transportistas pueden entregar más pedidos en menos rutas, <span>disminuyendo los camiones en tránsito y la</span> </p>
                </div>
                <div className="pickup_services_img order-first">
                    <img src={pickups4} alt="" />
                </div>
            </div>
            <div className="pickup_services flex items-center justify-evenly shadow-lg">
                <div className="pickup_services_content flex flex-col items-start justify-center gap-10">
                    <h2>Elige al transportista <br /> <span>que tu prefieras</span></h2>
                    <p className='max-w-2xl'>Elige con que transportista quieres despachar tus pedidos. Puedes elegir por servicio, o tarifa. <span>Todo en un solo lugar.</span></p>
                </div>
                <div className="pickup_services_img">
                    <img className='camion' src={camion} alt="" />
                    <img src={pickups6} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Pickups