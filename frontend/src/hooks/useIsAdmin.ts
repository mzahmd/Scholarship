import useGetData from "./useGetData";

interface Response {
  data: boolean;
  error: string;
  isLoading: boolean;
}

export default function useIsAdmin() {
  const { data: isAdmin, error, isLoading } = useGetData<Response>("admin");
  
  return { isAdmin, error, isLoading };
}
