import { Button } from "./ui/button";
import apiClient from "@/services/api-client";

export default function SignOutButton() {

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    apiClient.post("api/auth/logout", {})
      .catch(e => console.log(e.response.data))
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Button className="h-max me-2" type="submit">Abmelden</Button>
    </form>
  )
}