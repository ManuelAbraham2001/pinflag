import React, { useState } from 'react'

const Marcas = props => {

  return (
    <>
    <div className='img_hover' onClick={() => props.click(props.texto)}>
        <img src={props.img} alt="asd"/>
    </div>
    </>
  )
}

export default Marcas