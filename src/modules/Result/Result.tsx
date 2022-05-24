import { useParams } from 'react-router-dom'
import { recipes } from '@assets'
import { Card } from 'modules/Home/Components'
import MdiClockTimeTwoOutline from 'assets/img/MdiClockTimeTwoOutline'

export function Result() {
  const { id } = useParams()

  const recipe = recipes.find((el) => el.id.toString() === id)

  return (
    <main>
      <section className="sm:m-10">
        <h2 className="text-center text-4xl mb-5 font-bold">{recipe?.name}</h2>
        <article className="shadow-lg rounded-xl">
          <div className="h-48">
            <img
              src={`/imgs/recipes/${recipe?.poster}`}
              className="object-cover w-full max-h-48 rounded-t-xl"
            />
          </div>

          <div className="p-2 items-center">
            <div className="sm:flex m-5">
              <div className="w-full sm:w-1/2">
                <h3 className="text-xl font-bold underline">Ingrédients :</h3>
                <ul className="">
                  {recipe?.ingredients.map((item) => (
                    <li>
                      <span className="font-bold">{item.ingredient}</span>
                      {item.quantity
                        ? item.unit
                          ? ' : ' + item.quantity + ' ' + item.unit
                          : ' : ' + item.quantity
                        : null}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold underline">Durée :</h3>
                <div className="flex items-center gap-1">
                  <MdiClockTimeTwoOutline /> {recipe?.time} min
                </div>
              </div>
            </div>
            <div className="">
              <ul className="w-full sm:w-2/3 text-justify list-decimal p-10">
                {recipe?.description.split('.').map((item, id) => (
                  <li key={id}>{item}.</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}
