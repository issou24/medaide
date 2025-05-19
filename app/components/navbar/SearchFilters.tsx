const SearchFilters = ()  => {
    return (
        <div className="h-[64px] flex flex-row items-center justify-between border rounded-full">
  
  {/* Bloc des champs - visible uniquement en grand écran */}
            <div className="hidden lg:flex flex-row items-center justify-between">
    {/* Destination */}
                <div className="w-[250px] h-[64px] px-8 flex justify-center flex-col rounded-full hover:bg-gray-100">
                    <h1 className="font-semibold">Découvrir les offres</h1>
                    <p className="text-sm">Où ?</p>
                </div>

    {/* Date d'arrivée */}
                <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                    <p className="text-xs font-semibold">Date d'arrivée :</p>
                    <p className="text-sm">Ajouter une date</p>
                </div>

    {/* Date de départ */}
                <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                    <p className="text-xs font-semibold">Date de départ :</p>
                    <p className="text-sm">Ajouter une date</p>
                </div>
            </div>

  {/* Loupe - toujours visible, bien positionnée */}
            <div className="p-2">
                <div className="cursor-pointer p-2 lg:p-4 bg-medaide hover:bg-medaide-dark transition rounded-full text-white">
                <svg 
                    viewBox="0 0 32 32" 
                    style={{
                    display: 'block',
                    fill: 'none',
                    height: '16px',
                    width: '16px',
                    stroke: 'currentColor',
                    strokeWidth: 4,
                    overflow: 'visible'
                    }} 
                    aria-hidden="true" role="presentation" focusable="false"
                >
                <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                </svg>
                </div>
            </div>
        </div>

    )
}

export default SearchFilters;