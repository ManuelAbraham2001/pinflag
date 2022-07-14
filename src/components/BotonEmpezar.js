import React from 'react'
import { Link } from 'react-router-dom'
import "./BotonEmpezar.css"
const BotonEmpezar = () => {
  return (
    <div className=''>
    <button className="font-bold mt-6 px-4 py-2 sm:flex hidden lg:hidden">
        <Link 
        to="/">
        Empieza gratis
        </Link>
    </button>
    </div>

  )
}
export default BotonEmpezar
