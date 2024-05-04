import { useEffect, useState } from "react";

import apiClient from "@/services/api-client";

export default function useAuth() {
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    apiClient.get("/api/auth")
      .then(() => setLoading(false))
      .catch((e) => setError(e.response.data))
  }, [])

  return { error, isLoading }

}