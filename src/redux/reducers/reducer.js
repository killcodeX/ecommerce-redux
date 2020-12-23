import {GetProducts} from '../actions/actionConstant';

const initialState = {
    Products: [],
    Product: [],
  };


  // Reducers
const ProductReducer = (state = initialState, action) => {
    switch (action.type) {

      case GetProducts:
        return {
          ...state,
          Products : [action.payload]
        }
  
      default:
        return state;
    }
  };
  
  export default ProductReducer;