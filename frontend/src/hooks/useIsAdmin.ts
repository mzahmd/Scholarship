import useGetData from "./useGetData";

interface Response {
  isAdmin: boolean
}

export default function useIsAdmin() {
  const { data, error, isLoading } = useGetData<Response>("admin/isadmin");

  return { data, error, isLoading };
}
