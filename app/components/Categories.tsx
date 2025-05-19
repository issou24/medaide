import Image from 'next/image';

const Categories = () => {
    return  (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                        src="/icn_category_beach.jpeg"
                        alt="Category - Beach"
                        width={20}
                        height={20}
                />

                <span className='text-xs'>Médecine Général</span>
            </div>

            <div className="pb-4 flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                        src="/icn_category_beach.jpeg"
                        alt="Category - Beach"
                        width={20}
                        height={20}
                />

                <span className='text-xs'>Pédiatrie</span>
            </div>

            <div className="pb-4 flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                        src="/icn_category_beach.jpeg"
                        alt="Category - Beach"
                        width={20}
                        height={20}
                />

                <span className='text-xs'>Gynécologie-obstétrique</span>
            </div>

            <div className="pb-4 flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                        src="/icn_category_beach.jpeg"
                        alt="Category - Beach"
                        width={20}
                        height={20}
                />

                <span className='text-xs'>Psychiatrie</span>
            </div>

            <div className="pb-4 flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                        src="/icn_category_beach.jpeg"
                        alt="Category - Beach"
                        width={20}
                        height={20}
                />

                <span className='text-xs'>Médecine d’urgence</span>
            </div>

            <div className="pb-4 flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                        src="/icn_category_beach.jpeg"
                        alt="Category - Beach"
                        width={20}
                        height={20}
                />

                <span className='text-xs'>Anesthésie-Réanimation</span>
            </div>

            <div className="pb-4 flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                        src="/icn_category_beach.jpeg"
                        alt="Category - Beach"
                        width={20}
                        height={20}
                />

                <span className='text-xs'>Radiologie</span>
            </div>

            <div className="pb-4 flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                        src="/icn_category_beach.jpeg"
                        alt="Category - Beach"
                        width={20}
                        height={20}
                />

                <span className='text-xs'>Médecine du travail</span>
            </div>

            <div className="pb-4 flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                        src="/icn_category_beach.jpeg"
                        alt="Category - Beach"
                        width={20}
                        height={20}
                />

                <span className='text-xs'>Dermatologie</span>
            </div>
        </div>
    )
}


export default Categories