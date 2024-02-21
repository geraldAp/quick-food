import React from 'react'
import MealCard from './MealCards'
import { Meal } from '@/utils/types'

type Props = {
    heading : string 
    Meals : Meal[]
}

const HomeMealView = ({heading , Meals}: Props) => {
  return (
    <section className="min-h-[70vh] mb-10">
    <h2 className="text-2xl font-bold mb-4">{heading}</h2>
    {/* Loader section */}

    {/* View */}
    <section className="grid grid-cols-3 gap-6 pt-6">
      {Meals?.map((meal) => (
        <MealCard {...meal} />
      ))}
    </section>
  </section>
  )
}

export default HomeMealView