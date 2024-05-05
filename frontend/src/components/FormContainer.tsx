interface Props {
  children: React.ReactNode;
  title: string;
}

export default function FormContainer({ children, title }: Props) {
  return (
    <div className="mx-auto max-w-3xl rounded overflow-hidden shadow-lg dark:bg-slate-900">
      <div className="px-6 py-4">
        <div className="bg-gray-200 dark:bg-slate-900 font-bold text-2xl mb-2 p-1 rounded">{title}</div>
        {children}
      </div>
    </div>
  )

}