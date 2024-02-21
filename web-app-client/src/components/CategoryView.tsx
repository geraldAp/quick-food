import React from "react";
import MealCard from "./reusables/MealCards";
import { useQuery } from "@tanstack/react-query";
import { getMealsByCategory } from "@/utils/api";
const CategoryView = ({ category }: { category: string }) => {
  const MealName = category;

  const {
    isPending,
    isError,
    data: CategoryMeals,
    error,
  } = useQuery({
    queryKey: ["categoryMeals", category],
    queryFn: () => getMealsByCategory(category),
  });

  return (
    <section className="min-h-[70vh]">
      <h2 className="text-2xl font-bold mb-4">{MealName}</h2>
      {/* Loader section */}

      {/* View */}
      <section className="grid grid-cols-3 gap-6 pt-6">
        {CategoryMeals?.map((meal) => (
          <MealCard {...meal} />
        ))}
      </section>
    </section>
  );
};

export default CategoryView;
