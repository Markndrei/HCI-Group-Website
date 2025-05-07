import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <div>
      <nav className="flex items-center justify-between p-2 bg-[#072330] text-[#FFFCEF] px-[15%]">
        <div className="text-lg font-bold">
          <Image src="/emblem.png" alt="" width={52} height={52} />
        </div>
        <ul className="flex space-x-8 items-center">
          <Link
            href="/"
            className="transition duration-300 hover:text-[#1b8fc2]/80"
          >
            Home
          </Link>
          <Link
            href="/documents"
            className="transition duration-300 hover:text-[#1b8fc2]/80"
          >
            Documents
          </Link>
          <Link
            href="/design"
            className="transition duration-300 hover:text-[#1b8fc2]/80"
          >
            Design Artifacts
          </Link>
          <Link
            href="about"
            className="transition duration-300 hover:text-[#1b8fc2]/80"
          >
            About us
          </Link>
          <Link
            href="https://ipsync.vercel.app"
            className="bg-[#1C698B] px-4 py-1 rounded-full font-bold transition duration-300 hover:bg-[#1b8fc2]/80"
          >
            Get Started
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
