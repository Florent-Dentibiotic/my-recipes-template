import { useState } from 'react'
import { recipes } from '@assets'
import { Home } from '@home'
import { Route, Routes, Link } from 'react-router-dom'
import { Result } from '@result'
import soup from './assets/img/soup.png'

function App() {
  const [count, setCount] = useState(recipes.length)

  return (
    <div>
      <header className="p-4">
        <Link to="/" className="flex justify-center items-center gap-3">
          <img src={soup} alt="" className="h-24" />
          <div>
            <h1 className="text-3xl font-bold text-center">Nos petits plats</h1>
            <p className="text-center">Choisissez parmis {count} recettes</p>
          </div>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Result />} />
      </Routes>
    </div>
  )
}

export default App
