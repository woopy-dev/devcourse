import { useEffect, useState } from "react";
import { Category } from "../models/category.model";
import { fetchCategory } from "../api/category.api";
import { useLocation } from "react-router-dom";

export const useCategory = () => {
  const location = useLocation();
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    // fetchCategory().then((category) => {
    //   const categoryWithAll = [
    //     {
    //       id: null,
    //       name: "전체"
    //     },
    //     ...category
    //   ]

    //   setCategory(categoryWithAll);
    // });

    setCategory([
      {
        id: null,
        name: "전체"
      },
      {
        id: 0,
        name: "동화"
      },
      {
        id: 1,
        name: "소설"
      },
      {
        id: 2,
        name: "사회"
      }
    ])
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('category_id')) {
      setCategory((prev) => {
        return prev.map((item) => ({
          ...item,
          isActive: item.id === Number(params.get('category_id'))
        }));
      });
    } else {
      setCategory((prev) => {
        return prev.map((item) => ({
          ...item,
          isActive: false
        }));
      });
    }
  }, [location.search]);

  return { category };
}