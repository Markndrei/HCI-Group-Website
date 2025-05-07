import Image from "next/image";
export default function Design() {
  return (
    <div className="text-[#08222F] tracking-widest text-[1.2rem]">
      <Image
        src="/paletteTop.svg"
        width={1600}
        height={800}
        alt="bg1"
        className="top-0 absolute -z-10"
      />
      <section className="mx-[15%] w-min-full h-[140vh] text-[#FFFCEF] px-6">
        <h1 className="flex justify-center font-extrabold text-[4rem] mt-20 mb-10">
          BRANDING IDENTITY
        </h1>
        <div className="w-[70%] mt-12">
          <h2 className="text-[3rem] font-bold">Brand Logo</h2>
          <p>
            The logo represents how IPsync merges students, industry
            professionals, and academia into a unified platform. It reflects the
            seamless connection of innovative ideas with the individuals and
            resources that bring them to life, fostering collaboration and
            growth.
          </p>
        </div>
        <div className="flex flex-row gap-x-40 mt-20">
          <div className="mt-10">
            <Image src="/emblem.svg" width={450} height={450} alt="emblem" />
          </div>
          <div>
            <Image
              src="/wordmark.png"
              width={450}
              height={360}
              alt="wordmark"
            />
          </div>
        </div>
      </section>
      <section className="w-min-full h-[120vh] mx-[15%]">
        <div className=" flex flex-col text-center justify-end items-end px-20">
          <h1 className="text-[3rem] font-bold mb-6 ">COLOR PALETTE</h1>
          <p className="w-[70%]">
            The palette draws from the serene beauty of a night sky, with stars
            twinkling in varying shades of blue and soft moonlight. The contrast
            between cool blues and warm ivory evokes calm and sophistication. It
            reflects a fusion of technology, connectivity, and modern
            innovation, inspired by the starry night sky—a symbol of infinite
            possibilities and exploration.
          </p>
        </div>
        <div className="flex justify-center mt-40">
          <Image src="/palette.svg" width={600} height={600} alt="" />
        </div>
      </section>
      <section className="h-[100vh] mt-60 mx-[15%] text-[#FFFCEF]">
        <div className="">
          <h1 className="font-bold text-[3rem] my-5">TYPOGRAPHY</h1>
          <h3 className="font-semibold text-[2rem] my-5">MANROPE</h3>
          <p className="w-[80%] leading-relaxed">
            Manrope has a geometric sans-serif structure that gives it a clean,
            structured, and confident look. Its balanced proportions and
            minimalistic design exude professionalism, which aligns perfectly
            with a platform connecting businesses, colleges, and project
            leaders.
          </p>
          <div className="flex justify-center items-center mt-10">
            {" "}
            <Image src="/typography.svg" width={500} height={500} alt="typo" />
          </div>
        </div>
      </section>
      <Image
        src="/paletteBot.svg"
        width={1600}
        height={1200}
        alt="bg2"
        className="top-330 absolute -z-10 overflow-hidden"
      />
    </div>
  );
}
