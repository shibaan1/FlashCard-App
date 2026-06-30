import React from 'react'

const Card = ({displayCard}) => {
const {id ,category ,question , answer , isKnown} =displayCard
  return (
    <div>
      
      <p>{question}</p>
    </div>
  )
}

export default Card
