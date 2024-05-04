import { useEffect, useState } from "react"
import Spinner from "@/components/Spinner";
import useAdmin from "@/hooks/useAdmin";
import apiClient from "@/services/api-client"
import { useNavigate } from "react-router-dom";

interface Applications {
  department: string;
  degree: string;
  facultysemester: string;
  userID: string;
}

export default function Applications() {
  const { isAdmin } = useAdmin()
  const navigate = useNavigate()
  const [isLoading, setLoading] = useState(false)
  const [applications, setApplications] = useState("")

  useEffect(() => {
    setLoading(true)
    apiClient.get("/api/applications")
      .then(response => {
        setLoading(false)
        setApplications(response.data)
      })
      .catch(e => console.log("error", e.response))
  }, [])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    navigate("/applications/create")
  }

  return (
    <>
      {isLoading ? <Spinner />
        :
        applications && <p className="text-lg">Sieht so aus als ob es keine Bewerbungen gäbe</p>}
      {!isAdmin &&
        <form onSubmit={(e) => handleSubmit(e)}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3" type="submit">
            Bewerbung erstellen
          </button>
        </form>
      }
    </>
  )
}