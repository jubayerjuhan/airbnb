import { rapidApiClient } from "../api/client";
import { Dispatch } from "redux";
interface CategoryDispatchType {
  type: string;
  payload: any;
}
export const getAllAirbnbCategories =
  () => async (dispatch: Dispatch<CategoryDispatchType>) => {
    const response = await rapidApiClient.get("/getCategory");
    dispatch({ type: "SET_CATEGORY", payload: response.data?.data });
  };
