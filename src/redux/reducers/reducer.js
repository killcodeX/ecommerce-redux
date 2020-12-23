import {GetProducts, GetSingleProducts} from '../actions/actionConstant';

const initialState = {
    Products: [],
    Product: false,
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
  
      default:
        return state;
    }
  };
  
  export default ProductReducer;