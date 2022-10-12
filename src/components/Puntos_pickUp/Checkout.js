import React from 'react'
import rectangulo from '../../ilustraciones/rectangulo.png'
import hero from '../../ilustraciones/servicios/etiquetasHero.png'
import facilitar_compradores from '../../ilustraciones/servicios/facilitar_compradores.png'
import login from '../../ilustraciones/servicios/login.png'

const Checkout = () => {
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
                <h2>Cumple las expectativas de tus clientes con más opciones de envío</h2>
            </div>
            <div className="bubbles_container flex items-center mx-auto justify-between">
                <div className="bubble flex items-center flex-col justify-center">
                    <h2>+90%</h2>
                    <p id='bubble_p1_checkout'>En tasa de aperturade e-mails de seguimiento</p>
                </div>
                <div className="bubble flex items-center flex-col justify-center">
                    <h2>+60%</h2>
                    <p id='bubble_p2_checkout'>De disminución de llamadas o contacto por servicio de atención a clientes.</p>
                </div>
            </div>
        </div>

        <div className="pickup_services_container">
            <div className="pickup_services flex items-center justify-evenly shadow-lg">
                <div className="pickup_services_content flex flex-col items-start justify-center gap-10">
                    <h2>Facilitales la vida <br /> <span>a tus compradores</span></h2>
                    <p className='max-w-xl'>Aumenta tus ingresos y no pierdas ventas por la fricción de tu check-out. Con una carga más rápida, con menos clicks y redirecciones, <span>nuestro sistema es un 30% más eficiente y convierte un</span></p>
                </div>
                <div className="pickup_services_img">
                    <img src={facilitar_compradores} alt="" />
                </div>
            </div>
            <div className="pickup_services flex items-center justify-evenly shadow-lg">
                <div className="pickup_services_content flex flex-col items-start justify-center gap-10">
                    <h2>Evita rellenar tus datos <br /> <span>una y otra vez</span></h2>
                    <p className='max-w-xl'>Ya no es necesario rellenar tus datos una y otra vez. Ahora, cualquier sitio asociado a Pinflag, dará la opción de comprar más rápidamente en una próxima compra gracias a un check-out más simplificado. <span>Gracias a esto, el 60% de los consumidores suelen comprar tres veces más.</span></p>
                </div>
                <div className="pickup_services_img order-first">
                    <img src={login} alt="" />
                </div>
            </div>
            <div className="pickup_services flex items-center justify-evenly shadow-lg">
                <div className="pickup_services_content flex flex-col items-start justify-center gap-10">
                    <h2>Que tus clientes elijan <br /> <span>la modalidad del envio</span></h2>
                    <p className='max-w-xl'><span>Los clientes podrán escoger el método de envío, la tarifa y velocidad de despacho. Con nuestro tarificador en línea podrás regular tus precios </span></p>
                </div>
                <div className="pickup_services_img">
                    <img src={rectangulo} alt="" />
                </div>
            </div>
            <div className="pickup_services flex items-center justify-evenly shadow-lg">
                <div className="pickup_services_content flex flex-col items-start justify-center gap-10">
                    <h2>Tu check-out con <br /> <span>tus gustos y colores</span></h2>
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

export default Checkout