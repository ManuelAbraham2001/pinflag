import React, { useState } from 'react'
import Pickups from '../../components/Puntos_pickUp/Pickups'
import Omnicanalidad from '../../components/Puntos_pickUp/Omnicanalidad'
import Creador_etiquetas from '../../components/Puntos_pickUp/Creador_etiquetas'
import Trazabilidad from '../../components/Puntos_pickUp/Trazabilidad'
import Checkout from '../../components/Puntos_pickUp/Checkout'


const Servicios = () => {

    const [view, setView] = useState(<Pickups></Pickups>)
    const [tabActive, setTabActive] = useState('pickups')

    
  return (
    <>
        <div className="step_nav flex items-center justify-between mx-auto sticky">
            <button className={tabActive === 'pickups' ? 'calipso-tab-active' : ''} onClick={() => {setView(<Pickups></Pickups>); setTabActive('pickups')}}>Puntos Pick-up</button>
            <button className={tabActive === 'omnicanalidad' ? 'lila-tab-active' : ''} onClick={() => {setView(<Omnicanalidad></Omnicanalidad>); setTabActive('omnicanalidad')}}>Omnicanalidad</button>
            <button className={tabActive === 'etiquetas' ? 'blue-tab-active' : ''} onClick={() => {setView(<Creador_etiquetas></Creador_etiquetas>); setTabActive('etiquetas')}}>Creador de etiquetas</button>
            <button className={tabActive === 'trazabilidad' ? 'calipso-tab-active' : ''} onClick={() => {setView(<Trazabilidad></Trazabilidad>); setTabActive('trazabilidad')}}>Trazabilidad y Packaging</button>
            <button className={tabActive === 'checkout' ? 'lila-tab-active' : ''} onClick={() => {setView(<Checkout></Checkout>); setTabActive('checkout')}}>Check-out en línea</button>
        </div>

        {view}
        
    </>
  )
}

export default Servicios