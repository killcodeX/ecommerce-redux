import axios from 'axios';


export default async function getProductsAPI() {
  
    var config = {
      method: "get",
      url: "https://fakestoreapi.com/products",
    };
  
    try {
      const request=  await axios(config)
      const {data: response} = request;
      //console.log(request)
        if(response > 0){
            return  response.data
        }
       return false;
  
      } catch (error) {
      console.log(error)
    }
  }
  