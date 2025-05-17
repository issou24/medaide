const SearchFilters = ()  => {
    return (
        <div className="h-[64px] flex flex-row items-center justify-between border rounded-full">
            <div className="flex flex-row items-center justify-between">
                <div className="w-[250px] h-[64px] px-8 flex justify-center flex-col rounded-full hover:bg-gray-100">
                    <p className="text-xs font-semibold">Where?</p>
                    <p className="text-sm">Where doc?</p>
                </div>
            </div>
        </div>
    )
}

export default SearchFilters;