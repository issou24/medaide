import Image from "next/image";
import ApplicationSidebar from "@/app/components/application/ApplicationSidebar";

const ApplicationDetailPage = () => {
  return (
    <main className="maw-w-[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
        <Image
          fill
          src="/medecinegenerale.png"
          className="object-cover w-full h-full"
          alt="recherche medecine générale"
        />
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">Cand name</h1>
          <span className="mb-6 block text-lg text-gray-600">durée</span>

          <hr />

          <div className="py-6 flex items-center space-x-4">
            <Image
              src="/profile_pic_1.jpg"
              width={50}
              height={50}
              className="rounded-full"
              alt="The user name"
            />

            <p>
              <strong>Doc. Bunny</strong> recherche
            </p>

            <hr />

            <p>je recherche pour blabla de temps a temps blabla</p>
          </div>
        </div>

        <ApplicationSidebar />
      </div>
    </main>
  );
};

export default ApplicationDetailPage;
