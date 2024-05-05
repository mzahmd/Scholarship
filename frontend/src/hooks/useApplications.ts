import useGetData from "./useGetData";

interface Application {
  _id: string;
  department: string;
  degree: string;
  facultysemester: string;
  userID: string;
}
export interface Application2 {
  department: string;
  degree: string;
  facultysemester: string;
  userID: string;
}

export default function useApplications() {
  const { data, error, isLoading } = useGetData<Application[]>("applications");

  if (!data || !data.length) {    
    return { data: null, error, isLoading };
  }

  return { data, error, isLoading };
}
