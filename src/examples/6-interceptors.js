import { useEffect } from 'react';
import authFetch from '../axios/interceptors';

const url = 'https://course-api.com/react-store-products';

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const resp = await authFetch('/react-store-productss');
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">interceptors</h2>;
};
export default Interceptors;

/**
 *
 * Interceptors are functions that axios calls for every request and we can use them to transform the request before it leaves the application, as well add some custom logic when we handle the response.
 * In general Interceptors make way more sense in complex application, for example authentication.
 * Interceptors could be add to custom instances and axios globals
 */
