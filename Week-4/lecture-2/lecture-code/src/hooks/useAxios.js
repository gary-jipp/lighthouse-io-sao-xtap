import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';

const useAxios = function(url) {
  const [body, setBody] = useState({});
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);

    setTimeout(() => {

      axios.get(url)
        .then(res => {
          setPending(false);
          setError(null);
          setBody(res.data);
        })
        .catch(err => {
          setPending(false);
          setError(err.message);
          setBody(null);
        });

    }, 2000);




  }, [url]);


  return { body, error, pending };
};

export default useAxios;