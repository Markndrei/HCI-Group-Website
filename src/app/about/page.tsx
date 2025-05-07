import Image from "next/image";
import { profiles } from "@/data/team";
import ProfileCard from "@/components/ProfileCard";
export default function About() {
  return (
    <div>
      <section className="h-[100vh] text-[#FFFCEF]">
        <Image
          src="/about_top.svg"
          width={1600}
          height={800}
          alt="bg1"
          className="top-0 absolute -z-10"
        />
        <Image
          src="/manns.svg"
          width={550}
          height={550}
          alt="bg1"
          className="right-0 top-200 absolute -z-1"
        />
        <Image
          src="/ethan.svg"
          width={550}
          height={550}
          alt="bg1"
          className="lef-0 top-350 absolute -z-1"
        />
        <Image
          src="/mark.svg"
          width={550}
          height={550}
          alt="bg1"
          className="right-0 top-550 absolute -z-1"
        />
        <Image
          src="/cha.svg"
          width={650}
          height={650}
          alt="bg1"
          className="lef-0 top-700 absolute -z-1"
        />
        <Image
          src="/che.svg"
          width={550}
          height={550}
          alt="bg1"
          className="right-0 top-900 absolute -z-1"
        />
        <div className="flex flex-col justify-center items-center mt-20">
          <Image src="/network-user.png" width={60} height={60} alt="network" />
          <h1 className="text-[4rem] font-extrabold">ABOUT US</h1>
          <p className="text-[1.5rem] font-extralight">
            get to know your developers
          </p>
        </div>
      </section>
      <section className="h-[90vh]">
        <div className="flex justify-center mt-24">
          <ProfileCard {...profiles[0]} />
        </div>
      </section>
      <section className="h-[90vh]">
        <div className="flex justify-center ml-50">
          <ProfileCard {...profiles[1]} />
        </div>
      </section>
      <section className="h-[95vh]">
        <div className="flex justify-center mt-42 mr-50">
          <ProfileCard {...profiles[2]} />
        </div>
      </section>
      <section className="h-[100vh]">
        <div className="flex justify-center ml-26">
          <ProfileCard {...profiles[3]} />
        </div>
      </section>
      <section className="h-[100vh]">
        <div className="flex justify-center mr-50">
          <ProfileCard {...profiles[4]} />
        </div>
      </section>
      <section className="h-[100vh]"></section>
      <Image
        src="/aboutBot.svg"
        width={1600}
        height={800}
        alt="bg2"
        className="top-890 absolute -z-10 overflow-hidden"
      />
    </div>
  );
}
