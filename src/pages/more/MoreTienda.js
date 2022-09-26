import React from 'react'
import tiendas from '../../ilustraciones/tiendas.png'

const MoreTienda = () => {
  return (
    <>
    <div className="more_title flex flex-col items-center justify-center">
        <h1 className='font-bold'>Si eres una Tienda Física</h1>
        <p className='text-center'>Con Pinflag vas a poder conectarla al mundo online. Los clientes comprarán online y retirarán en tus tiendas</p>
    </div>
    <div className="beneficios_clientes flex flex-col items-center justify-center">
        <div className="beneficios_clientes_titulo">
            <h2>Conoce tus beneficios</h2>
        </div>
        <div className="beneficios_clientes_card flex items-center justify-center">
            <span className='icon_test'></span>
            <p className='text-center'>Aumentarás tus ingresos, generandolos por cada transacción completada y procesada en tu tienda</p>
        </div>
        <div className="beneficios_clientes_card flex items-center justify-center">
            <span className='icon_test'></span>
            <p className='text-center'>Contarás con un sistema único de almacenamiento y entrega de productos.</p>
        </div>
        <div className="beneficios_clientes_card flex items-center justify-center">
            <span className='icon_test'></span>
            <p className='text-center'>Aumenta el flujo de consumidores que visitan tu tienda y aumenta las posibilidades de realizar Cross-Selling.</p>
        </div>
        <div className="beneficios_clientes_card flex items-center justify-center">
            <span className='icon_test'></span>
            <p className='text-center'>Con nuestra aplicación podrás tener toda la información en tus bodegas</p>
        </div>
    </div>
    <div className="tiendas_container flex flex-col">
        <div className="comenzar_cliente_titulo">
            <h2 className='my-32 text-center'>¿Cómo comenzar?</h2>
        </div>
        <div className="comenzar_tienda flex w-full items-center justify-evenly">
            <img src={tiendas} alt="" />
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan</p>
        </div>
        <div className="comenzar_tienda flex w-full items-center justify-evenly">
            <img src={tiendas} alt="" />
            <p className='order-first text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan</p>
        </div>
        <div className="comenzar_tienda flex w-full items-center justify-evenly">
            <img src={tiendas} alt="" />
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan</p>
        </div>
        
    </div>

</>
  )
}

export default MoreTienda