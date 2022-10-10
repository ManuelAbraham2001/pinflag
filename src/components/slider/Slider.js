import React, { useEffect, useState } from 'react'
import sliderImg from '../../ilustraciones/home/slider.svg'
import Item from './Item'


const Slider = () => {

    let sliderContent = [
      {
        image: sliderImg,
        title: "Tu cliente elige su producto y pasa al check-out"
      },
      {
        image: sliderImg,
        title: "Una vez completados los datos, elige la opcion de despacho que mas le acomode"
      },
      {
        image: sliderImg,
        title: "Paga su producto y termina su compra"
      },
      {
        image: sliderImg,
        title: "Los couriers se encargan del resto y despachan tu pedido a la opcion elegida."
      }
    ]

    const [count, setCount] = useState(0)
    const [disableAdd, setDisableAdd] = useState(false)
    const [disableRes, setDisableRes] = useState(true)

    let add = () => {
        if(count === sliderContent.length - 1){
            setDisableAdd(true)
        }else{
            setCount(count + 1)
        }
        setDisableRes(false)
    }

    let res = () => {
        if(count === 0){
            setDisableRes(true)
        }else{
            setCount(count - 1)
        }
        setDisableAdd(false)
    }        

  return (
    <div className='carrousel_container flex justify-center items-center flex-col'>
        <div className="carrousel_contaier_title ">
            <h2>¿Cómo <span>funciona?</span></h2>
            <p>Te mostramos el paso a paso de nuestro servicio</p>
        </div>
        <div className="carrousel_progress flex items-center justify-center w-full">
          <div className="step flex">
            <span className={count == 0 ? 'span-active' : 'span-not-active'}></span>
            <h3>Checkout</h3>
          </div>
          <div className="short_line mx-2"></div>
          <div className="line mx-2"></div>
          <div className="line mx-2"></div>
          <div className="line mx-2"></div>
          <div className="line mx-2"></div>
          <div className="line mx-2"></div>
          <div className="short_line mx-2"></div>
          <div className="step flex">
            <span className={count == 1 ? 'span-active' : 'span-not-active'}></span>
            <h3>Opción de despacho</h3>
          </div>
          <div className="short_line mx-2"></div>
          <div className="line mx-2"></div>
          <div className="line mx-2"></div>
          <div className="line mx-2"></div>
          <div className="line mx-2"></div>
          <div className="line mx-2"></div>
          <div className="short_line mx-2"></div>
          <div className="step flex">
            <span className={count == 2 ? 'span-active' : 'span-not-active'}></span>
            <h3>Pago</h3>
          </div>
          <div className="short_line mx-2"></div>
          <div className="line mx-2"></div>
          <div className="line mx-2"></div>
          <div className="line mx-2"></div>
          <div className="line mx-2"></div>
          <div className="line mx-2"></div>
          <div className="short_line mx-2"></div>
          <div className="step flex">
            <span className={count == 3 ? 'span-active' : 'span-not-active'}></span>
            <h3>Despacho</h3>
          </div>
        
        </div>
        <div className="slider-home flex items-center justify-between w-full">
          
            <button onClick={() => res()} disabled={disableRes} className='slider_arrow' id='resHandler'></button>

              {
                  
                <Item key={count} title={sliderContent[count].title} img={sliderContent[count].image}></Item> // envio propiedades
                  
              }
          
          <button onClick={() => add()} disabled={disableAdd} className='slider_arrow' id='addHandler'></button>
        </div>
        <div className="video_explanatory_button">
            <a href="#">Ver video explicativo</a>
        </div>
    </div>
  )
}

export default Slider

