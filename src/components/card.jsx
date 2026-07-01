import React from 'react'

const Card = ({displayCard , flipped , onFlip}) => {
const {id ,category ,question , answer , isKnown} = displayCard
  return (
    <div onClick={onFlip}>
    {
        flipped ? (
        <p>{answer}</p>
    ):(
        <p>{question}</p>
    )
    }
      
     
    </div>
  )
}

export default Card
