import apiClient from "@/services/api-client";
import { useState, useEffect } from "react";

export default function useAdmin() {
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    
    apiClient.get("api/admin").then((response) => setAdmin(response.data));
  }, []);

  return { isAdmin };
}
