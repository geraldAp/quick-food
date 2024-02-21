
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopPicks } from "@/utils/api";
import { setTopPicks, selectTopPicks } from "@/store/slices/mealSlice";
import { useQuery } from "@tanstack/react-query";
import MealCard from "./reusables/MealCards";
import HomeMealView from "./reusables/HomeMealView";

const TopPicks = () => {
  const dispatch = useDispatch();
  const { isPending, isError, data:TopPicks , error } = useQuery({
    queryKey: ["topPicks"],
    queryFn: getTopPicks,
  });
  return <HomeMealView heading="Top Picks" Meals={TopPicks!}/>
};

export default TopPicks;
