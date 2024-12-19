import { useState, useEffect } from "react";

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | []>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};
