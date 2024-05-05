import useGetData from "./useGetData";

interface User {
  _id: string;
  email: string;
}

export default function useUser() {
  const { data, error, isLoading } = useGetData<User>("user");

  if(!data) {
    return { data: {} as User, error, isLoading };
  }

  return { data, error, isLoading };
}
