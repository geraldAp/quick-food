import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMeals } from "@/utils/api";
import { useDispatch } from "react-redux";
import { setMeal } from "@/store/slices/mealSlice";
import TopPicks from "@/components/TopPicks";
import CategoryView from "@/components/CategoryView";
import Hero from "./components /Hero";
import Categories from "@/components/categories";
const Home = () => {
  const dispatch = useDispatch();
  const [view, setView] = useState<string>("TopPicks");
  const [category, setCategory] = useState<string>("");

  const { data: Meals } = useQuery({
    queryKey: ["Meals"],
    queryFn: getMeals,
  });
  useEffect(() => {
    if (Meals) {
      console.log("data to check if this works ", Meals);
      dispatch(setMeal(Meals));
    }
  }, [Meals]);

  const changeView = (view: string) => {
    setView(view);
  };

  return (
    <main>
      <section id="Hero">
        <Hero />
      </section>
      <section className="min-h-screen">
        {/* Categories */}
        <section className="w-full">
          <Categories
            category={category}
            setCategory={setCategory}
            changeView={changeView}
          />
        </section>
        {/* Top picks || Category View */}
        <section className="mx-auto w-[85%]">
          {view === "TopPicks" ? (
            <TopPicks />
          ) : (
            <CategoryView category={category} />
          )}
        </section>
      </section>
    </main>
  );
};

export default Home;
