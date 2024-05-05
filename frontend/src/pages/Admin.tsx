import { adminColumns } from "@/components/Column";
import { DataTable } from "@/components/Datatable";
import Spinner from "@/components/Spinner";
import useAllUser from "@/hooks/useAllUser";

export default function Admin() {
  const { data: users, error, isLoading } = useAllUser()

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <>
      {users && <DataTable columns={adminColumns} data={users} />}
    </>
  )
}