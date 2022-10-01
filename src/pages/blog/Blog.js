import React from 'react'
import hero from '../../ilustraciones/hero_blog.png'
import rectangulo from '../../ilustraciones/rectangulo_blog.png'

const Blog = () => {
  return (
    <>
        <div className="blog_title">
            <h1>¡Lorem <span>Ipsum!</span></h1>
        </div>
        <div className="blog_news flex items-start justify-around">
            <div className="filter">
                <div className="filter_content flex flex-col items-start justify-center gap-8">
                    <div className="filter_list flex flex-col items-start justify-center gap-8">
                        <h2>Ver por categoria</h2>
                        <div className="filter_content_list flex">
                            <button autoFocus>Ver todo</button>
                            <button>Sustentabilidad</button>
                            <button>Ventas</button>
                            <button>Tecnologia</button>
                            <button>Marketing</button>
                        </div>
                    </div>
                    <div className="filter_list flex flex-col items-start justify-center gap-8">
                        <h2>Ver por autor</h2>
                        <div className="filter_content_list flex">
                            <button autoFocus>Selected</button>
                            <button>Bob Esponga</button>
                            <button>Patricio</button>
                            <button>Calamardo</button>
                            <button>Don Cangrejo</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog_hero flex flex-col gap-8">
                <img src={hero} alt="" />
                <div className="blog_hero_info flex flex-col gap-10">
                    <h3>5 Julio 2022</h3>
                    <h2>¿Qué soluciones ecológicas puede adoptar tu ecommerce?</h2>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat m veniam, quis nostrud ase.</p>
                    <a href="#">Leer más</a>
                </div>
            </div>
        </div>
        <div className="otrosBlogs_container flex flex-col items-center justify-center gap16">
            <div className="otrosBlogs_content flex flex-col items-start justify-around gap-8">
                <div className="otrosBlogs_title">
                    <h2>Recomendados</h2>
                </div>
                <div className='flex items-center justify-around gap-16'>
                    <div className="otrosBlogs_card flex flex-col gap-8">
                        <img src={rectangulo} alt="" />
                        <div className="otrosBlogs_card flex flex-col gap-8">
                            <h3>5 Julio 2022</h3>
                            <h2>Lorem ipsum ut sal enimst comodo </h2>
                            <p>Ut enim ad minim veniam, quis nostrud exercitalaboris nisi ut aliquip ex ea commodo consequ.</p>
                            <a href="#">Leer más</a>
                        </div>
                    </div>
                    <div className="otrosBlogs_card flex flex-col gap-8">
                        <img src={rectangulo} alt="" />
                        <div className="otrosBlogs_card flex flex-col gap-8">
                            <h3>5 Julio 2022</h3>
                            <h2>Lorem ipsum ut sal enimst comodo </h2>
                            <p>Ut enim ad minim veniam, quis nostrud exercitalaboris nisi ut aliquip ex ea commodo consequ.</p>
                            <a href="#">Leer más</a>
                        </div>
                    </div>
                    <div className="otrosBlogs_card flex flex-col gap-8">
                    <img src={rectangulo} alt="" />
                        <div className="otrosBlogs_card flex flex-col gap-8">
                            <h3>5 Julio 2022</h3>
                            <h2>Lorem ipsum ut sal enimst comodo </h2>
                            <p>Ut enim ad minim veniam, quis nostrud exercitalaboris nisi ut aliquip ex ea commodo consequ.</p>
                            <a href="#">Leer más</a>
                        </div>
                    </div>
                    <div className="button_more flex items-center justify-center">
                        <button>+</button>
                    </div>
                </div>
            </div>
            <div className="otrosBlogs_content flex flex-col items-start justify-around gap-8">
                <div className="otrosBlogs_title">
                    <h2>Los más vistos</h2>
                </div>
                <div className='flex items-center justify-around gap-16'>
                    <div className="otrosBlogs_card flex flex-col gap-8">
                        <img src={rectangulo} alt="" />
                        <div className="otrosBlogs_card flex flex-col gap-8">
                            <h3>5 Julio 2022</h3>
                            <h2>Lorem ipsum ut sal enimst comodo </h2>
                            <p>Ut enim ad minim veniam, quis nostrud exercitalaboris nisi ut aliquip ex ea commodo consequ.</p>
                            <a href="#">Leer más</a>
                        </div>
                    </div>
                    <div className="otrosBlogs_card flex flex-col gap-8">
                        <img src={rectangulo} alt="" />
                        <div className="otrosBlogs_card flex flex-col gap-8">
                            <h3>5 Julio 2022</h3>
                            <h2>Lorem ipsum ut sal enimst comodo </h2>
                            <p>Ut enim ad minim veniam, quis nostrud exercitalaboris nisi ut aliquip ex ea commodo consequ.</p>
                            <a href="#">Leer más</a>
                        </div>
                    </div>
                    <div className="otrosBlogs_card flex flex-col gap-8">
                    <img src={rectangulo} alt="" />
                        <div className="otrosBlogs_card flex flex-col gap-8">
                            <h3>5 Julio 2022</h3>
                            <h2>Lorem ipsum ut sal enimst comodo </h2>
                            <p>Ut enim ad minim veniam, quis nostrud exercitalaboris nisi ut aliquip ex ea commodo consequ.</p>
                            <a href="#">Leer más</a>
                        </div>
                    </div>
                    <div className="button_more flex items-center justify-center">
                        <button>+</button>
                    </div>
                </div>
            </div>
            <div className="otrosBlogs_content flex flex-col items-start justify-around gap-8">
                <div className="otrosBlogs_title">
                    <h2>Los más recientes</h2>
                </div>
                <div className='flex items-center justify-around gap-16'>
                    <div className="otrosBlogs_card flex flex-col gap-8">
                        <img src={rectangulo} alt="" />
                        <div className="otrosBlogs_card flex flex-col gap-8">
                            <h3>5 Julio 2022</h3>
                            <h2>Lorem ipsum ut sal enimst comodo </h2>
                            <p>Ut enim ad minim veniam, quis nostrud exercitalaboris nisi ut aliquip ex ea commodo consequ.</p>
                            <a href="#">Leer más</a>
                        </div>
                    </div>
                    <div className="otrosBlogs_card flex flex-col gap-8">
                        <img src={rectangulo} alt="" />
                        <div className="otrosBlogs_card flex flex-col gap-8">
                            <h3>5 Julio 2022</h3>
                            <h2>Lorem ipsum ut sal enimst comodo </h2>
                            <p>Ut enim ad minim veniam, quis nostrud exercitalaboris nisi ut aliquip ex ea commodo consequ.</p>
                            <a href="#">Leer más</a>
                        </div>
                    </div>
                    <div className="otrosBlogs_card flex flex-col gap-8">
                    <img src={rectangulo} alt="" />
                        <div className="otrosBlogs_card flex flex-col gap-8">
                            <h3>5 Julio 2022</h3>
                            <h2>Lorem ipsum ut sal enimst comodo </h2>
                            <p>Ut enim ad minim veniam, quis nostrud exercitalaboris nisi ut aliquip ex ea commodo consequ.</p>
                            <a href="#">Leer más</a>
                        </div>
                    </div>
                    <div className="button_more flex items-center justify-center">
                        <button>+</button>
                    </div>
                </div>
            </div>
           
        </div>
    </>
  )
}

export default Blog