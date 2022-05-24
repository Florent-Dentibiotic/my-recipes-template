import { recipes } from '@assets'
import TwemojiMagnifyingGlassTiltedLeft from 'assets/img/TwemojiMagnifyingGlassTiltedLeft'
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
      <section className="px-8 relative">
        <input
          type="text"
          onChange={handleSearch}
          className="border-2 w-full h-12 rounded p-2"
          placeholder="Recherchez une recette"
        />
        <div className="absolute right-10 bottom-2">
          <TwemojiMagnifyingGlassTiltedLeft height={'2em'} width={'2em'} />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-8">
        {results.map((recipe, id) => (
          <div key={id}>
            <Card recipe={recipe} />
          </div>
        ))}
      </section>
    </main>
  )
}
