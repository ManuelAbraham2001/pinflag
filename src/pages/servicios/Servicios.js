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
            <button onClick={() => setView(<Pickups></Pickups>)} autoFocus>Puntos Pick-up</button>
            <button onClick={() => setView(<Omnicanalidad></Omnicanalidad>)}>Omnicanalidad</button>
            <button onClick={() => setView(<Creador_etiquetas></Creador_etiquetas>)}>Creador de etiquetas</button>
            <button onClick={() => setView(<Trazabilidad></Trazabilidad>)}>Trazabilidad y Packaging</button>
            <button onClick={() => setView(<Checkout></Checkout>)}>Check-out en línea</button>
        </div>

        {view}
        
    </>
  )
}

export default Servicios