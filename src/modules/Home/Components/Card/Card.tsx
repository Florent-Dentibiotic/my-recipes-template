import { Link } from 'react-router-dom'
import MdiClockTimeTwoOutline from '../../../../assets/img/MdiClockTimeTwoOutline'

type recipeProps = {
  recipe: {
    id: number
    name: string
    servings: number
    poster: string
    ingredients: {
      ingredient: string
      quantity?: number | string
      unit?: string
    }[]
    time: number
    description: string
    appliance: string
    ustensils: string[]
  }
}

export function Card({ recipe }: recipeProps) {
  return (
    <Link to={`/recipe/${recipe.id}`} className="rounded-xl block shadow-md">
      <div className="h-48">
        <img
          src={`/imgs/recipes/${recipe.poster}`}
          className="object-cover w-full max-h-48 rounded-t-xl"
        />
      </div>
      <div className="p-2 flex justify-between">
        <div className="md:w-3/4">{recipe.name}</div>
        <div className="flex items-center gap-1">
          <MdiClockTimeTwoOutline /> {recipe.time} min
        </div>
      </div>
    </Link>
  )
}
