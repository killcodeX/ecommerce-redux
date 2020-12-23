import { GetProducts, GetSingleProducts, BuyProduct } from "./actionConstant";
import { getProductsAPI, getSingleProductsAPI } from "../../api";

// actions
export const getProducts = () => async (dispatch) => {
  const result = await getProductsAPI();
  dispatch({
    type: GetProducts,
    payload: result,
  });
};

export const getSingleProduct = (id) => async (dispatch) => {
  const result = await getSingleProductsAPI(id);
  dispatch({
    type: GetSingleProducts,
    payload: result,
  });
};

export const buyProduct = (data) => {
    return {
        type: BuyProduct,
        payload: data
    }
  };