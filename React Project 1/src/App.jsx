import { useState } from 'react'
import './App.css'
import Allcard from './component/Allcard'

function App() {
  return (
    <div>
      <h1>E-commerce Website</h1>
      <div>
        <input type="text" placeholder='Search Products..' />
        <button>Search</button>
      </div>
      <Allcard/>
    </div>
  )
}

export default App
