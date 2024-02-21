import { useEffect } from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopPicks } from "@/utils/api";
import { setTopPicks, selectTopPicks } from "@/store/slices/mealSlice";
import { useQuery } from "@tanstack/react-query";
import MealCard from "./reusables/MealCards";

const TopPicks = () => {
  const dispatch = useDispatch();
  const { isPending, isError, data:TopPicks , error } = useQuery({
    queryKey: ["topPicks"],
    queryFn: getTopPicks,
  });
  return <div>

  </div>;
};

export default TopPicks;
