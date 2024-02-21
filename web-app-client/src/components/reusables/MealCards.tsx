import React from "react";
import { Image } from "sanity";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { urlFor } from "../../sanity";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import {
  selectFavoriteMeals,
  deleteFavoriteMeal,
  addFavoriteMeals,
} from "../../store/slices/mealSlice";

interface MealCardsProps {
  name: string;
  image: Image;
  rating: string;
  price: string;
  category: string;
  description: string;
  _id: string;
}

const MealCards: React.FC<MealCardsProps> = ({
  name,
  image,
  rating,
  price,
  category,
  description,
  _id,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const favorites = useSelector(selectFavoriteMeals);
  const meal = {
    name,
    image,
    rating,
    price,
    category,
    description,
    _id,
  };
  // meal saved logic
  const isMealSaved = favorites.some((meal) => meal._id === _id);
  const handlePress = () => {
    navigation(`/mealDetails/${_id}`);
  };
  // stars
  const stars = Array.from({ length: Math.floor(Number(rating)) }).map(
    (_, index) => (
      <span key={index} className="text-yellow-500">
        ★
      </span>
    )
  );
  const favoritesHandler = (_id: string) => {
    const exists = favorites.some((favMeal) => favMeal._id === _id);
    if (exists) {
      dispatch(deleteFavoriteMeal({ id: _id }));
    } else {
      dispatch(addFavoriteMeals(meal));
    }
  };
  return (
    <div onClick={handlePress}>
      <div className="h-[350px] flex flex-col overflow-hidden shadow-sm hover:shadow-md duration-500 ease-in bg-gray-200 rounded-3xl">
        <div className="w-full relative h-[60%]">
          <img
            className="w-[100%] h-[100%] "
            src={urlFor(image).url()}
            alt={name}
          />
          <div className="absolute top-3 left-4 flex-row items-center gap-2">
            {/* Add your clock icon or any other content here */}
          </div>
        </div>
        <div className="py-2 px-3 justify-center bg-white flex-1 ">
          <div className="flex justify-between items-center mb-2 ">
            <span className="text-base capitalize font-semibold">{name}</span>
            {/* Add your FavoritesButton component here */}
            <div className="text-customOrange text-xl">
              {isMealSaved ? <FaHeart /> : <FaRegHeart />}
            </div>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="rounded-lg shadow-md p-2  bg-[#f1b576] opacity-95">
              <span className="text-sm text-[#f97316] ">Price: ${price}</span>
            </div>
            <div className="rounded-lg shadow-md p-2  bg-[#f1b576] opacity-95">
              <span className="text-sm text-[#f97316] ">{category} </span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            {/* Add your StarRating component here */}
            {stars}•<span className="text-sm font-semibold">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCards;
