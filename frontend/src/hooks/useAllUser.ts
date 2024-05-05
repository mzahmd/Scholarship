import useGetData from "./useGetData";

import { User } from "@/interfaces/User";

export default function useAllUser() {
  const { data, error, isLoading } = useGetData<User[]>("user/all");

  return { data, error, isLoading };
}
