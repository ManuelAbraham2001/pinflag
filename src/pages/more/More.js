import React, { useState } from 'react'
import logo1 from '../../ilustraciones/lippi.png'
import logo2 from '../../ilustraciones/haka.png'
import logo3 from '../../ilustraciones/geography.png'
import logo4 from '../../ilustraciones/wd40.png'
import Marcas from '../../components/marcas/Marcas'
import more1 from '../../ilustraciones/more1.png'
import playstore from '../../ilustraciones/playstore.png'
import appstore from '../../ilustraciones/appstore.png'
import mobileapp from '../../ilustraciones/mobileapp.png'

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

    console.log(text);

  return (
    <>
        <div className="more_title flex flex-col items-center justify-center">
            <h1 className='font-bold'>Si eres un cliente</h1>
            <p className='text-center'>Con Pinflag tendrás tus boletas, tus productos y tus envíos en la palma de tu mano.</p>
            <p className='text-center'>Olvidate de buscar mails de tus pedidos de distintas marcas e ingresar a varios sitios de internet o incluso de llamar a números telefónicos.</p>
        </div>
        <div className="beneficios_clientes flex flex-col items-center justify-center">
            <div className="beneficios_clientes_titulo">
                <h2>Conoce tus beneficios</h2>
            </div>
            <div className="beneficios_clientes_card flex items-center justify-center">
                <span className='icon_test'></span>
                <p className='text-center'>Información centralizada. Ten Toda la información de tus compras en tu App Pinflag</p>
            </div>
            <div className="beneficios_clientes_card flex items-center justify-center">
                <span className='icon_test'></span>
                <p>Retirá tus pedidos en tu casa, o en lugares cercanos.</p>
            </div>
            <div className="beneficios_clientes_card flex items-center justify-center">
                <span className='icon_test'></span>
                <p>Seguridad de que tu pedido está en camino a ser entregado.</p>
            </div>
            <div className="beneficios_clientes_card flex items-center justify-center">
                <span className='icon_test'></span>
                <p>Ten tu boleta y la dirección de entrega en tu App</p>
            </div>
        </div>
        <div className="comenzar_cliente flex flex-col items-center justify-center">
            <div className="comenzar_cliente_titulo">
                <h2 className='my-32'>¿Cómo comenzar?</h2>
            </div>
            <div className="comenzar_cliente_container flex items-center justify-evenly w-full">
                <div className="comenzar_cliente_content">
                    <h2>Compra en nuestras marcas adheridas</h2>
                    <p className='my-8'>{text}</p>
                    <a href="#">VER MAS</a>
                </div>
                <div className="marcas_test grid grid-cols-2">
                    {marcas.map(e => <Marcas key={e.id} img={e.foto} texto={e.texto} click={setText}></Marcas>)}
                </div>
            </div>

            <div className="comenzar_cliente_container flex items-center justify-evenly w-full">
                <img src={more1} alt=""/>
                <div className="comenzar_cliente_content flex flex-col items-start justify-center gap-10">
                    <h2>Elige si quieres retirar en puntos Pinflag o envío a otra dirección</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href="#">CONOCER TIENDAS</a>
                </div>
            </div>
            
            <div className="comenzar_cliente_container flex items-center justify-around w-full">
                <div className="comenzar_cliente_content flex flex-col items-start justify-center gap-12">
                    <h2>Descarga la app</h2>
                    <div className="comenzar_cliente_content_img flex gap-8">
                        <img src={playstore} alt="" />
                        <img src={appstore} alt="" />
                    </div>
                </div>
                <div className="comenzar_cliente_content">
                    <img src={mobileapp} alt="" />
                </div>
            </div>

            <div className="comenzar_cliente_container flex items-center justify-evenly w-full">
                <img src={mobileapp} alt=""/>
                <div className="comenzar_cliente_content flex flex-col items-start justify-center gap-10">
                    <h2>Sigue tu pedido</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href="#">SABER MAS</a>
                </div>
            </div>

            <div className="comenzar_cliente_container flex items-center justify-evenly w-full">
                <div className="comenzar_cliente_content flex flex-col items-start justify-center gap-10">
                    <h2>Retira tu pedido</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <img src={mobileapp} alt=""/>
            </div>

        </div>

    </>
  )
}

export default Mores