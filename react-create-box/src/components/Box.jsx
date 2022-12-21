import React from 'react'

function Box({ boxes }) {
  return (
    boxes.map((item) => {
      let boxStyle = {
        width: `${item.width}px`,
        height: `${item.height}px`,
        backgroundColor: item.color,
        borderRadius: "10px",
        margin: "20px"
      }
      return (
        <div key={item.id} style={boxStyle}></div>
      )
    })
  )
}

export default Box