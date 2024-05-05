import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

export default function useGetData<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<T>(`/api/${endpoint}`)
      .then((response) => {
        setLoading(false);
        setData(response.data);        
      })
      .catch((e) => {
        setLoading(false);
        setData(null)
        setError(e.response.data);
      });
  }, [endpoint]);

  return { data, error, isLoading };
}
