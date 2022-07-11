import React, { useState } from 'react'



const Slider = () => {

    const [valueBar, setValueBar] = useState(0)
  return (
    <div>
        <input onChange={() => {
            let cowbell = document.getElementById('cowbell')
            setValueBar(parseInt(cowbell.value));
        }} type="range" id="cowbell" name="cowbell" 
        min="0" max="100" defaultValue="0" step="10"></input>

        { <><h1>{valueBar}</h1></>}

    </div>
  )
}

export default Slider