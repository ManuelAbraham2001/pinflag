import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../ilustraciones/logo.svg"

const Header = () => {
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
                <li className='mx-6 font-bold'>
                    <Link to={'/mas/clientes'} className='font-bold'>Más</Link>
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