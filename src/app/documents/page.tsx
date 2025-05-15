import Link from "next/link";
import Image from "next/image";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Documents() {
  return (
    <div className=" pb-40">
      <AnimatedBackground />

      <div className="mx-[15%] h-auto">
        <section className="w-full">
          <p className="text-[3rem] font-black text-[#1B8FC2] pt-[8rem]">
            PROJECT <span className="text-white">OVERVIEW</span>
          </p>
          {/*JOURNEY*/}
          <Link href="/documents-journey">
            <div className="cursor-pointer mt-6 flex w-full h-[50dvh] hover:shadow-xl transition">
              <div className="bg-[#FFFCEF] w-[60%] rounded-l-3xl flex items-center justify-center">
                <div className="flex w-full px-8 gap-6 text-center items-center justify-center">
                  <div className="w-1/2 text-[4rem] text-[#072330] font-extrabold flex justify-center items-center">
                    journey.
                  </div>
                  <div className="w-1/2 text-[1rem] text-[#072330] text-left flex items-center justify-center">
                    How our concept evolved into a solution that connects
                    students and organizations.
                  </div>
                </div>
              </div>
              <div className="bg-[#5C899D] w-[40%] rounded-r-3xl flex justify-center pt-12 text-[#FFFCEF] text-[1.5rem] px-[5%]">
                Journey from Idea to Perspective Project
              </div>
            </div>
          </Link>
          <div className="flex space-x-6 w-full mt-6">
            <div className="flex w-full gap-6 text-center items-center justify-center">
              {/* BMC DIV */}
              <Link
                href="/documents-bmc"
                passHref
                className="w-1/2 h-[50dvh] text-[4rem] bg-[#FFFCEF] rounded-3xl font-extrabold flex justify-center items-center"
              >
                <div>
                  <Image
                    src="/bmc-cover.svg"
                    width={320}
                    height={320}
                    alt="BMC-COVER"
                    className="rounded-lg"
                  />
                </div>
              </Link>

              {/* APP FEATURES DIV */}
              <Link
                href="/documents-journey"
                passHref
                className="w-1/2 text-[1rem] h-[50dvh] bg-[#5C899D] text-left rounded-3xl flex items-center justify-center"
              >
                <div>
                  How our concept evolved into a solution that connects students
                  and organizations.
                </div>
              </Link>
            </div>
          </div>
          <div className="flex space-x-6 w-full mt-4">
            <div className="flex w-full gap-6 text-left items-center justify-center text-[1.3rem] text-[#FFFCEF] font-bold">
              <div className="w-1/2">Business Model Canvas</div>
              <div className="w-1/2">App Features and Details</div>
            </div>
          </div>
        </section>
        <section className="text-[3rem] text-[#1B8FC2] font-black mt-40">
          VISUAL <span className="text-[#FFFCEF]">DESIGN</span>
          {/* STORYBOARDING */}
          <Link href="/documents-journey">
            <div className="cursor-pointer mt-6 flex w-full h-[50dvh] hover:shadow-xl transition">
              <div className="bg-[#5C899D] w-[60%] rounded-l-3xl flex items-center justify-center">
                <div className="flex w-full px-8 gap-6 text-center items-center justify-center">
                  <div>
                    <Image
                      src="/documents-storyboard-cover.svg"
                      width={420}
                      height={320}
                      alt="BMC-COVER"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-[#FFFCEF] w-[40%] rounded-r-3xl flex justify-center pt-12 text-[#1C698B] text-[1.5rem] px-[5%]">
                Storyboarding
              </div>
            </div>
          </Link>
          <div className="flex space-x-6 w-full mt-6">
            <div className="flex w-full gap-6 text-center items-center justify-center">
              {/* WIREFRAMES */}
              <Link
                href="/documents-bmc"
                passHref
                className="w-1/2 h-[50dvh] text-[4rem] bg-[#5C899D] rounded-3xl font-extrabold flex justify-center items-center"
              >
                <div>
                  <Image
                    src="/bmc-cover.svg"
                    width={320}
                    height={320}
                    alt="BMC-COVER"
                    className="rounded-lg"
                  />
                </div>
              </Link>

              {/* MOCKUPS */}
              <Link
                href="/documents-journey"
                passHref
                className="w-1/2 text-[1rem] h-[50dvh] bg-[#FFFCEF] text-left rounded-3xl flex items-center justify-center"
              >
                <div>
                  <Image
                    src="/documents-mockup-cover.svg"
                    width={380}
                    height={380}
                    alt="BMC-COVER"
                    className="rounded-lg"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex space-x-6 w-full mt-4">
            <div className="flex w-full gap-6 text-left items-center justify-center text-[1.3rem] text-[#FFFCEF] font-bold">
              <div className="w-1/2">Wireframes</div>
              <div className="w-1/2">Mockups</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
