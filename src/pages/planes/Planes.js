import React, { useState } from 'react'
import Slider from '@mui/material/Slider';
import { createTheme } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: '#fff',
    },
  },
});

const Planes = () => {

    const [value, setValue] = useState(0)
    const [precio, setPrecio] = useState(99)

    console.log(value);

    let updatePrice = e => {

        setValue(e.target.value);

        // este if es solo de prueba y demostrativo

        if(value >= 100){
            setPrecio(199)
            if(value >= 200){
                setPrecio(299)
            }
        }
        else{
            setPrecio(99)
        }

    }

  return (
    <div>
      <div className="plans flex flex-col justify-center items-center">
        <div className="plans__intro flex flex-col justify-center items-center">
          <h2>Planes de precios flexibles para <span>tu empresa</span></h2>
          <p>Prueba gratis Pinflag durante 30 pedidos y 30 días</p>
        </div>
        <div className="slider_container flex flex-col">
            <div className="tarifas flex items-center justify-between">
            <div className="tarifa_costo">100</div>
            <div className="tarifa_costo">200</div>
            <div className="tarifa_costo">300</div>
            <div className="tarifa_costo">400</div>
            <div className="tarifa_costo">+500</div>
            </div>
            <div className="slider mx-auto">
                <Slider onChange={(e) => updatePrice(e)}
                defaultValue={0}
                min={0}
                max={400}
                sx={{
                    height: '10px',
                    color: '#685CEB',
                    '& .MuiSlider-thumb': {
                        color: '#CCCCCC',
                        borderRadius: '10px'
                    },
                    '& .MuiSlider-rail':{
                        background: '#fff',
                        border: '1px solid #888888',
                    }
                }}
                />
                <p className='text-center mt-8'>Desliza para seleccionar el numero de pedidos</p>
            </div>
        </div>
      </div>
      <div className="plans_container flex items-center justify-around flex-wrap">
            <div className="plan_container flex flex-col items-center justify-between">
                <div className="plan_price_container flex flex-col items-center justify-start gap-8">
                    <div className="plan_price flex flex-col items-center justify-around">
                        <h2>Started</h2>
                        <p>$<span>{precio.toFixed(0)}</span>/mes</p>
                    </div>
                    <div className="plan_ul">
                        <ul>
                            <li className='flex items-center gap-8 my-4'>
                                <CheckIcon></CheckIcon>
                                <p>Para empresas comenzando</p>
                            </li>
                            <li className='flex items-center gap-8 my-4'>
                                <CheckIcon></CheckIcon>
                                <p>Facilita la compra</p>
                            </li>
                            <li className='flex items-center gap-8 my-4'>
                                <CheckIcon></CheckIcon>
                                <p>Disminuye los errores</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="plan__button">
                    <a href="#">Empieza gratis</a>
                </div>
            </div>

            <div className="plan_container flex flex-col items-center justify-between">
                <div className="plan_price_container flex flex-col items-center justify-start gap-8">
                    <div className="plan_price flex flex-col items-center justify-around">
                        <h2>Growth</h2>
                        <p>$<span>{(precio + 100).toFixed(0)}</span>/mes</p>
                    </div>
                    <div className="plan_ul">
                        <ul>
                            <li className='flex items-center gap-8 my-4'>
                                <CheckIcon></CheckIcon>
                                <p>Para empresas en crecimiento</p>
                            </li>
                            <li className='flex items-center gap-8 my-4'>
                                <CheckIcon></CheckIcon>
                                <p>Facilita la compra</p>
                            </li>
                            <li className='flex items-center gap-8 my-4'>
                                <CheckIcon></CheckIcon>
                                <p>Disminuye los errores</p>
                            </li>
                            <li className='flex items-center gap-8 my-4'>
                                <CheckIcon></CheckIcon>
                                <p>Informa a tus clientes del estado de sus compras</p>
                            </li>
                            <li className='flex items-center gap-8 my-4'>
                                <CheckIcon></CheckIcon>
                                <p>Personaliza tu marca y tus opciones</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="plan__button">
                    <a href="#">Empieza gratis</a>
                </div>
            </div>

            <div className="plan_container flex flex-col items-center justify-between">
                <div className="plan_price_container flex flex-col items-center justify-start gap-8">
                    <div className="plan_price flex flex-col items-center justify-around">
                        <h2>Professional</h2>
                        <p>Contactar a ventas</p>
                    </div>
                    <div className="plan_ul">
                        <ul>
                            <li className='flex items-center gap-8 my-4'>
                                <CheckIcon></CheckIcon>
                                <p>Para empresas en crecimiento</p>
                            </li>
                            <li className='flex items-center gap-8 my-4'>
                                <CheckIcon></CheckIcon>
                                <p>Facilita la compra</p>
                            </li>
                            <li className='flex items-center gap-8 my-4'>
                                <CheckIcon></CheckIcon>
                                <p>Disminuye los errores</p>
                            </li>
                            <li className='flex items-center gap-8 my-4'>
                                <CheckIcon></CheckIcon>
                                <p>Informa a tus clientes del estado de sus compras</p>
                            </li>
                            <li className='flex items-center gap-8 my-4'>
                                <CheckIcon></CheckIcon>
                                <p>Personaliza tu marca y tus opciones</p>
                            </li>
                            <li className='flex items-center gap-8 my-4'>
                                <CheckIcon></CheckIcon>
                                <p>Obten la mejor experiencia con el máximo volumen de envios (?)</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="plan__button">
                    <a href="#">Empieza gratis</a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Planes