import { useEffect, useState } from "react";

import apiClient from "@/services/api-client";

export default function useAuth() {
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient.get("/api/auth")
      .catch((e) => setError(e.response.data))
  }, [])

  return { error }

}