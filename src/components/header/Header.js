import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header>
        <nav className="navBar flex items-center justify-around">
            <div className="navBar__content flex items-center justify-start">
                <div className="logo">
                    <img src="https://pinflag.cl/wp-content/uploads/2021/06/logo_blog-13-1.png" alt="Pinflag logo" />
                </div>
                <div className="nav__content__ul flex">
                    <div className="nav__content_li">
                        <button autoFocus /*  onBlur={({ target }) => target.focus() }*/ >
                        <Link to={'/'} className='font-bold'>Inicio</Link>
                        </button>
                    </div>
                    <div className="nav__content_li flex">
                       <Link to='/about' className='font-bold'>Servicios</Link>
                    </div>
                    <div className="nav__content_li flex">
                        <button className='font-bold'>Planes</button>
                    </div>
                    <div className="nav__content_li flex">
                        <button className='font-bold'>Partners</button>
                    </div>
                    <div className="nav__content_li flex">
                        <button className='font-bold'>Blog</button>
                    </div>
                    <div className="nav__content_li flex">
                        <button className='font-bold'>Más</button>
                    </div>
                </div>
            </div>
            <div className="start__free">
                <button>Empezar Gratis</button>
            </div>
        </nav>
    </header>
  )
}

export default Header
