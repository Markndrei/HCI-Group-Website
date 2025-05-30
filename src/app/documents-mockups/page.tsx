import React from "react";
import Image from "next/image";

const mockupImages = [
  "/mockup/mockup1.png",
  "/mockup/mockup2.png",
  "/mockup/mockup3.png",
  "/mockup/mockup4.png",
];

export default function DocumentsMockupsPage() {
  return (
    <div className="relative bg-white text-[#36454F] flex flex-col items-center pt-20 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-start md:justify-start mb-4">
          <h1 className="text-6xl md:text-7xl font-extrabold text-[#072330] leading-none md:pr-4">
            mockups.
          </h1>
          <span className="text-[#1C698B] mt-5 font-light text-2xl md:text-2xl leading-tight md:leading-none flex-grow">
            Explore IPSYNC mockups and see concepts <br /> come to life visually.
          </span>
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-6xl space-y-20 w-full">
        {mockupImages.map((src, index) => (
          <div
            key={index}
            className={`flex w-full ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="max-w-3xl w-full relative group">
              <div
                className="absolute w-full h-full bg-[#6397AF] rounded-xl -z-10"
                style={{ bottom: "-16px", right: "-16px" }}
              />

              <div className="absolute -inset-4 border border-dashed border-[#1C698B] rounded-xl opacity-0 group-hover:opacity-100 transition duration-300" />

              <Image
                src={src}
                alt={`Mockup ${index + 1}`}
                width={700}
                height={500}
                className="rounded-xl shadow-xl object-cover w-full h-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
