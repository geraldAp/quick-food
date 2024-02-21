import React, { useState } from "react";
import { urlFor } from "@/sanity";
import { getCategories } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { Category } from "@/utils/types";
import ScrollView from "./ScrollView";

interface Props {
  category: string;
  setCategory: any;
  changeView: any;
}
const Categories: React.FC<Props> = ({ category, setCategory, changeView }) => {
  const { data: categories, isPending } = useQuery({
    queryKey: ["Categories"],
    queryFn: getCategories,
  });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const HandleCategoryChange = (id: string, name: string) => {
    if (category === name) {
      setCategory(null);
      changeView("TopPicks");
      setActiveCategory(null);
    } else {
      setCategory(name);
      changeView("CategoryMeal");
      setActiveCategory(id);
    }
  };

  return (
    <div className="w-[80%] mx-auto flex justify-center">
      <ScrollView>
        {categories?.map((cat: Category) => {
          const isActive = cat._id === activeCategory;
          const btnClass = isActive ? "bg-gray-600" : "bg-gray-200";
          const textClass = isActive
            ? "font-semibold text-gray-800"
            : "text-gray-500";
          return (
            <div key={cat._id} className="flex flex-col gap-2 justify-center mr-6">
              <div
                onClick={() => HandleCategoryChange(cat._id, cat.name)}
                className={`h-24 w-24  rounded-full overflow-hidden shadow bg-gray-200 cursor-pointer hover:opacity-75 duration-300 ease-in ${btnClass}`}
              >
                <img
                  className="w-full h-full object-cover object-center"
                  src={urlFor(cat?.image).url()}
                  alt={cat?.name}
                />
              </div>
              <p className={`${textClass} text-sm text-center`}>{cat?.name}</p>
            </div>
          );
        })}
      </ScrollView>
    </div>
  );
};

export default Categories;
