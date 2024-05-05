import { useNavigate } from "react-router-dom";

import Spinner from "@/components/Spinner";

import useIsAdmin from "@/hooks/useIsAdmin";
import useApplications from "@/hooks/useApplications";
import { DataTable } from "@/components/Datatable";
import { applicationColumns } from "@/components/Column";

export default function Applications() {
  const navigate = useNavigate()
  const { data: isAdmin } = useIsAdmin()
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
      {!applications ? <p className="text-lg">Sieht so aus als ob es keine Bewerbungen gäbe</p>
        :
        <div className="overflow-x-auto">
          <DataTable columns={applicationColumns} data={applications} />
        </div>}
      {!isAdmin &&
        <form onSubmit={(e) => handleSubmit(e)}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3" type="submit">
            Bewerbung erstellen
          </button>
        </form>}
    </>
  )
}