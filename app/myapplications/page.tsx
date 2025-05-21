import Image from "next/image";
import ApplicationList from "@/app/components/application/ApplicationList";
import ContactButton from "@/app/ContactButton";

const MyApplicationsPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className="mt-6 mb-2 text-2xl">Med app</h1>

            <div className="pt-6 pb-2">
                <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                fill
                                src="/beach_1.jpg"
                                className="hover:scale-110 object-cover transition h-full w-full"
                                alt="applications"
                            />    
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-3 space-y-2">
                        <h2 className="mb-4 text-xl"> detail appli</h2>

                        <p><strong>lieu</strong></p>

                        <p><strong>deb</strong></p>
                        <p><strong>fin</strong></p>

                        <p><strong>fin</strong></p>
                    </div>
                </div>
            </div>

             <div className="pt-6 pb-2">
                <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                fill
                                src="/beach_1.jpg"
                                className="hover:scale-110 object-cover transition h-full w-full"
                                alt="applications"
                            />    
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-3 space-y-2">
                        <h2 className="mb-4 text-xl"> detail appli</h2>

                        <p><strong>lieu</strong></p>

                        <p><strong>deb</strong></p>
                        <p><strong>fin</strong></p>

                        <p><strong>fin</strong></p>
                    </div>
                </div>
            </div>

             <div className="pt-6 pb-2">
                <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                fill
                                src="/beach_1.jpg"
                                className="hover:scale-110 object-cover transition h-full w-full"
                                alt="applications"
                            />    
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-3 space-y-2">
                        <h2 className="mb-4 text-xl"> detail appli</h2>

                        <p><strong>lieu</strong></p>

                        <p><strong>deb</strong></p>
                        <p><strong>fin</strong></p>

                        <p><strong>fin</strong></p>

                        <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-medaide hover:bg-medaide-dark transition text-white rounded-xl"> go to candi</div>
                    </div>
                </div>
            </div>
            
        </main>
    )
}

export default MyApplicationsPage;