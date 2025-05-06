import React from "react";

const Navbar: React.FC = () => {
  return (
    <div>
      <nav className="flex items-center justify-between p-2 bg-[#072330] text-[#FFFCEF] px-[15%]">
        <div className="text-lg font-bold">
          <img src="/emblem.png" alt="" className=" w-[3rem] h-[3rem]" />
        </div>
        <ul className="flex space-x-8 items-center">
          <a
            href="/"
            className="transition duration-300 hover:text-[#1b8fc2]/80"
          >
            Home
          </a>
          <a
            href="/documents"
            className="transition duration-300 hover:text-[#1b8fc2]/80"
          >
            Documents
          </a>
          <a
            href="/design"
            className="transition duration-300 hover:text-[#1b8fc2]/80"
          >
            Design Artifacts
          </a>
          <a
            href="/about"
            className="transition duration-300 hover:text-[#1b8fc2]/80"
          >
            About us
          </a>
          <a
            href="https://ipsync.vercel.app"
            className="bg-[#1C698B] px-4 py-1 rounded-full font-bold transition duration-300 hover:bg-[#1b8fc2]/80"
          >
            Get Started
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
