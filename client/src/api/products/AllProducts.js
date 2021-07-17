import axios from "axios";

const url = 'http://localhost:5000/products'

  const getProductsAPI = async () => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log("Error while getting data", error);
  }
}


export default getProductsAPI;

// var config = {
//   method: "get",
//   url: "https://fakestoreapi.com/products",
// };

//   try {
//     const request=  await axios(config)
//     const {data: response} = request;
//       if(response.length > 0){
//           return  response
//       }
//      return false;

//     } catch (error) {
//     console.log(error)
//   }
// }
