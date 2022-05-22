import { useEffect } from 'react';
import axios from 'axios';

const productsUrl = 'https://course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const resp1 = await axios.get(productsUrl);
      const resp2 = await axios.get(randomUserUrl);
      console.log(resp1);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">global instance</h2>;
};
export default GlobalInstance;

/**
 * we can setup axios globals, and then import it directly in the app.js to let the globals be invoked, actually this appraoch has some downsides like : 
 - the setup global will be applied to all the requests.
 - like we did in our example, 'Accept':'application/json', means we will send our tokens left and right and fur security reasons we dont want this!!
 - that something will be fixed in custom instance
 */
