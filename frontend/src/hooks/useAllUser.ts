import useGetData from "./useGetData";

export interface User {
  _id: string;
  email: string;
}

export default function useAllUser() {
  const { data, error, isLoading } = useGetData<User[]>("user/all");

  return { data, error, isLoading };
}
