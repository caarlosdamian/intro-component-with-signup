import { useState } from 'react'
import desktop from './images/bg-intro-desktop.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app__container">
      <img className='img-desktop' src={desktop} alt="desktop" />
    </div>
  )
}

export default App
