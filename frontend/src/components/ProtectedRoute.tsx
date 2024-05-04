import { Navigate } from "react-router-dom"

import useAuth from "@/hooks/useAuth"

interface Props {
  children: React.ReactNode
}

export default function ProtectedRoute({ children }: Props) {
  const { error } = useAuth()

  if (error) {
    return <Navigate to={"/"} replace />
  }

  return children;
}