import Image from 'next/image';

const Categories = () => {
    return  (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex-col items-center space-y-2 border-b-2 opacity-60 hover:opacity-100">
                <Image
                        src="/icn_category_beach.jpeg"
                        alt="Category - Beach"
                        width={20}
                        height={20}
                />
            </div>
        </div>
    )
}


export default Categories