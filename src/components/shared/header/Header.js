import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../ilustraciones/logo.svg"
import arrow_down from '../../../ilustraciones/arrow_down.png'
import bars from '../../../ilustraciones/bars.png'
import close from '../../../ilustraciones/close.png'

const Header = () => {

    const [menuArrow, setArrowMenu] = useState(<></>)
    const [arrowMenuStatus, isArrowMenu] = useState(false)
    const [arrowDown, isArrowDown] = useState(false)
    const [menuMobile, setMenuMobile] = useState(<></>)
    const [mobileMenuStatus, isMobileMenu] = useState(false)
    const [tabActive, setTabActive] = useState('inicio')

    useEffect(() => {
        setTabActive('inicio')
    }, [])

    const stickyNav = () => {
        const nav = document.getElementById("navBar")
        if (window.scrollY > 150) {
            nav.classList.add("sticky-header")
          } else {
            nav.classList.remove("sticky-header");
        }
    }

    useEffect(() => {
        window.onscroll = function() {stickyNav()}
    }, [])
    
    
    


    const arrowMenu = () => {
        if(arrowDown === true){
            isArrowDown(false)
        }else{
            isArrowDown(true)
        }

        setTabActive('mas')
        
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

    const mobileMenu = () => {
        if(mobileMenuStatus === false){
            setMenuMobile(
            <> 
            <div className='mobile_menu shadow-xl flex flex-col items-end justify-center'>
            <div className="flex justify-between items-center w-full">
                <img className='logoImg' src={logo} alt="logo" />
                <img className='closeImg' src={close} alt="" />
            </div>
            
                <ul>
                    <li className='font-bold my-4'>
                        <Link to={'/'}>Inicio</Link>
                    </li>
                    <li className='font-bold my-4'>
                        <Link to={'/servicios'}>Servicios</Link>
                    </li>
                    <li className='font-bold my-4'>
                        <Link to={'/planes'}>Planes</Link>
                    </li>
                    <li className='font-bold my-4'>
                        <Link to={'/partners'}>Partners</Link>
                    </li>
                    <li className='font-bold my-4'>
                        <Link to={'/blog'}>Blog</Link>
                    </li>
                    <li className='font-bold my-4'>
                        <Link to={'/mas/clientes'}>Clientes</Link>
                    </li>
                    <li className='font-bold my-4'>
                        <Link to={'/mas/tiendas'}>Tiendas</Link>
                    </li>
                    <li className='font-bold my-4'>
                        <Link to={'/mas/nosotros'}>Nosotros</Link>
                    </li>
                </ul>
            </div>
            </>
            )
            isMobileMenu(true)
        }else if(mobileMenuStatus === true){
            setMenuMobile(<></>)
            isMobileMenu(false)
        }
    }


  return (
    <div onScroll={() => stickyNav()} id='navBar' className='header flex justify-between items-center w-full shadow-md'>
        <div className="header_content flex justify-between items-center w-2/4">
            <div className="header_logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="header_nav">
            <ul className='header_nav_ul flex'>
                <li className='mx-6 font-bold'>
                    <Link onClick={() => setTabActive('inicio')} id='inicio' to={'/'} className={tabActive === 'inicio' ? 'tab-active' : 'tab-not-active'}>Inicio</Link>
                </li>
                <li className='mx-6 font-bold'>
                    <Link onClick={() => setTabActive('servicios')} to={'/servicios'} className={tabActive === 'servicios' ? 'tab-active' : 'tab-not-active'} >Servicios</Link>
                </li>
                <li className='mx-6 font-bold'>
                    <Link onClick={() => setTabActive('planes')} to={'/planes'} className={tabActive === 'planes' ? 'tab-active' : 'tab-not-active'} >Planes</Link>
                </li>
                <li className='mx-6 font-bold'>
                    <Link onClick={() => setTabActive('partners')} to={'/partners'} className={tabActive === 'partners' ? 'tab-active' : 'tab-not-active'} >Partners</Link>
                </li>
                <li className='mx-6 font-bold'>
                    <Link onClick={() => setTabActive('blog')} to={'/blog'} className={tabActive === 'blog' ? 'tab-active' : 'tab-not-active'} >Blog</Link>
                </li>
                <li id='arrow-menu' onClick={() => arrowMenu()} className='mx-6 font-bold hover:cursor-pointer flex items-center justify-center gap-2'>
                    <span className={tabActive === 'mas' ? 'tab-active' : 'tab-not-active'}>Más</span> 
                    <img className={arrowDown ? 'rotateArrow' : 'rotateArrowOut ' + (tabActive === 'mas' ? 'tab-active' : 'tab-not-active') } src={arrow_down} alt="" />
                    {menuArrow}
                </li>
            </ul>
            </div>
        </div>
        <div className="header_btn">
            <a href="#">Empezar Gratis</a>
        </div>
        <div onClick={() => mobileMenu()} className="bars">
            <img src={bars} alt="" />
            {menuMobile}
        </div>
    </div>
  )
}



export default Header