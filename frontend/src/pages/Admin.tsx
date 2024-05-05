import Spinner from "@/components/Spinner";
import useAllUser from "@/hooks/useAllUser";

export default function Admin() {
  const { data: users, error, isLoading } = useAllUser()

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-collapse border-slate-400">
        <thead className="text-xl text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Benutzer ID
            </th>
            <th scope="col" className="px-6 py-3">
              E-Mail
            </th>
          </tr>
        </thead>
        <tbody>
          {users && users.map(user =>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user._id}
              </th>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.email}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>

  )
}