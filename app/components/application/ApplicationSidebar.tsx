const ApplicationSidebar = () => {
    return (
        <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <h2 className="mb-5 text-2xl">ttttt</h2>

            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label className="mb-2 block font-bold text-xs">info</label>

                <select className="w-full -ml-1 text-xm">
                    <option>A</option>
                    <option>B</option>
                </select>
            </div>

            <div className="w-full mb-6 py-6 text-center text-white bg-medaide hover:bg-medaide-dark rounded-xl">Valider la candidature</div>

            <div className="mb-4 flex justify-between align-center">
                <p>  va sauter</p>
                <p> peut etre validation</p>
            </div>

            <div className="mt-4 flex justify-between align-center font-bold">
                <p>  paye</p>
                <p> ho vey ho vey goy</p>
            </div>
        </aside>
    )
}

export default ApplicationSidebar