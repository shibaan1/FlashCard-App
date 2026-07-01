import React from 'react'

const Navigation = ({onNext , onPrev , currentCard , totalCard , knownCount}) => {
  return (
    <div>
      <p>Card {currentCard+1} of {totalCard} | ★ {knownCount} known</p>
      <button onClick={onPrev}>← Prev</button>
      <button onClick={onNext}>→ Next</button>
      <button>✓ Known</button>
      <button>✗ Unknown</button>
    </div>
  )
}

export default Navigation
