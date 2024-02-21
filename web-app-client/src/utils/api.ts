import { client } from "@/sanity";
import { Category, Meal } from "./types";

// get categories
export const getCategories = (): Promise<Category[]> => {
  const data = client.fetch(`*[_type=='category']`);
  return data;
};

export const getMeals = (): Promise<Meal[]> => {
  const data = client.fetch(
    `
    *[_type=='meal']{
      _id,
        name,
        description,
        image,
      'category': mealCategory->name,
        price,
        hotPick,
        rating
    }
    `
  );

  return data;
};
export const getMealsById = (id: string): Promise<Meal> => {
  const data = client.fetch(
    `*[_type=='meal' && _id == $id][0]{
            _id,
            name,
            description,
            image,
          'category': mealCategory->name,
            price,
            hotPick,
            rating
            }`,
    { id }
  );

  return data;
};

export const getMealsByCategory = (category: string): Promise<Meal[]> => {
  const data = client.fetch(
    `*[_type=='meal' && mealCategory->name == $category]{
        _id,
        name,
        description,
        image,
      'category': mealCategory->name,
        price,
        hotPick,
        rating
    }`,
    { category }
  );

  return data;
};

export const getTopPicks = (): Promise<Meal[]> => {
  const data = client.fetch(`*[_type=='meal' && hotPick == true]{
    _id,
    name,
    description,
    image,
    rating,
    'category': mealCategory->name,
    price,
    hotPick,
  }`);

  return data;
};
