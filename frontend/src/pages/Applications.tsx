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
      {!applications ? <p className="text-lg">Sieht so aus als ob es keine Bewerbungen gäbe</p>
        :
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-collapse border-slate-400">
            <thead className="text-xl text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Fachbereich
                </th>
                <th scope="col" className="px-6 py-3">
                  Studiengang
                </th>
                <th scope="col" className="px-6 py-3">
                  Fachsemester
                </th>
              </tr>
            </thead>
            <tbody>
              {applications.map(application =>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {application.department}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {application.degree}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {application.facultysemester}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
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