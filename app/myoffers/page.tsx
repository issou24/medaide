import Image from "next/image";
import ApplicationList from "@/app/components/application/ApplicationList";
import ContactButton from "@/app/ContactButton";

const MyOffers= () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className="mt-6 mb-2 text-2xl">offre</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gzp->6">
                <ApplicationList />
            </div>
        </main>
    )
}

export default MyOffers