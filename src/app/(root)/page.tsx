import { Staatliches } from "next/font/google";

const staatliches = Staatliches({ subsets: ["latin"], weight: ["400"] });
const HomePage = () => {
  return (
    <main className="flex max-h-screen flex-col items-center p-10 gap-0">
      <section className="flex flex-col w-4/6 space-y-2">
        <h1 className={`${staatliches.className} font-bold text-red-700 `}>
          SIMOWORLD
        </h1>
        <p className={`text-gray-600 text-pretty`}>
          El planificador de eventos de simracing para la comunidad de habla
          hispana.
        </p>
      </section>
    </main>
  );
};

export default HomePage;
