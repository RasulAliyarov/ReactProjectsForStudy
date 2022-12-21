import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function Form({ boxes, setBoxes }) {
  let [width, setWidth] = useState(0)
  let [height, setHeigth] = useState(0)
  let [color, setColor] = useState("")

  function inputWidth(e) {
    setWidth(e.target.value)
  }
  function InputHeigth(e) {
    setHeigth(e.target.value)
  }
  function InputColor(e) {
    setColor(e.target.value)
  }

  function clickHandle(e) {
    e.preventDefault();

    let newBox = {
      id: uuidv4(),
      width: width,
      height: height,
      color: color
    }
    console.log(newBox.id)
    setBoxes([...boxes, newBox] )

  }

  return (
    <>
      <input onChange={(e) => inputWidth(e)} type="number" placeholder='Width' />
      <input onChange={(e) => InputHeigth(e)} type="number" placeholder='Heigth' />
      <input onChange={(e) => InputColor(e)} type="color" />
      <button onClick={(e) => clickHandle(e)}>Create Box</button>
    </>
  )
}

export default Form