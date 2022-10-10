import React from 'react'
import heroImg	from '../../ilustraciones/servicios/omnicanalidad_hero.png'
import rectangulo from '../../ilustraciones/rectangulo.png'

const Omnicanalidad = () => {
  return (
    <>
        <div className="services_container flex items-center justify-evenly">
            <div className="services_title flex flex-col items-start justify-center gap-12">
                <h1>Todo integrado <span>en un solo lugar</span></h1>
                <p>Pinflag es una plataforma “headless” de e-commerce que potencia un check-out optimizado, direcciones, puntos pick-up, omnicanalidad, trazabilidad e infraestructura multicourier.</p>
            </div>
            <div className="services_img">
                <img src={heroImg} alt="" />
            </div>
        </div>

		<div className="pickup_points_container">
            <div className="pickup_points_header flex items-center justify-center">
                <h2>Integra tus tiendas con una alta calidad operacional</h2>
            </div>
            <div className="bubbles_container flex items-center mx-auto justify-between">
                <div className="bubble flex items-center flex-col justify-center">
                    <h2>+78%</h2>
                    <p>De eficiencia de entrega en tienda</p>
                </div>
                <div className="bubble flex items-center flex-col justify-center">
                    <h2>+70%</h2>
                    <p>De stock ofrecido a tus clientes para retiro en tienda</p>
                </div>
            </div>
        </div>
		<div className="pickup_services_container">
            <div className="pickup_services flex items-center justify-evenly shadow-lg">
                <div className="pickup_services_content flex flex-col items-start justify-center gap-10">
                    <h2>Ofrece tus tiendas <br /> <span>de forma mas simple</span></h2>
                    <p className='max-w-xl'>Aumenta tus ventas ofreciéndole a tus tiendas tarifas más accesibles. <span>El 24% de los consumidores compra con esta opción.</span></p>
                </div>
                <div className="pickup_services_img">
                    <img src={rectangulo} alt="" />
                </div>
            </div>
            <div className="pickup_services flex items-center justify-evenly shadow-lg">
                <div className="pickup_services_content flex flex-col items-start justify-center gap-10">
                    <h2>Elige si utilizar el stock <br /> <span>de tiendas o bodegas</span></h2>
                    <p className='max-w-xl'>Disminuye los problemas de inventario.<span>Ofrece hasta un 70% más de stock para retiro en tienda.</span></p>
                </div>
                <div className="pickup_services_img order-first">
                    <img src={rectangulo} alt="" />
                </div>
            </div>
			<div className="pickup_services flex items-center justify-evenly shadow-lg">
                <div className="pickup_services_content flex flex-col items-start justify-center gap-10">
                    <h2>Aumenta tus ventas <br /> <span>con Cross-selling</span></h2>
                    <p className='max-w-xl'>Nuestras tiendas asociadas <span>han aumentado un 30% de venta.</span></p>
                </div>
                <div className="pickup_services_img">
                    <img src={rectangulo} alt="" />
                </div>
            </div>
            <div className="pickup_services flex items-center justify-evenly shadow-lg">
                <div className="pickup_services_content flex flex-col items-start justify-center gap-10">
                    <h2>Aumenta la eficiencia <br /> <span>de tus operarios</span></h2>
                    <p className='max-w-xl'>Con nuestra app de bodegas, podrás recibir los pedidos de Click and Collect y ordenarlos para que el retiro de tu cliente sea lo más rápido posible. <span>¡Aumentamos la eficiencia de entrega en un 78%!</span></p>
                </div>
                <div className="pickup_services_img order-first">
                    <img src={rectangulo} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Omnicanalidad