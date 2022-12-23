import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../Card/Card'
function Home({ setAllCards }) {

  // let [cards, setCards] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      setAllCards(res.data)
    })
  }, [])

  return (
    <>
      {

        // cards.map((item) => {
        //  return <Card key={item.id} src={item.url} title={item.title} />
        // })

        <Card />
      }
    </>
  )
}

export default Home