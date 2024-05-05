import useGetData from "./useGetData";

interface Response {
  msg: string
}

export default function useAuth() {
  const { error, isLoading } = useGetData<Response>("auth");

  return { error, isLoading };
}
