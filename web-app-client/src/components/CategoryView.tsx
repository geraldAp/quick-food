
import { useQuery } from "@tanstack/react-query";
import { getMealsByCategory } from "@/utils/api";
import HomeMealView from "./reusables/HomeMealView";
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
   <HomeMealView heading={MealName} Meals={CategoryMeals!}/>
  );
};

export default CategoryView;
