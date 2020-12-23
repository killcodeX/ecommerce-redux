import {GetProducts, GetSingleProducts, BuyProduct} from '../actions/actionConstant';

const initialState = {
    Products: [],
    Product: false,
    buyProduct : []
  };


  // Reducers
const ProductReducer = (state = initialState, action) => {
    switch (action.type) {

      case GetProducts:
        return {
          ...state,
          Products : action.payload
        }

        case GetSingleProducts:
        return {
          ...state,
          Product : action.payload
        }

        case BuyProduct:
        return {
          ...state,
          buyProduct : [action.payload, ...state.buyProduct]
        }
  
      default:
        return state;
    }
  };
  
  export default ProductReducer;