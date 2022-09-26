import React, { useState } from 'react'
import beneficiosImg from '../../ilustraciones/beneficios.svg'
import profilePicture from '../../ilustraciones/profile_picture.svg'
import stars from '../../ilustraciones/stars.svg'
import user from '../../ilustraciones/user.svg'

const ClientesHome = () => {

    const clientes = [3,8,0,0,0]
    const [statusCard, setStatusCard] = useState(true)
    

    let test = (e) => {
        console.log(e);
        statusCard ? setStatusCard(false) : setStatusCard(true)
    }

  return (
    <>  
    <div className='pedidos_usuarios flex items-center text-center'>
        <h2>¡Hoy contamos con más de 
        <div className='number_counter'>
            <span>{clientes[0]}</span>
        </div> 
        <div className='number_counter'>
            <span>{clientes[1]}</span>
        </div> 
        <div className='number_counter'>
            <span>{clientes[2]}</span>
        </div> 
        <div className='number_counter'>
            <span>{clientes[3]}</span>
        </div> 
        <div className='number_counter'>
            <span>{clientes[4]}</span>
        </div> 
        
        pedidos administrados y 
        <div className='number_counter'>
            <span>{clientes[0]}</span>
        </div> 
        <div className='number_counter'>
            <span>{clientes[1]}</span>
        </div> 
        <div className='number_counter'>
            <span>{clientes[2]}</span>
        </div> 
        <div className='number_counter'>
            <span>{clientes[3]}</span>
        </div> 
        <div className='number_counter'>
            <span>{clientes[4]}</span>
        </div> 
        usuarios

        </h2>
    </div>
    <div className="clientes flex flex-col items-center justify-center gap-20">
        <div className="clientes_title">
            <h2>Nuestros clientes <span>nos recomiendan</span></h2>
        </div>
        <div className="clientes_beneficios flex w-full items-center justify-center">
            <div className="clientes_beneficios_card flex flex-col items-center justify-center">
                <img src={beneficiosImg} alt='beneficios' />
                <span>40%</span>
                <p>De ahorro en el costo de envío </p>
            </div>
            <div className="clientes_beneficios_card flex flex-col items-center justify-center">
                <img src={beneficiosImg} alt='beneficios' />
                <span>40%</span>
                <p>De ahorro en el costo de envío </p>
            </div>
            <div className="clientes_beneficios_card flex flex-col items-center justify-center">
                <img src={beneficiosImg} alt='beneficios' />
                <span>40%</span>
                <p>De ahorro en el costo de envío </p>
            </div>
            <div className="clientes_beneficios_card flex flex-col items-center justify-center">
                <img src={beneficiosImg} alt='beneficios' />
                <span>40%</span>
                <p>De ahorro en el costo de envío </p>
            </div>
        </div>
        
    </div>
    <div className="opiniones">
        <div className="opiniones_title">
            <h2 className='text-center'>Lo que dicen de <span>nosotros</span></h2>
        </div>
        <div className="opiniones_card_container flex items-center justify-center">
        <div onClick={test} className="opiniones_card flex flex-col items-center justify-around">
                <div className="user_picture">
                    <img className={statusCard ? 'filter-none' : 'filter-gray'} src={profilePicture} alt="" />
                </div>
                <div className="user_info flex flex-col items-center justif-center">
                    <div className='user_info_content'>
                        <h3>Nombre Puesto/Cargo</h3>
                    </div>
                    <span>Comentario tienda</span>
                    <div className="user_stars">
                        <img className={statusCard ? 'filter-none' : 'filter-gray'} src={stars} alt="" />
                    </div>
                </div>
                <div className="comentarios flex items-center justify-center gap-10">
                    <div className="comentarios_content flex flex-col items-center gap-4">
                        <img className={statusCard ? 'filter-none' : 'filter-gray'} src={user} alt="" />
                        <p>Nombre usuario</p>
                    </div>

                    <div className="comentario_comprador flex flex-col gap-10">
                        <h3>Comentario comprador</h3>
                        <p>Envio: Tipo de envio</p>
                    </div>
                </div>
                <div className="comentarios flex items-center justify-center gap-10">
                    <div className="comentarios_content flex flex-col items-center gap-4">
                        <img className={statusCard ? 'filter-none' : 'filter-gray'} src={user} alt="" />
                        <p>Nombre usuario</p>
                    </div>

                    <div className="comentario_comprador flex flex-col gap-10">
                        <h3>Comentario comprador</h3>
                        <p>Envio: Tipo de envio</p>
                    </div>
                </div>
                <div className="comentarios flex items-center justify-center gap-10">
                    <div className="comentarios_content flex flex-col items-center gap-4">
                        <img className={statusCard ? 'filter-none' : 'filter-gray'} src={user} alt="" />
                        <p>Nombre usuario</p>
                    </div>

                    <div className="comentario_comprador flex flex-col gap-10">
                        <h3>Comentario comprador</h3>
                        <p>Envio: Tipo de envio</p>
                    </div>
                </div>
            </div>
            <div onClick={test} className="opiniones_card flex flex-col items-center justify-around">
                <div className="user_picture">
                    <img className={statusCard ? 'filter-none' : 'filter-gray'} src={profilePicture} alt="" />
                </div>
                <div className="user_info flex flex-col items-center justif-center">
                    <div className='user_info_content'>
                        <h3>Nombre Puesto/Cargo</h3>
                    </div>
                    <span>Comentario tienda</span>
                    <div className="user_stars">
                        <img className={statusCard ? 'filter-none' : 'filter-gray'} src={stars} alt="" />
                    </div>
                </div>
                <div className="comentarios flex items-center justify-center gap-10">
                    <div className="comentarios_content flex flex-col items-center gap-4">
                        <img className={statusCard ? 'filter-none' : 'filter-gray'} src={user} alt="" />
                        <p>Nombre usuario</p>
                    </div>

                    <div className="comentario_comprador flex flex-col gap-10">
                        <h3>Comentario comprador</h3>
                        <p>Envio: Tipo de envio</p>
                    </div>
                </div>
                <div className="comentarios flex items-center justify-center gap-10">
                    <div className="comentarios_content flex flex-col items-center gap-4">
                        <img className={statusCard ? 'filter-none' : 'filter-gray'} src={user} alt="" />
                        <p>Nombre usuario</p>
                    </div>

                    <div className="comentario_comprador flex flex-col gap-10">
                        <h3>Comentario comprador</h3>
                        <p>Envio: Tipo de envio</p>
                    </div>
                </div>
                <div className="comentarios flex items-center justify-center gap-10">
                    <div className="comentarios_content flex flex-col items-center gap-4">
                        <img className={statusCard ? 'filter-none' : 'filter-gray'} src={user} alt="" />
                        <p>Nombre usuario</p>
                    </div>

                    <div className="comentario_comprador flex flex-col gap-10">
                        <h3>Comentario comprador</h3>
                        <p>Envio: Tipo de envio</p>
                    </div>
                </div>
            </div>
            <div onClick={test} className="opiniones_card flex flex-col items-center justify-around">
                <div className="user_picture">
                    <img className={statusCard ? 'filter-none' : 'filter-gray'} src={profilePicture} alt="" />
                </div>
                <div className="user_info flex flex-col items-center justif-center">
                    <div className='user_info_content'>
                        <h3>Nombre Puesto/Cargo</h3>
                    </div>
                    <span>Comentario tienda</span>
                    <div className="user_stars">
                        <img className={statusCard ? 'filter-none' : 'filter-gray'} src={stars} alt="" />
                    </div>
                </div>
                <div className="comentarios flex items-center justify-center gap-10">
                    <div className="comentarios_content flex flex-col items-center gap-4">
                        <img className={statusCard ? 'filter-none' : 'filter-gray'} src={user} alt="" />
                        <p>Nombre usuario</p>
                    </div>

                    <div className="comentario_comprador flex flex-col gap-10">
                        <h3>Comentario comprador</h3>
                        <p>Envio: Tipo de envio</p>
                    </div>
                </div>
                <div className="comentarios flex items-center justify-center gap-10">
                    <div className="comentarios_content flex flex-col items-center gap-4">
                        <img className={statusCard ? 'filter-none' : 'filter-gray'} src={user} alt="" />
                        <p>Nombre usuario</p>
                    </div>

                    <div className="comentario_comprador flex flex-col gap-10">
                        <h3>Comentario comprador</h3>
                        <p>Envio: Tipo de envio</p>
                    </div>
                </div>
                <div className="comentarios flex items-center justify-center gap-10">
                    <div className="comentarios_content flex flex-col items-center gap-4">
                        <img className={statusCard ? 'filter-none' : 'filter-gray'} src={user} alt="" />
                        <p>Nombre usuario</p>
                    </div>

                    <div className="comentario_comprador flex flex-col gap-10">
                        <h3>Comentario comprador</h3>
                        <p>Envio: Tipo de envio</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ClientesHome