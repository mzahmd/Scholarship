import apiClient from "../services/api-client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if(!email || !password) {
      return;
    }

    apiClient.post("/api/auth/login", { email, password })
      .then(() => navigate("/user"))
      .catch((e) => {
        console.log("error")
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
          <input onChange={(e) => setEmail(e.target.value)} value={email} className="focus:border-sky-600 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name="email" />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="password">
            Passwort
          </label>
          <input onChange={(e) => setPassword(e.target.value)} value={password} className="focus:border-sky-600 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name="password" />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Anmelden
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Passwort vergessen?
          </a>
        </div>
      </form>
    </div>
  )
}