import { useState } from 'react'
import './App.css'
import Allcards from './component/Allcard'

function App() {
  return (
    <div>
      <h1>E-commerce Website</h1>
      <div>
        <input type="text" placeholder='Search Products..' />
        <button>Search</button>
      </div>
      <Allcards/>
    </div>
  )
}

export default App
