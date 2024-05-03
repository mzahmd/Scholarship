// import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode
}

export default function ProtectedRoute({ children }: Props) {

  return (
    // <Navigate to={"/"} replace />
    children
  )
}