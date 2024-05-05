import FormContainer from "@/components/FormContainer";
import Spinner from "@/components/Spinner";
import useUser from "@/hooks/useUser";

function FormInput({ label, value }: { label: string, value: string }) {
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
    <FormContainer title={"Profil"}>
      <FormInput label={"Benutzer ID"} value={user._id} />
      <FormInput label={"E-Mail"} value={user.email} />
    </FormContainer>
  )
}