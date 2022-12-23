import React from 'react'
import "./card.css"
function Card(props) {

  return (
    <>
      {
        props.allcards && props.allcards.map((card) => {
          return <div key={card.id}>
            <div className="container">
              <div className='card'>
                <div className="card__top">
                  <img src={card.url} alt="" />
                </div>
                <div className="card__middle">
                  <h4>{card.title}</h4>
                </div>
                <div className="card__bottom">
                </div>
              </div>
            </div>
          </div>
        })
      }
    </>
  )
}

export default Card