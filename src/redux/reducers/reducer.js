import {GetProducts, GetSingleProducts, BuyProduct,CartProduct, RemovefromCart} from '../actions/actionConstant';

const initialState = {
    Products: [],
    Product: false,
    TotalProduct:[],
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

        case CartProduct:
          const totalItemBuy = state.Products.filter((data1) =>
          state.buyProduct.some((data2) => data1.id === data2.id)
        );
        return {
          ...state,
          TotalProduct : totalItemBuy
        }

        case RemovefromCart:
        return {
          ...state,
          buyProduct : state.buyProduct.filter(product => product.id !== action.payload.id)
        }
  
      default:
        return state;
    }
  };
  
  export default ProductReducer;