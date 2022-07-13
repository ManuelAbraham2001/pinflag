import React, { useState } from 'react'

const Servicios = () => {

    const [servicio, setServicio] = useState('servicio1')

    let changeService = (e) => {
        setServicio(e.target.value)
    }

  return (
    <section className='servicios'>
        <div className="servicios__container flex items-center justify-around flex-col">
            <div className="servicios__nav flex items-center justify-around w-full">
                <div className="servicios__nav__item flex items-center justify-center">
                    <button value='servicio1' onClick={changeService}></button>
                    <span className='font-bold'>Lorem ipsum dolor</span>
                </div>
                <div className="servicios__nav__item flex items-center justify-center">
                    <button value='servicio2' onClick={changeService}></button>
                    <span className='font-bold'>Lorem ipsum dolor</span>
                </div>
                <div className="servicios__nav__item flex items-center justify-center">
                    <button value='servicio3' onClick={changeService}></button>
                    <span className='font-bold'>Lorem ipsum dolor</span>
                </div>
            </div>

            {servicio == 'servicio1' ? 
            <div className="servicios__info w-full flex items-center justify-center">
                <div className='servicios__info__img'>
                    <img src="https://pinflag.cl/wp-content/uploads/2021/06/logo_blog-13-1.png" alt="Pinflag logo" />
                </div>
                <div className="servicios__info__title">
                    <h2 className='font-bold'>Lorem ipsum dolor sit amet, consectetur</h2>
                    <p>Nunc vulputate libero et velit interdum, ac aliquet odio mattis</p>
                    <a href="#">Lorem ipsum</a>
                </div>
            </div> : <></>}
            {servicio == 'servicio2' ? 
            <div className="servicios__info w-full flex items-center justify-center">
                <div className='servicios__info__img'>
                    <img src="https://pinflag.cl/wp-content/uploads/2021/06/logo_blog-13-1.png" alt="Pinflag logo" />
                </div>
                <div className="servicios__info__title">
                    <h2 className='font-bold'>Lorem ipsum dolor sit amet, consectetur</h2>
                    <p>Nunc vulputate libero et velit interdum, ac aliquet odio mattis</p>
                    <a href="#">Lorem ipsum 2</a>
                </div>
            </div> : <></>}
            {servicio == 'servicio3' ? 
            <div className="servicios__info w-full flex items-center justify-center">
                <div className='servicios__info__img'>
                    <img src="https://pinflag.cl/wp-content/uploads/2021/06/logo_blog-13-1.png" alt="Pinflag logo" />
                </div>
                <div className="servicios__info__title">
                    <h2 className='font-bold'>Lorem ipsum dolor sit amet, consectetur</h2>
                    <p>Nunc vulputate libero et velit interdum, ac aliquet odio mattis</p>
                    <a href="#">Lorem ipsum 3</a>
                </div>
            </div> : <></>}
        </div>
        
    </section>
  )
}

export default Servicios