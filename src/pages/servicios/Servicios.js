import React, { useState } from 'react'
import Pickups from '../../components/Puntos_pickUp/Pickups'
import Omnicanalidad from '../../components/Puntos_pickUp/Omnicanalidad'
import Creador_etiquetas from '../../components/Puntos_pickUp/Creador_etiquetas'
import Trazabilidad from '../../components/Puntos_pickUp/Trazabilidad'
import Checkout from '../../components/Puntos_pickUp/Checkout'


const Servicios = () => {

    const [view, setView] = useState(<Pickups></Pickups>)
    
  return (
    <>
        <div className="step_nav flex items-center justify-between mx-auto sticky">
            <button id='services-nav-button1' onClick={() => setView(<Pickups></Pickups>)}>Puntos Pick-up</button>
            <button id='services-nav-button2' onClick={() => setView(<Omnicanalidad></Omnicanalidad>)}>Omnicanalidad</button>
            <button id='services-nav-button3' onClick={() => setView(<Creador_etiquetas></Creador_etiquetas>)}>Creador de etiquetas</button>
            <button id='services-nav-button4' onClick={() => setView(<Trazabilidad></Trazabilidad>)}>Trazabilidad y Packaging</button>
            <button id='services-nav-button5' onClick={() => setView(<Checkout></Checkout>)}>Check-out en línea</button>
        </div>

        {view}
        
    </>
  )
}

export default Servicios