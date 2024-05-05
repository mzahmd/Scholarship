import FormContainer from "@/components/FormContainer";
import apiClient from "@/services/api-client";
import { useState } from "react";

type ChangeEvent = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void

interface FormProps {
  title: string;
  id: string;
  onChange: ChangeEvent;
}

function FormInput({ title, id, onChange }: FormProps) {
  return (
    <div className="mb-4 grid grid-cols-1 md:grid-cols-2">
      <label className="self-end block text-base font-bold" htmlFor={id}>{title}</label>
      <div>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={onChange} name={id} id={id} type="text" required />
      </div>
    </div>
  )
}

function FormDropdown({ title, id, onChange }: FormProps) {
  return (
    <div className="mb-4 grid grid-cols-1 md:grid-cols-2">
      <label className="self-end block text-base font-bold" htmlFor={id}>{title}</label>
      <select className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:border-blue-500 block p-2.5 dark:focus:border-blue-500" onChange={onChange} name={id} id={id} required>
        <option value={""} disabled selected></option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
  )
}

function FormInputNumber({ title, id, onChange }: FormProps) {
  return (
    <div className="mb-4 grid grid-cols-1 md:grid-cols-2">
      <label className="self-end block text-base font-bold" htmlFor={id}>{title}</label>
      <div>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={onChange} name={id} id={id} type="number" min={0} required />
      </div>
    </div>
  )
}

export default function ApplicationCreate() {
  const [department, setDepartment] = useState("")
  const [degree, setDegree] = useState("")
  const [facultysemester, setFacultysemester] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    apiClient.post("api/applications/create", { department, degree, facultysemester })
      .then(response => console.log(response.data))
      .catch(e => console.log(e.response.data))
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <FormContainer title={"Bewerbung erstellen"}>
        <FormInput title={"Fachbereich"} id={"department"} onChange={(e) => setDepartment(e.target.value)} />
        <FormDropdown title={"Studiengang"} id={"degree"} onChange={(e) => setDegree(e.target.value)} />
        <FormInputNumber title={"Fachsemester"} id={"facultysemester"} onChange={(e) => setFacultysemester(e.target.value)} />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Speichern
        </button>
      </FormContainer>
    </form>
  )
}