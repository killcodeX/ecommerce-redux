import axios from "axios";

const url = 'http://localhost:5000/products'

export default async function getSingleProductsAPI(id) {
  try {
    const { data } = await axios.get(`${url}/${id}`);
    return data;
  } catch (error) {
    console.log("Error while getting data", error);
  }
}
