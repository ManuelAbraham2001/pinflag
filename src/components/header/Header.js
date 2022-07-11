import React, { useState } from 'react'

const Header = () => {

    const [category, setCategory] = useState('')

  return (
    <header>
        <nav className="navBar flex items-center justify-between">
            <div className="navBar__content flex items-center justify-start">
                <div className="logo">
                    <img src="https://pinflag.cl/wp-content/uploads/2021/06/logo_blog-13-1.png" alt="Pinflag logo" />
                </div>
                <div className="nav__content__ul flex">
                    <div className="nav__content_li">
                        <button autoFocus onBlur={({ target }) => target.focus()} onClick={e => setCategory(e.target.textContent.toLocaleLowerCase())} className='font-bold'>Inicio</button>
                    </div>
                    <div className="nav__content_li flex">
                        <button onClick={e => setCategory(e.target.textContent.toLocaleLowerCase())} className='font-bold'>Servicios</button>
                    </div>
                    <div className="nav__content_li flex">
                        <button onClick={e => setCategory(e.target.textContent.toLocaleLowerCase())} className='font-bold'>Planes</button>
                    </div>
                    <div className="nav__content_li flex">
                        <button onClick={e => setCategory(e.target.textContent.toLocaleLowerCase())} className='font-bold'>Partners</button>
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

        <main>
            {category == 'inicio' ? <h1>inicio</h1> : ''}
            {category == 'planes' ? <h1>Planes</h1> : ''}
            {category == 'partners' ? <h1>Partners</h1> : ''}
        </main>
    </header>
  )
}

export default Header
