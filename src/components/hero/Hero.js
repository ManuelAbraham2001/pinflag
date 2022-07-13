import React from 'react'

const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero__content flex items-center justify-around">
          <div className="hero__title">
              <h1 className='font-bold'>Lorem ipsum dolor sit amet, consectetur</h1>
              <p>Nunc vulputate libero et velit interdum, ac aliquet odio mattis</p>
              <a href="#">Lorem ipsum</a>
          </div>
          <div className="hero__img">
            <img src="https://pinflag.cl/wp-content/uploads/2021/06/logo_blog-13-1.png" alt="demo" />
          </div>
      </div>
    </section>
  )
}

export default Hero