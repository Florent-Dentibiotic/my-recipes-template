import { useParams } from 'react-router-dom'
import { recipes } from '@assets'

export function Result() {
  const { id } = useParams()

  const recipe = recipes.find((el) => el.id.toString() === id)

  return (
    <>
      <p className="text-center text-5xl">{recipe?.name}</p>
    </>
  )
}
