import { User } from "@/interfaces/User";
import useGetData from "./useGetData";

export default function useUser() {
  const { data, error, isLoading } = useGetData<User>("user");

  if(!data) {
    return { data: {} as User, error, isLoading };
  }

  return { data, error, isLoading };
}
