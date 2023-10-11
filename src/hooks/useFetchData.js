import { useState, useEffect } from "react";

export function useFetchData(query, callback) {
  const [data, setUseFetchData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    callback?.();
    const controller = new AbortController();

    async function fetchData() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(query);
        console.log("Resolved", res);

        if (!res.ok)
          throw new Error("Something went wrong getting the quiz data");

        const data = await res.json();
        console.log("Data", data);

        // UPDATE RESPONSE_CODE TO MATCH API ERRORS
        if (data.Response === "False") throw new Error(data);
        setUseFetchData(data);
        setError("");
      } catch (err) {
        console.error(err.message);
        if (err.name !== "Abort Error") setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    // if (query.length < 3) {
    //   setUseQuizDataFetch([]);
    //   setError("");
    //   return;
    // }

    fetchData();

    return () => controller.abort();
  }, [query, callback]);

  return { data, isLoading, error };
}
