import BMCComponent from "./_components/BMCComponent";
import { bmcList } from "./_data/BMCData.js";
import bottomwavy from "@assets/bmc-assets/bg-bottom-wavy.svg";
import Image from "next/image";

export default function BMC() {
  return (
    <div className="relative w-full">
      <div
        className="h-[36rem] bg-no-repeat bg-top bg-cover"
        style={{ backgroundImage: "url('/bmc-assets/bg-wavy.svg')" }}
      >
        <header className="h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-6xl font-bold">BUSINESS MODEL CANVAS</h1>
          <p className="text-[1.5rem]">
            A breakdown of our platform’s business model across key areas.
          </p>
        </header>
      </div>

      <section
        id="bmc-list"
        className="py-28 pb-[30rem] flex flex-col items-center"
      >
        <ul className="flex flex-col gap-y-10 pb-10">
          {bmcList.map((item, index) => (
            <li key={index}>
              <BMCComponent
                title={item.title}
                description={item.desc}
                image={item.img}
              />
            </li>
          ))}
        </ul>
      </section>
      <div className="absolute bottom-0 w-full z-[-1] translate-y-[30rem]">
        <Image
          src={bottomwavy}
          alt="bottom-wavy-bg"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
}
