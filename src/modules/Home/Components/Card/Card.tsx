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
    <Link to={`/recipe/${recipe.id}`} className="rounded-xl block shadow-md h-full">
      <div className="h-48">
        <img
          src={`/imgs/recipes/${recipe.poster}`}
          className="object-cover w-full max-h-48 rounded-t-xl"
        />
      </div>
      <div className="p-2 flex justify-between">
        <div className="md:w-3/4 truncate">{recipe.name}</div>
        <div className="flex items-center gap-1 font-bold">
          <MdiClockTimeTwoOutline /> {recipe.time} min
        </div>
      </div>
      <div className="p-2 text-xs flex justify-between items-center">
        <ul className="">
          {recipe.ingredients.map((item, id) => (
            <li key={'ingredient' + id}>
              <span className="font-bold">{item.ingredient}</span>
              {item.quantity
                ? item.unit
                  ? ' : ' + item.quantity + ' ' + item.unit
                  : ' : ' + item.quantity
                : null}
            </li>
          ))}
        </ul>
        <div className="w-1/2 text-justify max-h-32 text-ellipsis overflow-hidden p-1">
          {recipe.description}
        </div>
      </div>
    </Link>
  )
}
