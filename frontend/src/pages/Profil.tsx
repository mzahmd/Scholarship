import Spinner from "@/components/Spinner";
import useUser from "@/hooks/useUser";

function ProfilInput({ label, value }: { label: string, value: string }) {
  return (
    <div className="mb-4 grid grid-cols-1 md:grid-cols-2">
      <label className="self-end block text-base font-bold" htmlFor="userID">{label}</label>
      <div>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="userID" type="text" defaultValue={value} />
      </div>
    </div>
  )
}

export default function Profil() {
  const { data: user, error, isLoading } = useUser()

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div className="mx-auto max-w-3xl rounded overflow-hidden shadow-lg dark:bg-slate-900">
      <div className="px-6 py-4">
        <div className="bg-gray-200 dark:bg-slate-900 font-bold text-2xl mb-2 p-1 rounded">Profil</div>
        <ProfilInput label={"Benutzer ID"} value={user._id} />
        <ProfilInput label={"E-Mail"} value={user.email} />
      </div>
    </div>
  )
}