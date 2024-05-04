export default function ApplicationCreate() {
  return (
    <div className="mx-auto max-w-3xl rounded overflow-hidden shadow-lg dark:bg-slate-900">
      <div className="px-6 py-4">
        <div className="bg-gray-200 dark:bg-slate-900 font-bold text-2xl mb-2 p-1 rounded">Bewerbung erstellen</div>
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2">
          <label className="self-end block text-base font-bold" htmlFor="userID">Fachbereich</label>
          <div><input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="userID" type="text" /></div>
        </div>
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2">
          <label className="self-end block text-base font-bold" htmlFor="userID">Studiengang</label>
          <select className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:border-blue-500 block p-2.5 dark:focus:border-blue-500">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2">
          <label className="self-end block text-base font-bold" htmlFor="userID">Fachsemester</label>
          <div><input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="userID" type="number" min={0} /></div>
        </div>
      </div>
    </div>
  )
}