import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../ilustraciones/logo.svg"

const Header = () => {


    const [menuArrow, setArrowMenu] = useState(<></>)
    const [arrowMenuStatus, isArrowMenu] = useState(false)
    // window.addEventListener('click', e => {
    //     if(e.target.id !== 'arrow-menu'){
    //         setArrowMenu(<></>)
    //         isArrowMenu(false)
    //     }
    // })

    const arrowMenu = () => {
        if(arrowMenuStatus === false){
            setArrowMenu(
            <> 
            <ul className='arrow_menu flex flex-col items-center justify-around shadow-xl'>
                <Link to={'/mas/clientes'} className='font-bold w-full'>
                    <li className='font-bold w-full text-center'>Clientes</li>
                </Link>
                <Link to={'/mas/tiendas'} className='font-bold w-full'>
                    <li className='font-bold w-full text-center'>Tiendas</li>
                </Link>
                <Link to={'/mas/nosotros'} className='font-bold w-full'>
                    <li className='font-bold w-full text-center'>Nosotros</li>
                </Link>
            </ul>
            </>
            )
            isArrowMenu(true)
        }else if(arrowMenuStatus === true){
            setArrowMenu(<></>)
            isArrowMenu(false)
        }

    }


  return (
    <div className='header flex justify-between items-center w-full shadow-md'>
        <div className="header_content flex justify-between items-center w-2/4">
            <div className="header_logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="header_nav">
            <ul className='header_nav_ul flex'>
                <li className='mx-6 font-bold'>
                    <Link to={'/'} className='font-bold'>Inicio</Link>
                </li>
                <li className='mx-6 font-bold'>
                    <Link to={'/servicios'} className='font-bold'>Servicios</Link>
                </li>
                <li className='mx-6 font-bold'>
                    <Link to={'/planes'} className='font-bold'>Planes</Link>
                </li>
                <li className='mx-6 font-bold'>
                    <Link to={'/partners'} className='font-bold'>Partners</Link>
                </li>
                <li className='mx-6 font-bold'>
                    <Link to={'/blog'} className='font-bold'>Blog</Link>
                </li>
                <li id='arrow-menu' onClick={() => arrowMenu()} className='mx-6 font-bold hover:cursor-pointer flex flex-col items-center justify-center'>
                    Más
                    {menuArrow}
                </li>
            </ul>
            </div>
        </div>
        <div className="header_btn">
            <a href="#">Empezar Gratis</a>
        </div>
    </div>
  )
}



export default Header