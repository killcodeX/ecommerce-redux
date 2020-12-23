import {GetProducts} from './actionConstant';
import { getProductsAPI } from '../../api';




// actions
export const getProducts = () => async (dispatch) => {

    const result = await getProductsAPI();
    dispatch({
        type:GetProducts,
        payload: result
    })
}