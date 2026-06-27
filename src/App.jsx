import { useState } from 'react'

import './App.css'

[
{id:1 , category:'javascript' , question: '...' , answer:'...' , isknown: true},
{id:2 , category:'HTML' , question: '...' , answer:'...' , isknown: false},
{id:3 , category:'javascript' , question: '...' , answer:'...' , isknown: true},
{id:4 , category:'React' , question: '...' , answer:'...' , isknown: false}
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>FLASH CARD APP</h1>
    </div>
  )
}

export default App
