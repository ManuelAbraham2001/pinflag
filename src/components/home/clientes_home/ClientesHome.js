import React, { useState } from 'react'
import benefitsImg from '../../../ilustraciones/home/beneficios.svg'
import profilePicture from '../../../ilustraciones/home/profile_picture.svg'
import stars from '../../../ilustraciones/home/stars.svg'
import user from '../../../ilustraciones/home/user.svg'
import separator from '../../../ilustraciones/home/separator-line.svg'
import estadisticaSvg from '../../../ilustraciones/home/estadistica.svg'
import planetaSvg from '../../../ilustraciones/home/planeta.svg'
import alcanciaSvg from '../../../ilustraciones/home/alcancia.svg'


const ClientesHome = () => {

    const clientes = [3,8,0,0,0]
    const [statusCard, setStatusCard] = useState(true)
    

    let test = (e) => {
        statusCard ? setStatusCard(false) : setStatusCard(true)
    }

  return (
    <>  
    <div className='orders_usuarios flex items-center text-center'>
        <div className="orders_title_container flex flex-col items-center justify-center gap-4 mx-auto">
            <div className='orders_title flex items-center justify-center gap-4'>
                <h2>¡Hoy contamos con más de </h2>
                <div className="numbers_container flex items-center justify-center">
                    <div className="number_counter flex items-center justify-center shadow_inner">
                        <span>{clientes[0]}</span>
                    </div>
                    <div className="number_counter flex items-center justify-center shadow_inner">
                        <span>{clientes[1]}</span>
                    </div>
                    <div className="number_counter flex items-center justify-center shadow_inner">
                        <span>{clientes[2]}</span>
                    </div>
                    <div className="number_counter flex items-center justify-center shadow_inner">
                        <span>{clientes[3]}</span>
                    </div>
                    <div className="number_counter flex items-center justify-center shadow_inner">
                        <span>{clientes[4]}</span>
                    </div>
                </div>
                <h2> pedidos</h2>
            </div>
            <div className='orders_title numbers_container flex items-center justify-center'>
                <h2>administrados y </h2>
                <div className="numbers_container flex items-center justify-center">
                    <div className="number_counter flex items-center justify-center shadow_inner">
                        <span>{clientes[0]}</span>
                    </div>
                    <div className="number_counter flex items-center justify-center shadow_inner">
                        <span>{clientes[1]}</span>
                    </div>
                    <div className="number_counter flex items-center justify-center shadow_inner">
                        <span>{clientes[2]}</span>
                    </div>
                    <div className="number_counter flex items-center justify-center shadow_inner">
                        <span>{clientes[3]}</span>
                    </div>
                    <div className="number_counter flex items-center justify-center shadow_inner">
                        <span>{clientes[4]}</span>
                    </div>
                </div>
                <h2> usuarios!</h2>
            </div>

        </div>
    </div>
    <div className="customers flex flex-col items-center justify-center gap-20">
        <div className="customers_title">
            <h2 className='text-center'>Nuestros clientes <span>nos recomiendan</span></h2>
        </div>
        <div className="customers_benefits flex-wrap flex w-full items-center justify-center">
            <div className="customers_benefits_card flex flex-col items-center justify-center">
                <img src={benefitsImg} alt='benefits' />
                <span>40%</span>
                <p>De ahorro en el costo de envío </p>
            </div>
            <div className="customers_benefits_card flex flex-col items-center justify-center">
                <img src={estadisticaSvg} alt='benefits' />
                <span>40%</span>
                <p>De ahorro en el costo de envío </p>
            </div>
            <div className="customers_benefits_card flex flex-col items-center justify-center">
                <img src={planetaSvg} alt='benefits' />
                <span>40%</span>
                <p>De ahorro en el costo de envío </p>
            </div>
            <div className="customers_benefits_card flex flex-col items-center justify-center">
                <img src={alcanciaSvg} alt='benefits' />
                <span>40%</span>
                <p>De ahorro en el costo de envío </p>
            </div>
        </div>
        
    </div>
    <div className="opinions">
        <div className="opinions_title">
            <h2 className='text-center'>Lo que dicen de <span>nosotros</span></h2>
        </div>
        <div className="opinions_card_container flex-wrap flex items-center justify-center">
            <div onClick={test} className="opinions_card flex flex-col items-center justify-around">
                <div className="user_picture">
                    <img className={statusCard ? 'filter-none' : 'filter-gray'} src={profilePicture} alt="" />
                </div>
                <div className="user_info flex flex-col items-center justif-center">
                    <div className='user_info_content'>
                        <h3>Nombre Puesto/Cargo</h3>
                    </div>
                    <span>comment tienda</span>
                    <div className="user_stars">
                        <img className={statusCard ? 'filter-none' : 'filter-gray'} src={stars} alt="" />
                    </div>
                </div>
                <div className="comments flex flex-col items-center justify-center gap-10">
                    <div className="separator">
                        <img src={separator} alt="" />
                    </div>
                    <div className="comments_content flex items-center justify-center gap-10">
                        <div className="comments_userInfo flex flex-col items-center gap-4">
                            <img className={statusCard ? 'filter-none' : 'filter-gray'} src={user} alt="" />
                            <p>Nombre usuario</p>
                        </div>
                        <div className="comment_comprador flex flex-col gap-4 h-full justify-between">
                            <h3>comment comprador</h3>
                            <p>Envio: Tipo de envio</p>
                        </div>
                    </div>
                </div>
                <div className="comments flex flex-col items-center justify-center gap-10">
                    <div className="separator">
                        <img src={separator} alt="" />
                    </div>
                    <div className="comments_content flex items-center justify-center gap-10">
                        <div className="comments_userInfo flex flex-col items-center gap-4">
                            <img className={statusCard ? 'filter-none' : 'filter-gray'} src={user} alt="" />
                            <p>Nombre usuario</p>
                        </div>
                        <div className="comment_comprador flex flex-col gap-4 h-full justify-between">
                            <h3>comment comprador</h3>
                            <p>Envio: Tipo de envio</p>
                        </div>
                    </div>
                </div>
                <div className="comments flex flex-col items-center justify-center gap-10">
                    <div className="separator">
                        <img src={separator} alt="" />
                    </div>
                    <div className="comments_content flex items-center justify-center gap-10">
                        <div className="comments_userInfo flex flex-col items-center gap-4">
                            <img className={statusCard ? 'filter-none' : 'filter-gray'} src={user} alt="" />
                            <p>Nombre usuario</p>
                        </div>
                        <div className="comment_comprador flex flex-col gap-4 h-full justify-between">
                            <h3>comment comprador</h3>
                            <p>Envio: Tipo de envio</p>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={test} className="opinions_card flex flex-col items-center justify-around">
                <div className="user_picture">
                    <img className={statusCard ? 'filter-none' : 'filter-gray'} src={profilePicture} alt="" />
                </div>
                <div className="user_info flex flex-col items-center justif-center">
                    <div className='user_info_content'>
                        <h3>Nombre Puesto/Cargo</h3>
                    </div>
                    <span>comment tienda</span>
                    <div className="user_stars">
                        <img className={statusCard ? 'filter-none' : 'filter-gray'} src={stars} alt="" />
                    </div>
                </div>
                <div className="comments flex flex-col items-center justify-center gap-10">
                    <div className="separator">
                        <img src={separator} alt="" />
                    </div>
                    <div className="comments_content flex items-center justify-center gap-10">
                        <div className="comments_userInfo flex flex-col items-center gap-4">
                            <img className={statusCard ? 'filter-none' : 'filter-gray'} src={user} alt="" />
                            <p>Nombre usuario</p>
                        </div>
                        <div className="comment_comprador flex flex-col gap-4 h-full justify-between">
                            <h3>comment comprador</h3>
                            <p>Envio: Tipo de envio</p>
                        </div>
                    </div>
                </div>
                <div className="comments flex flex-col items-center justify-center gap-10">
                    <div className="separator">
                        <img src={separator} alt="" />
                    </div>
                    <div className="comments_content flex items-center justify-center gap-10">
                        <div className="comments_userInfo flex flex-col items-center gap-4">
                            <img className={statusCard ? 'filter-none' : 'filter-gray'} src={user} alt="" />
                            <p>Nombre usuario</p>
                        </div>
                        <div className="comment_comprador flex flex-col gap-4 h-full justify-between">
                            <h3>comment comprador</h3>
                            <p>Envio: Tipo de envio</p>
                        </div>
                    </div>
                </div>
                <div className="comments flex flex-col items-center justify-center gap-10">
                    <div className="separator">
                        <img src={separator} alt="" />
                    </div>
                    <div className="comments_content flex items-center justify-center gap-10">
                        <div className="comments_userInfo flex flex-col items-center gap-4">
                            <img className={statusCard ? 'filter-none' : 'filter-gray'} src={user} alt="" />
                            <p>Nombre usuario</p>
                        </div>
                        <div className="comment_comprador flex flex-col gap-4 h-full justify-between">
                            <h3>comment comprador</h3>
                            <p>Envio: Tipo de envio</p>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={test} className="opinions_card flex flex-col items-center justify-around">
                <div className="user_picture">
                    <img className={statusCard ? 'filter-none' : 'filter-gray'} src={profilePicture} alt="" />
                </div>
                <div className="user_info flex flex-col items-center justif-center">
                    <div className='user_info_content'>
                        <h3>Nombre Puesto/Cargo</h3>
                    </div>
                    <span>comment tienda</span>
                    <div className="user_stars">
                        <img className={statusCard ? 'filter-none' : 'filter-gray'} src={stars} alt="" />
                    </div>
                </div>
                <div className="comments flex flex-col items-center justify-center gap-10">
                    <div className="separator">
                        <img src={separator} alt="" />
                    </div>
                    <div className="comments_content flex items-center justify-center gap-10">
                        <div className="comments_userInfo flex flex-col items-center gap-4">
                            <img className={statusCard ? 'filter-none' : 'filter-gray'} src={user} alt="" />
                            <p>Nombre usuario</p>
                        </div>
                        <div className="comment_comprador flex flex-col gap-4 h-full justify-between">
                            <h3>comment comprador</h3>
                            <p>Envio: Tipo de envio</p>
                        </div>
                    </div>
                </div>
                <div className="comments flex flex-col items-center justify-center gap-10">
                    <div className="separator">
                        <img src={separator} alt="" />
                    </div>
                    <div className="comments_content flex items-center justify-center gap-10">
                        <div className="comments_userInfo flex flex-col items-center gap-4">
                            <img className={statusCard ? 'filter-none' : 'filter-gray'} src={user} alt="" />
                            <p>Nombre usuario</p>
                        </div>
                        <div className="comment_comprador flex flex-col gap-4 h-full justify-between">
                            <h3>comment comprador</h3>
                            <p>Envio: Tipo de envio</p>
                        </div>
                    </div>
                </div>
                <div className="comments flex flex-col items-center justify-center gap-10">
                    <div className="separator">
                        <img src={separator} alt="" />
                    </div>
                    <div className="comments_content flex items-center justify-center gap-10">
                        <div className="comments_userInfo flex flex-col items-center gap-4">
                            <img className={statusCard ? 'filter-none' : 'filter-gray'} src={user} alt="" />
                            <p>Nombre usuario</p>
                        </div>
                        <div className="comment_comprador flex flex-col gap-4 h-full justify-between">
                            <h3>comment comprador</h3>
                            <p>Envio: Tipo de envio</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default ClientesHome