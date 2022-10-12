import React from 'react'
import tiendas from '../../ilustraciones/tiendas/tiendas.png'
import tiendas1 from '../../ilustraciones/tiendas/tiendas1.png'
import tiendas2 from '../../ilustraciones/tiendas/tiendas2.png'
import aumentar_tiendas from '../../ilustraciones/tiendas/aumentar_tiendas.svg'
import sistema_tiendas from '../../ilustraciones/tiendas/sistema_tiendas.svg'
import clientes_tiendas from '../../ilustraciones/tiendas/clientes_tiendas.svg'
import app_tiendas from '../../ilustraciones/tiendas/app_tiendas.svg'

const MoreTienda = () => {
  return (
    <>
    <div className="more_title flex flex-col items-center justify-center">
        <h1 className='font-bold'>Si eres una Tienda Física</h1>
        <p className='text-center'>Con Pinflag vas a poder conectarla al mundo online. Los clientes comprarán online y retirarán en tus tiendas</p>
    </div>
    <div className=".customer_benefits flex flex-col items-center justify-center">
        <div className="customer_benefits_title">
            <h2>Conoce tus beneficios</h2>
        </div>
        <div className="customer_benefits_card flex items-center justify-center">
            <span className='icon_align'><img src={aumentar_tiendas} alt="" /></span>
            <p className='text-center'>Aumentarás tus ingresos, generandolos por cada transacción completada y procesada en tu tienda</p>
        </div>
        <div className="customer_benefits_card flex items-center justify-center">
            <span className='icon_align'><img src={sistema_tiendas} alt="" /></span>
            <p className='text-center'>Contarás con un sistema único de almacenamiento y entrega de productos.</p>
        </div>
        <div className="customer_benefits_card flex items-center justify-center">
            <span className='icon_align'><img src={clientes_tiendas} alt="" /></span>
            <p className='text-center'>Aumenta el flujo de consumidores que visitan tu tienda y aumenta las posibilidades de realizar Cross-Selling.</p>
        </div>
        <div className="customer_benefits_card flex items-center justify-center">
            <span className='icon_align'><img src={app_tiendas} alt="" /></span>
            <p className='text-center'>Con nuestra aplicación podrás tener toda la información en tus bodegas</p>
        </div>
    </div>
    <div className="stores_container flex flex-col">
        <div className="start_customers_title">
            <h2 className='my-32 text-center'>¿Cómo comenzar?</h2>
        </div>
        <div className="start_stores flex flex-wrap w-full items-center justify-evenly">
            <img src={tiendas} alt="" />
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan</p>
        </div>
        <div className="start_stores flex flex-wrap w-full items-center justify-evenly">
            <img src={tiendas1} alt="" />
            <p className='order-first text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan</p>
        </div>
        <div className="start_stores flex flex-wrap w-full items-center justify-evenly">
            <img src={tiendas2} alt="" />
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan</p>
        </div>
        
    </div>

</>
  )
}

export default MoreTienda