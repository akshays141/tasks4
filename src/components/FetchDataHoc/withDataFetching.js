import { useEffect, useState } from "react";


const WithDataFetch = (WrappedComponent, url) => {
    return function WithDataFetchComponent(props){
        const [data, setData] = useState(null);
        const [isLoading, setIsLoading] = useState(true);
        const [error, setError] = useState('');

        useEffect(() => {
            const fetchData = async () => {
                try {
                  const response = await fetch(url);
               
                  const result = await response.json();
                  setData(result);
                } catch (error) {
                  setError(error.message);
                } finally {
                  setIsLoading(false);
                }
              };
        
              fetchData();
        },[url]);

        if (isLoading) {
            return <div>Loading...</div>;
          }
      
          if (error) {
            return <div>Error: {error}</div>;
          }

        return <WrappedComponent data={data}  {...props} />;
    }
};

export default WithDataFetch;