interface Props {
  errorMsg: string
}

export default function ErrorMsg({ errorMsg }: Props) {
  return (
    <div className="flex justify-between p-4 mb-5 text-sm text-red-800 rounded bg-red-50 dark:bg-gray-800 dark:text-red-400">
      {errorMsg}
    </div>
  )
}