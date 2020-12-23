import axios from "axios";
export default async function getSingleProductsAPI(id) {
  var config = {
    method: "get",
    url: `https://fakestoreapi.com/products/${id}`,
  };

  try {
    const request = await axios(config);
    const { data: response } = request;

    return response;
  } catch (error) {
    console.log(error);
  }
}
