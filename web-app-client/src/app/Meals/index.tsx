import React from 'react'
import MealView from '@/components/reusables/HomeMealView'
import { getMeals } from '@/utils/api'
import { useQuery } from '@tanstack/react-query'


const Meals = () => {

  const {isPending , data: AllMeals} = useQuery({
    queryKey: ['allMeals'],
    queryFn: getMeals
  })
  return (
    <main className='mt-[20vh] min-h-screen'>
      {/* all Meals view */}
      <section className='w-[85%] mx-auto'>
<MealView heading='Our Meals ' Meals={AllMeals!}/>
      </section>
    </main>
  )
}

export default Meals
