import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container flex flex-col items-center w-screen min-h-screen bg-purple-50">
        <Navbar/>
        <Home/>
      </div>
    </>
  )
}

export default App
