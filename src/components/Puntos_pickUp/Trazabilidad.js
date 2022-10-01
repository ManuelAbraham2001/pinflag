import React from 'react'
import rectangulo from '../../ilustraciones/rectangulo.png'
import hero from '../../ilustraciones/trazabilidad.png'

const Trazabilidad = () => {
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
                <h2>Infórmale a tu cliente sobre su pedido en todo momento</h2>
            </div>
            <div className="bubbles_container flex items-center mx-auto justify-between">
                <div className="bubble flex items-center flex-col justify-center">
                    <h2>+90%</h2>
                    <p>En tasa de aperturade e-mails de seguimiento</p>
                </div>
                <div className="bubble flex items-center flex-col justify-center">
                    <h2>+60%</h2>
                    <p>De disminución de llamadas o contacto por servicio de atención a clientes.</p>
                </div>
            </div>
        </div>

        <div className="pickup_services_container">
            <div className="pickup_services flex items-center justify-evenly shadow-lg">
                <div className="pickup_services_content flex flex-col items-start justify-center gap-10">
                    <h2>Notificaciones <br /> <span>de seguimiento</span></h2>
                    <p className='max-w-xl'>Mejora la experiencia de tus clientes con el envío automático de correos de seguimiento. <span>9 de cada 10 usuarios abren este correo.</span></p>
                </div>
                <div className="pickup_services_img">
                    <img src={rectangulo} alt="" />
                </div>
            </div>
            <div className="pickup_services flex items-center justify-evenly shadow-lg">
                <div className="pickup_services_content flex flex-col items-start justify-center gap-10">
                    <h2>Disminuye las llamadas <br /> <span>a tu servicio de atencion</span></h2>
                    <p className='max-w-xl'><span>El 60% de las llamadas a servicio al cliente son para revisar el estado del pedido. Con nuestro portal de seguimiento a tu medida podrás mitigar </span></p>
                </div>
                <div className="pickup_services_img order-first">
                    <img src={rectangulo} alt="" />
                </div>
            </div>
            <div className="pickup_services flex items-center justify-evenly shadow-lg">
                <div className="pickup_services_content flex flex-col items-start justify-center gap-10">
                    <h2>Aumenta la eficiencia <br /> <span>en tu equipo de soporte</span></h2>
                    <p className='max-w-xl'>Con nuestro portal de administración podrás<span>gestionar tus envíos, cambiar tus condiciones,</span> relevantes para tu negocio.</p>
                </div>
                <div className="pickup_services_img">
                    <img src={rectangulo} alt="" />
                </div>
            </div>
            <div className="pickup_services flex items-center justify-evenly shadow-lg">
                <div className="pickup_services_content flex flex-col items-start justify-center gap-10">
                    <h2>Tus clientes eligen como <br /> <span>recibir la informacion</span></h2>
                    <p className='max-w-4xl'>Podrán elegir si recibir las notificaciones de seguimiento por <span>WhatsApp o por correo.</span> </p>
                </div>
                <div className="pickup_services_img order-first">
                    <img src={rectangulo} alt="" />
                </div>
            </div>
            <div className="pickup_services flex items-center justify-evenly shadow-lg">
                <div className="pickup_services_content flex flex-col items-start justify-center gap-10">
                    <h2>Inteligencia artificial que <br /> <span>da mayor informacion</span></h2>
                    <p className='max-w-4xl'>Nuestro “tracking predictive” ofrece una experiencia más completa al darle una información aproximada de la fecha de entrega a tu cliente. <span>El 50% de los clientes fidelizados vuelve a comprar.</span> </p>
                </div>
                <div className="pickup_services_img">
                    <img src={rectangulo} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Trazabilidad