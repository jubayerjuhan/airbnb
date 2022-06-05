import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { rapidApiClient } from "../../api/client";

import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import "./Categorybar.scss";

interface CategoryDispatchType {
  type: string;
  payload?: any;
}
const Categorybar = () => {
  const dispatch = useDispatch() as Dispatch<CategoryDispatchType>;

  useEffect(() => {
    getAllAirbnbCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // get Category from api
  const getAllAirbnbCategories = async () => {
    dispatch({ type: "CATEGORY_LOADING" });
    const response = await rapidApiClient.get("/getCategory");
    dispatch({ type: "SET_CATEGORY", payload: response.data?.data });
  };

  const { categories, loading }: Categories = useSelector(
    (state: any) => state.category
  );

  return (
    <div className="categorybar flex gap-10 overflow-scroll py-4">
      {categories.map((category: Category) => (
        <div className="category flex flex-col justify-center items-center min-w-max cursor-pointer">
          {loading ? (
            <>
              <SkeletonLoader height="30px" width="30px" />
              <SkeletonLoader height="10px" width="60px" className="mt-2" />
            </>
          ) : (
            <>
              <img
                src={category.image}
                alt={category.title}
                className={"h-8 w-8 filter-grayscale"}
              />
              <p className="text-[13px] text-[gray] font-semibold mt-2">
                {category.title}
              </p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Categorybar;

interface Category {
  id: string;
  title: string;
  image: string;
}

interface Categories {
  loading: boolean;
  error: string;
  categories: Category[];
}
