import axios from 'axios';


export default async function getProductsAPI() {
  
    var config = {
      method: "get",
      url: "https://fakestoreapi.com/products",
    };
  
    try {
      const request=  await axios(config)
      const {data: response} = request;
        if(response.length > 0){
            return  response
        }
       return false;
  
      } catch (error) {
      console.log(error)
    }
  }
  