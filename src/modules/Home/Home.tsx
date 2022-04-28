import { recipes } from '@assets'
import { FormEvent, useState } from 'react'
import { Card } from './Components'

export function Home() {
  const [results, setResults] = useState(recipes)

  const handleSearch = (e: FormEvent<HTMLInputElement>) => {
    const searchTerms = e.currentTarget.value.split(' ')

    setResults(
      recipes.filter((recipe) => {
        //Rassembler les mots contenus dans titre et description pour faciliter la recherche.
        let wordSet = new Set([
          ...recipe.name.split(' '),
          ...recipe.description.split(' '),
        ])

        return searchTerms.every((term) =>
          [...wordSet].join(' ').toUpperCase().includes(term.toUpperCase())
        )
      })
    )
  }

  return (
    <main>
      <section className="px-8">
        <input type="text" onChange={handleSearch} className="border-2" />
      </section>
      <section className="grid grid-cols-3 gap-8 p-8">
        {results.map((recipe, id) => (
          <div key={id}>
            <Card recipe={recipe} />
          </div>
        ))}
      </section>
    </main>
  )
}
