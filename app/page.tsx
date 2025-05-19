import Categories from "./components/Categories";
import ApplicationList from "./components/application/ApplicationList";

export default function Home() {
  return (
    <main className="max-w-[1500px] mx-auto px-6">
      <Categories />

      <ApplicationList />
    </main>
  );
}
