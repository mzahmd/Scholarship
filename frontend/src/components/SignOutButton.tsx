import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

import apiClient from "@/services/api-client";

export default function SignOutButton() {
  const navigate = useNavigate()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    apiClient.post("api/auth/logout", {})
      .then(() => navigate("/"))
      .catch(e => console.log(e.response.data))
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Button className="h-max me-2 hover:bg-slate-700 dark:hover:bg-slate-600" type="submit">Abmelden</Button>
    </form>
  )
}