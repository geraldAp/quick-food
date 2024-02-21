import { Image } from "sanity";

// Api types

export type Meal = {
  _id: string;
  name: string;
  description: string;
  image: Image;
  category: string;
  price: string;
  hotPick: boolean;
  rating: string
};

export type Category = {
    _id: string ,
    name: string 
    description: string 
    image: Image
}