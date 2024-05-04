import apiClient from "@/services/api-client"
import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

interface Props {
  children: React.ReactNode
}

export default function ProtectedRoute({ children }: Props) {
  const [error, setError] = useState("")

  useEffect(() => {
    apiClient.get("/api/auth")
      .then(() => setError(""))
      .catch((e) => setError(e.response.data))
  }, [children])
  
  if (error) {
    return <Navigate to={"/"} replace />
  }

  return children;
}