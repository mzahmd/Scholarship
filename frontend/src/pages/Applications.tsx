import { useNavigate } from "react-router-dom";

import Spinner from "@/components/Spinner";

import useIsAdmin from "@/hooks/useIsAdmin";
import useApplications from "@/hooks/useApplications";

export default function Applications() {
  const { data: isAdmin } = useIsAdmin()
  const navigate = useNavigate()
  const { data: applications, error, isLoading } = useApplications()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    navigate("/applications/create")
  }

  if (error) {
    return <p>{error}</p>
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      {applications && <p className="text-lg">Sieht so aus als ob es keine Bewerbungen gäbe</p>}
      {!isAdmin &&
        <form onSubmit={(e) => handleSubmit(e)}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3" type="submit">
            Bewerbung erstellen
          </button>
        </form>}
    </>
  )
}