import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from "./counter.jsx"
import Stopwatch from './stopwatch'
function App() {
  

  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <Stopwatch/>
    </div>
  )
}

export default App
