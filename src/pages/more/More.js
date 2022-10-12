import React, { useState } from 'react'
import logo1 from '../../ilustraciones/clientes/lippi.png'
import logo2 from '../../ilustraciones/clientes/haka.png'
import logo3 from '../../ilustraciones/clientes/geography.png'
import logo4 from '../../ilustraciones/clientes/wd40.png'
import Marcas from '../../components/marcas/Marcas'
import more1 from '../../ilustraciones/clientes/more1.png'
import playstore from '../../ilustraciones/clientes/playstore.png'
import appstore from '../../ilustraciones/clientes/appstore.png'
import mobileapp from '../../ilustraciones/clientes/mobileapp.png'
import sigue_pedidos from '../../ilustraciones/clientes/sigue_pedido.png'
import retira_pedidos from '../../ilustraciones/clientes/retira_pedido.png'
import informacion_clientes from '../../ilustraciones/clientes/informacion_clientes.svg'
import retira_clientes from '../../ilustraciones/clientes/retira_clientes.svg'
import seguridad_clientes from '../../ilustraciones/clientes/seguridad_clientes.svg'
import boleta_clientes from '../../ilustraciones/clientes/boleta_clientes.svg'

const marcas = [
    {
        id: 1,
        foto: logo1,
        texto: 'lippi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        id: 2,
        foto: logo2,
        texto: 'haka Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        id: 3,
        foto: logo3,
        texto: 'geography Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        id: 4,
        foto: logo4,
        texto: 'wd40 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
]



const Mores = () => {

    const [text, setText] = useState(marcas[0].texto)


  return (
    <>
        <div className="more_title flex flex-col items-center justify-center">
            <h1 className='font-bold'>Si eres un cliente</h1>
            <p className='text-center'>Con Pinflag tendrás tus boletas, tus productos y tus envíos en la palma de tu mano.</p>
            <p className='text-center'>Olvidate de buscar mails de tus pedidos de distintas marcas e ingresar a varios sitios de internet o incluso de llamar a números telefónicos.</p>
        </div>
        <div className="customer_benefits flex flex-col items-center justify-center">
            <div className="customer_benefits_title">
                <h2>Conoce tus beneficios</h2>
            </div>
            <div className="customer_benefits_card flex items-center justify-center">
                <span className='icon_align'><img src={informacion_clientes} alt="" /></span>
                <p className='text-center'>Información centralizada. Ten Toda la información de tus compras en tu App Pinflag</p>
            </div>
            <div className="customer_benefits_card flex items-center justify-center">
                <span className='icon_align'><img src={retira_clientes} alt="" /></span>
                <p>Retirá tus pedidos en tu casa, o en lugares cercanos.</p>
            </div>
            <div className="customer_benefits_card flex items-center justify-center">
                <span className='icon_align'><img src={seguridad_clientes} alt="" /></span>
                <p>Seguridad de que tu pedido está en camino a ser entregado.</p>
            </div>
            <div className="customer_benefits_card flex items-center justify-center">
                <span className='icon_align'><img src={boleta_clientes} alt="" /></span>
                <p>Ten tu boleta y la dirección de entrega en tu App</p>
            </div>
        </div>
        <div className="start_customers flex flex-col items-center justify-center">
            <div className="start_customers_title">
                <h2 className='my-32'>¿Cómo comenzar?</h2>
            </div>
            <div className="start_customers_container flex flex-wrap items-center justify-evenly w-full">
                <div className="start_customers_content">
                    <h2>Compra en nuestras marcas adheridas</h2>
                    <p className='my-8'>{text}</p>
                    <a href="#">VER MAS</a>
                </div>
                <div className="marcas_test grid grid-cols-2">
                    {marcas.map(e => <Marcas key={e.id} img={e.foto} texto={e.texto} click={setText}></Marcas>)}
                </div>
            </div>

            <div className="start_customers_container flex items-center justify-evenly w-full">
                <img src={more1} alt=""/>
                <div className="start_customers_content flex flex-col items-start justify-center gap-10">
                    <h2>Elige si quieres retirar en puntos Pinflag o envío a otra dirección</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href="#">CONOCER TIENDAS</a>
                </div>
            </div>
            
            <div className="start_customers_container flex items-center justify-around w-full">
                <div className="start_customers_content flex flex-col items-start justify-center gap-12">
                    <h2>Descarga la app</h2>
                    <div className="start_customers_content_img flex gap-8">
                        <img src={playstore} alt="" />
                        <img src={appstore} alt="" />
                    </div>
                </div>
                <div className="start_customers_content">
                    <img src={mobileapp} alt="" />
                </div>
            </div>

            <div className="start_customers_container flex items-center justify-evenly w-full">
                <img src={sigue_pedidos} alt=""/>
                <div className="start_customers_content flex flex-col items-start justify-center gap-10">
                    <h2>Sigue tu pedido</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href="#">SABER MAS</a>
                </div>
            </div>

            <div className="start_customers_container flex items-center justify-evenly w-full">
                <div className="start_customers_content flex flex-col items-start justify-center gap-10">
                    <h2>Retira tu pedido</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <img src={retira_pedidos} alt=""/>
            </div>

        </div>

    </>
  )
}

export default Mores