import { Navigate } from "react-router-dom"

import useAuth from "@/hooks/useAuth"
import Spinner from "./Spinner"

interface Props {
  children: React.ReactNode
}

export default function ProtectedRoute({ children }: Props) {
  const { error, isLoading } = useAuth();

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <Navigate to={"/"} replace />
  }

  return children;
}