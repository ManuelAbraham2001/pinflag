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

    let updatePrice = (e) => {

        setValue(e.target.value);

        // este if es solo de prueba y demostrativo

        if(value >= 50){
            setPrecio(199)
        }else{
            setPrecio(99)
        }
    }

  return (
    <div>
      <div className="planes flex flex-col justify-center items-center">
        <div className="planes__intro flex flex-col justify-center items-center">
          <h2>Lorem ipsum dolor sit amet, <span>consectetur</span></h2>
          <p>Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        </div>
        <div className="slider mx-auto">
            <Slider onChange={(e) => updatePrice(e)}
            defaultValue={0}
            sx={{
                height: '10px',
                color: '#33CCCC',
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
            <span>Nunc vulputate libero et velit interdum</span>
        </div>
        <div className="planes__container flex w-full justify-evenly items-center">
          <div className="plan flex flex-col justify-between items-center">
            <div>
              <div className="plan__precio flex flex-col justify-center items-center">
                <h2>Started</h2>
                <p>$<span>{precio.toFixed(0)}</span>/mes</p>
              </div>
              <div className="plan__info">
                <ul>
                  <li>
                    <div className="plan__info__li flex">
                      <CheckIcon></CheckIcon>
                      <p>Lorem ipsum dolor</p>
                    </div>
                  </li>
                  <li>
                    <div className="plan__info__li flex">
                      <CheckIcon></CheckIcon>
                      <p>Quisque pharetra nec</p>
                    </div>
                  </li>
                  <li>
                    <div className="plan__info__li flex">
                      <CheckIcon></CheckIcon>
                      <p>Phasellus sollicitudin</p>
                    </div>
                  </li>
                  <li>
                    <div className="plan__info__li flex">
                      <CheckIcon></CheckIcon>
                      <p>Quisque pharetra nec et il</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="plan__button">
                <a href="#">Lorem impsum</a>
            </div>
            

          </div>
          <div className="plan flex flex-col justify-between items-center">
            <div>
              <div className="plan__precio flex flex-col justify-center items-center">
                <h2>Growth</h2>
                <p>$<span>{(precio + 100).toFixed(0)}</span>/mes</p>
              </div>
              <div className="plan__info">
                <ul>
                  <li>
                    <div className="plan__info__li flex">
                      <CheckIcon></CheckIcon>
                      <p>Lorem ipsum dolor</p>
                    </div>
                  </li>
                  <li>
                    <div className="plan__info__li flex">
                      <CheckIcon></CheckIcon>
                      <p>Quisque pharetra nec</p>
                    </div>
                  </li>
                  <li>
                    <div className="plan__info__li flex">
                      <CheckIcon></CheckIcon>
                      <p>Phasellus sollicitudin</p>
                    </div>
                  </li>
                  <li>
                    <div className="plan__info__li flex">
                      <CheckIcon></CheckIcon>
                      <p>Quisque pharetra nec et il</p>
                    </div>
                  </li>
                  <li>
                    <div className="plan__info__li flex">
                      <CheckIcon></CheckIcon>
                      <p>Suspendisse mi erat</p>
                    </div>
                  </li>
                  <li>
                    <div className="plan__info__li flex">
                      <CheckIcon></CheckIcon>
                      <p>Lorem ipsum dolor</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="plan__button">
                <a href="#">Lorem impsum</a>
            </div>
            

          </div>
          <div className="plan flex flex-col justify-between items-center">
            <div>
              <div className="plan__precio flex flex-col justify-center items-center">
                <h2>Professional</h2>
                <p>Contactar con ventas</p>
              </div>
              <div className="plan__info">
                <ul>
                  <li>
                    <div className="plan__info__li flex">
                      <CheckIcon></CheckIcon>
                      <p>Lorem ipsum dolor</p>
                    </div>
                  </li>
                  <li>
                    <div className="plan__info__li flex">
                      <CheckIcon sx={{ color: 'red'}}></CheckIcon>
                      <p>Quisque pharetra nec</p>
                    </div>
                  </li>
                  <li>
                    <div className="plan__info__li flex">
                      <CheckIcon></CheckIcon>
                      <p>Phasellus sollicitudin</p>
                    </div>
                  </li>
                  <li>
                    <div className="plan__info__li flex">
                      <CheckIcon></CheckIcon>
                      <p>Quisque pharetra nec et il</p>
                    </div>
                  </li>
                  <li>
                    <div className="plan__info__li flex">
                      <CheckIcon></CheckIcon>
                      <p>Suspendisse mi erat</p>
                    </div>
                  </li>
                  <li>
                    <div className="plan__info__li flex">
                      <CheckIcon></CheckIcon>
                      <p>Ipsum dolor solicitudi</p>
                    </div>
                  </li>
                  <li>
                    <div className="plan__info__li flex">
                      <CheckIcon></CheckIcon>
                      <p>Lorem ipsum dolor</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="plan__button">
                <a href="#">Lorem impsum</a>
            </div>
            

          </div>

        </div>
      </div>

      {value}
    </div>
  )
}

export default Planes