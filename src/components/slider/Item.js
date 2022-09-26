import React from 'react'

const Item = (props) => {
  return (
    <div className='test flex justify-center items-center'>
        <img src={props.img} alt="asd" />
        <h2>{props.title}</h2>
    </div>
  )
}

export default Item