import React from 'react'
import hero from '../../ilustraciones/blog/hero_blog.png'
import rectangulo from '../../ilustraciones/blog/rectangulo_blog.png'
import submit_arrow from '../../ilustraciones/blog/submit_arrow.svg'

const BlogView = () => {
  return (
    <>
        <div className="blogView_container flex flex-col items-center">
            <div className="blogView_img">
                <img src={hero} alt="" />
            </div>
            <div className="blogView_title">
                <h1 className='my-1 text-center mx-auto'>¿Qué soluciones ecológicas puede adoptar tu ecommerce?</h1>
                <h2 className='my-1 text-center mx-auto'>Por: Bob Esponja</h2>
            </div>
            <div className="blogView_info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget hendrerit ligula. Maecenas vehicula mollis quam, a auctor diam suscipit id. Maecenas augue sapien, finibus maximus eros id, pharetra mattis sapien. Praesent hendrerit tempor quam id lacinia. Ut in sapien massa. Integer tincidunt tortor eu elit gravida ornare. Etiam consectetur ultricies orci ut molestie. Phasellus tempor non est eget varius. Vestibulum ornare neque blandit tincidunt luctus. Nulla sed feugiat quam, nec rhoncus erat. Vivamus volutpat convallis sem, nec porttitor purus sollicitudin quis. Nam sit amet mollis ante, ut iaculis libero. Aliquam eu ultricies lectus, eget luctus diam. Sed ornare a eros ac facilisis. Donec sagittis libero ut ante mattis pulvinar.

Mauris semper sodales ligula, sit amet fermentum lorem tempus nec. Donec at tincidunt orci, in molestie felis. Donec fringilla orci metus, a luctus enim congue sit amet. Suspendisse tristique fermentum mi eget faucibus. Phasellus vestibulum eget sapien vitae pretium. Donec rhoncus sodales mauris, et ornare dolor volutpat quis. Fusce sagittis libero rhoncus, aliquet velit sed, congue arcu. Duis maximus quam sit amet dignissim sodales. Duis lobortis, tortor ut commodo lobortis, ipsum ipsum blandit est, nec efficitur orci massa nec sapien. Pellentesque in semper enim. Duis varius egestas enim eget interdum. Nullam porttitor tortor leo, eu suscipit lacus sodales in.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur feugiat est quis dolor vulputate molestie. Donec vel semper metus, quis volutpat est. Nunc blandit, nibh vel condimentum varius, purus felis hendrerit velit, eu aliquet libero leo id lorem. Etiam lacinia tincidunt dolor vitae pellentesque. Sed vulputate augue quis nisl maximus feugiat. Vivamus eget ipsum mi. Nullam aliquet, orci ac sollicitudin fermentum, risus erat ultricies tortor, eget dignissim urna nisi vel ligula. Morbi et luctus nulla. Ut vulputate velit ac risus ornare, nec aliquet est convallis. Quisque et lacus ac dui fermentum eleifend.

Suspendisse elementum sit amet arcu eget vehicula. Pellentesque quis nunc mauris. Morbi lobortis eros nec velit porta, nec fringilla nibh ornare. Nulla facilisi. Duis consequat aliquet nisl, id finibus dui congue in. Mauris dui lorem, molestie vitae sollicitudin at, porta vitae orci. Phasellus tempor purus tincidunt neque iaculis hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque fermentum neque elementum diam tristique fermentum. Cras sit amet interdum tellus. Morbi consectetur orci id enim tempus, et pellentesque mi accumsan.

Nullam egestas imperdiet finibus. Duis in risus vehicula, consequat risus non, ultricies urna. Aenean condimentum, diam et rhoncus ornare, nunc mi suscipit metus, et scelerisque tortor ipsum quis metus. Praesent ipsum dui, condimentum at semper a, malesuada sed est. Curabitur mauris sem, vulputate sed pellentesque sodales, finibus sit amet turpis. Nulla id ex malesuada, vulputate felis at, semper nulla. Nullam finibus imperdiet venenatis. Phasellus tempus massa sed lorem facilisis mollis. Ut non auctor purus, eget dignissim purus. Donec quis dui metus. Integer a ante eleifend, blandit sapien nec, porttitor sem. In venenatis viverra neque, eget efficitur turpis. Nam vel neque eget lectus sollicitudin tristique. Sed luctus accumsan ante, in feugiat dui mollis eu. Duis enim elit, vulputate vel eleifend nec, euismod nec nibh. Mauris iaculis imperdiet dolor, sit amet tempus tortor commodo at.</p>
            </div>
        </div>
        <div className="view_more text-center">
            <a href="#">Ver más</a>
        </div>
    <div className="w-full flex items-center justify-center">
        <div className="otrosBlogs_content flex flex-col items-start justify-around gap-8">
                <div className="otrosBlogs_title">
                    <h2>Quizás te podría gustar</h2>
                </div>
                <div className='blogs_cards_container flex items-center justify-around gap-16'>
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
        <div className="newSteller flex flex-col items-center justify-center gap-4 my-4 w-3/4 mx-auto">
            <h2>Datos, experiencias y noticias sobre el mundo del e-commerce.</h2>
            <span>Cada semana, directo a tu correo. </span>
            <div className="input_box text-center">
                <input type="email" placeholder='Tu email' />
                <img src={submit_arrow} alt="" />
            </div>
            
        </div>
    </>
  )
}

export default BlogView