import Carousel from "@/components/Carousel";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Dark intro with possibly animated bg */}
      <section className="flex flex-col items-start justify-start min-h-screen bg-[#2d2d2d] overflow-x-hidden">
        <div className=" ml-[8%] mt-[8%] space-y-4 ">
          <div className="inline-block border-2 border-[#FFFECF] p-4 mb-8">
            <h1 className="text-6xl font-bold text-[#1B8FC2]">
              IPSYNC <span className="text-[#FFFCEF]">Hub</span>
            </h1>
          </div>
          <p className="text-[1.5rem] text-[#FFFECF] tracking-widest mb-8">
            Where Great Ideas meet Bright Minds.
          </p>
          <div className="flex flex-row space-x-4 ">
            <div>
              <button className="font-semibold text-[1.2rem] text-[#FFFECF] bg-[#1C698B] px-10 py-2 rounded-lg hover:bg-[#1B8FC2] transition duration-300 ease-in-out">
                {" "}
                Get Started
              </button>
            </div>
            <div>
              <button className="font-semibold text-[1.2rem] text-[#FFFECF] border-1 border-[#FFFECF] px-10 py-2 rounded-lg  hover:bg-[#1B8FC2] transition duration-300 ease-in-out">
                {" "}
                Explore Journey
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mb-16 mt-[10rem]">
          <Carousel />
        </div>
      </section>

      {/* Blue Intro with mockup */}
      <section className="bg-[#072330] text-[#FFFECF] py-16 min-w-full">
        <div className="mx-[15%] mt-[8%]">
          <div className="flex items-center mb-10 space-x-8 tracking-widest text-[1.5rem]">
            <div>
              <Image
                src="/comment-info.png"
                width={36}
                height={36}
                alt="Info"
              ></Image>
            </div>
            <div>
              <p>Preliminaries</p>
            </div>
          </div>
          <div className=" w-[50%] font-extrabold text-[3.5rem] mb-8">
            collaborate. grow. succeed.
          </div>
          <div className="w-[70%] text-[1.2rem] mb-12 tracking-widest font-light">
            Unlock a world of opportunities where students, industry experts,
            and academia come together to collaborate, innovate, and grow. Join
            us in shaping the future of work.
          </div>
          <div>
            <Image
              src="/mockup-landing.png"
              width={1200}
              height={800}
              alt="Mockup"
            ></Image>
          </div>
        </div>
      </section>

      {/* purpose section */}
      <section className="bg-[#1C698B] text-[#FFFECF] py-16 min-w-full">
        <div className="mx-[15%] mt-[8%]">
          <div className="flex items-center mb-10 space-x-8 tracking-widest text-[1.5rem]">
            <div>
              <Image
                src="/bullseye-arrow.png"
                width={36}
                height={36}
                alt="arrow"
              ></Image>
            </div>
            <div>
              <p>Purpose</p>
            </div>
          </div>
          <div className=" w-[50%] font-extrabold text-[3.5rem] mb-8">
            inspire. empower. transform.
          </div>
          <div className="w-[70%] text-[1.2rem] mb-40 tracking-widest font-light">
            IPsync’s mission is to bridge academia and industry by providing
            students with real-world internships and project opportunities that
            develop practical skills, while enabling faculty and industry
            partners to connect, collaborate, and cultivate future-ready talent.
          </div>
        </div>
      </section>

      {/* target audience section */}
      <section className="bg-[#072330] text-[#FFFECF] py-16 w-full ">
        <div className="mx-[15%] mt-[8%]">
          {/* Header Section */}
          <div className="flex items-center mb-10 space-x-4 tracking-widest text-[1.5rem]">
            <Image
              src="/target-audience.png"
              width={36}
              height={36}
              alt="audience"
            />
            <p>Target Audience</p>
          </div>

          {/* Headline */}
          <div className="w-full max-w-[50%] font-extrabold text-[3rem] lg:text-[3.5rem] mb-8 leading-tight">
            reach. engage. impact.
          </div>

          {/* Description */}
          <div className="w-full max-w-[70%] text-[1.1rem] lg:text-[1.2rem] mb-12 tracking-widest font-light leading-relaxed">
            From students preparing for their future to professionals managing
            academic and career programs—our platform is built for you. Your
            goals. One platform. Real results.
          </div>

          {/* Avatar Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-30">
            {[
              "STUDENT APPLICANTS",
              "PROJECT MANAGER",
              "INTERNSHIP COORDINATOR",
              "HUMAN RESOURCES OFFICER",
            ].map((role, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <Image
                  src="/avatars/avatar9.png"
                  width={180}
                  height={180}
                  alt="Mockup"
                  className="object-contain rounded-full"
                />
                <p className="mt-6 tracking-widest text-[1.1rem] font-light">
                  {role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* purpose section */}
      <section className="bg-[#1C698B] text-[#FFFECF] py-16 min-w-full">
        <div className="mx-[15%] mt-[8%]">
          <div className="flex items-center mb-10 space-x-8 tracking-widest text-[1.5rem]">
            <div>
              <Image
                src="/hands-holding-diamond.png"
                width={36}
                height={36}
                alt="value"
              ></Image>
            </div>
            <div>
              <p>Value Proposition</p>
            </div>
          </div>
          <div className=" w-[50%] font-extrabold text-[3.5rem] mb-8">
            innovate. deliver. thrive.
          </div>
          <div className="w-[70%] text-[1.2rem] mb-60 tracking-widest font-light">
            IPSYNC is a smart platform for job and internship matching that
            simplifies recruitment, enhances communication, and builds strong
            networks—helping users connect, track, and succeed.
          </div>
        </div>
      </section>
    </div>
  );
}
