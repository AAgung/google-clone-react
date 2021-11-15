import { useState, useEffect } from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = process.env.REACT_APP_GOOGLE_ENGINE_ID;

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      let url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`;
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);

  return { data };
}

export default useGoogleSearch;