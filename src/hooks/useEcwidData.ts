// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const useEcwidData = (endpoint: string) => {
//   const [data, setData] = useState<any>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<Error | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(endpoint);
//         setData(response.data);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [endpoint]);

//   return { data, isLoading, error };
// };

// export default useEcwidData;

//Когда нужна будет работа с состояниями, можно будет доработать и исспользовать хук
export {};
