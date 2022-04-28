import { useState } from 'react'
import { recipes } from '@assets'
import { Home } from '@home'
import { Route, Routes, Link } from 'react-router-dom'
import { Result } from '@result'

function App() {
  const [count, setCount] = useState(recipes.length)

  return (
    <div>
      <header className="p-4">
        <Link to="/">
          <h1 className="text-3xl font-bold text-center">Nos petits plats</h1>
          <p className="text-center">Choisissez parmis {count} recettes</p>
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
