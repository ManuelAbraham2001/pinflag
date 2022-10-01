import React from 'react'

const PartnersLogos = props => {
  return (
    <div className="logo" onClick={e => console.log(e.target)}>
        <img src={props.img} alt="asd"/>
    </div>
  )
}

export default PartnersLogos