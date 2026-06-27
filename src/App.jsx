import { useState } from 'react'

import './App.css'

const CardData = [
  { id: 1, category: 'JavaScript', question: 'What is the difference between == and === in JavaScript?', answer: 'In JavaScript, == is the loose equality operator, which compares two values for equality after performing type coercion if necessary. This means it converts the operands to the same type before comparing.=== is the strict equality operator, which compares both the values and their types, without performing type conversion.', isKnown: true },

  { id: 2, category: 'HTML', question: 'What does HTML stand for?', answer: 'HTML stands for HyperText Markup Language', isKnown: false },

  { id: 3, category: 'JavaScript', question: ' Is JavaScript compiled or interpreted?', answer: 'JavaScript is mostly interpreted, but modern browsers also compile it just-in-time (JIT) to make it faster.', isKnown: true },

  { id: 4, category: 'React', question: 'How does React.js work?', answer: 'React.js works on a component-based architecture and uses a virtual DOM to efficiently update and render user interfaces.', isKnown: false },

  { id: 5, category: 'JavaScript', question: 'Explain Hoisting in javascript.', answer: 'Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top.', isKnown: false },

  { id: 6, category: 'HTML', question: 'What are empty or self-closing elements?', answer: 'Empty elements are tags that do not require a closing tag and cannot contain child content.', isKnown: false },

  { id: 7, category: 'HTML', question: 'What is the purpose of the <!DOCTYPE html> declaration?', answer: 'It is an instruction to the web browser indicating that the document is written in HTML5', isKnown: true },

  { id: 8, category: 'React', question: ' What is JSX?', answer: 'JSX: Syntax extension for JavaScript, mainly used with React', isKnown: false },

  { id: 9, category: 'React', question: 'What is a React component?', answer: 'A Component is one of the core building blocks of React.', isKnown: true }
]

function App() {

  return (
    <div>
      
      <header>

        <h1>FLASH CARD APP</h1>

        <select >
          <option value="ALL">ALL</option>
          <option value="JavaScript">javascript</option>
          <option value="React">react</option>
          <option value="HTML">HTML</option>
          </select>

        <button>shuffle</button>
        <button>add Card</button>
      </header>


      
    </div>
  )
}

export default App
