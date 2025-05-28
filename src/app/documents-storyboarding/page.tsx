import Image from "next/image";

export default function Storyboarding() {
  return (
    <div className="bg-white text-[#36454F] pt-20 pb-20">
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 text-[#072330]">
          storyboarding.{" "}
          <span className="text-[#1C698B] font-light text-2xl md:text-3xl">The Origins of PSYNC</span>
        </h1>

        <div className="flex flex-col items-center justify-center gap-8 my-12 mt-20">
          <div className="w-full flex justify-center">
            <Image
              src="/sb1.svg"
              alt="Illustration showing two people talking, with thought bubbles above their heads"
              width={1200}
              height={800}
              className="w-full h-auto max-w-full"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 my-12">
          <div className="w-full flex justify-center">
            <Image
              src="/sb2.svg"
              alt="Illustration of a laptop with the PSYNC logo on its screen"
              width={1200}
              height={800}
              className="w-full h-auto max-w-full"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 my-12">
          <div className="w-full flex justify-center">
            <Image
              src="/sb3.svg"
              alt="Illustration showing different screens, possibly related to student profiles and interests"
              width={1200}
              height={800}
              className="w-full h-auto max-w-full"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 my-12">
          <div className="w-full flex justify-center">
            <Image
              src="/sb4.svg"
              alt="Illustration of a man and a woman looking at their laptops, smiling"
              width={1200}
              height={800}
              className="w-full h-auto max-w-full"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 my-12">
          <div className="w-full flex justify-center">
            <Image
              src="/sb5.svg"
              alt="Illustration of a network of interconnected people, symbolizing connections"
              width={1200}
              height={800}
              className="w-full h-auto max-w-full"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 my-12">
          <div className="w-full flex justify-center">
            <Image
              src="/sb6.svg"
              alt="Illustration of a group of diverse students looking at a laptop"
              width={1200}
              height={800}
              className="w-full h-auto max-w-full"
            />
          </div>
        </div>
      </main>
    </div>
  );
}