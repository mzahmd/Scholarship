import FormContainer from "@/components/FormContainer";

function FormInput({ title, id }: { title: string, id: string }) {
  return (
    <div className="mb-4 grid grid-cols-1 md:grid-cols-2">
      <label className="self-end block text-base font-bold" htmlFor={id}>{title}</label>
      <div>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={id} type="text" />
      </div>
    </div>
  )
}

function FormDropdown({ title, id }: { title: string, id: string }) {
  return (
    <div className="mb-4 grid grid-cols-1 md:grid-cols-2">
      <label className="self-end block text-base font-bold" htmlFor={id}>{title}</label>
      <select className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:border-blue-500 block p-2.5 dark:focus:border-blue-500" id={id}>
        <option value={""} disabled selected></option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
  )
}

function FormInputNumber({ title, id }: { title: string, id: string }) {
  return (
    <div className="mb-4 grid grid-cols-1 md:grid-cols-2">
      <label className="self-end block text-base font-bold" htmlFor={id}>{title}</label>
      <div>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={id} type="number" min={0} />
      </div>
    </div>
  )
}

export default function ApplicationCreate() {
  return (
    <FormContainer title={"Bewerbung erstellen"}>
      <FormInput title={"Fachbereich"} id={"department"} />
      <FormDropdown title={"Studiengang"} id={"degree"} />
      <FormInputNumber title={"Fachsemester"} id={"facultysemester"} />
    </FormContainer>
  )
}