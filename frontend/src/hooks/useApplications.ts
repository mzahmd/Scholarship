import useGetData from "./useGetData";

import { Application } from "@/interfaces/Application";

export default function useApplications() {
  const { data, error, isLoading } = useGetData<Application[]>("applications");

  if (!data || !data.length) {    
    return { data: null, error, isLoading };
  }

  return { data, error, isLoading };
}
