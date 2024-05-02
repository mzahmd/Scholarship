import apiClient from "@/services/api-client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password_wdh, setPassword_wdh] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    apiClient.post("/api/auth/register", { email, password, password_wdh })
      .then(() => navigate("/user"))
      .catch((e) => {
        setPassword("")
        setPassword_wdh("")
        console.log(e.response.data.msg)
      })
  }

  return (
    <div className="w-full max-w-xs mx-auto">
      <form className="px-8 pt-6 pb-8 mb-4" onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            E-Mail-Adresse
          </label>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className="focus:border-sky-600 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="password">
            Passwort
          </label>
          <input onChange={(e) => setPassword(e.target.value)} value={password} className="focus:border-sky-600 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="password_wdh">
            Passwort wiederholen
          </label>
          <input onChange={(e) => setPassword_wdh(e.target.value)} value={password_wdh} className="focus:border-sky-600 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password_wdh" type="password" />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Registrieren
        </button>
      </form>
    </div>
  )
}