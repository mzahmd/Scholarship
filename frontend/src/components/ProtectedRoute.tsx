import { Navigate } from "react-router-dom";

import Spinner from "@/components/Spinner";

import useAuth from "@/hooks/useAuth";

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