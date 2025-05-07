// Footer component
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col w-full bg-[#072330] text-[#FFFCEF] px-[15%] tracking-wider">
        <div className="grid grid-cols-2 mb-[5rem] mt-[9rem] tracking-wider font-extralight">
          <div>
            <Image src="/emblem.png" alt="Logo" width={80} height={80} />
            <p className="pl-5">Copyright &copy; 2025 Jinjaroos.</p>
            <p className="pl-5">All rights reserved.</p>
          </div>

          <div className="flex justify-between space-y-4">
            <div>
              <p className="font-semibold">Landing</p>
              <ul className="flex flex-col space-y-4 mt-4">
                <Link
                  href="/#intro"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Introduction
                </Link>
                <Link
                  href="/#identity"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Identity
                </Link>
                <Link
                  href="/#purpose"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Purpose
                </Link>
                <Link
                  href="/#audience"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Audience
                </Link>
                <Link
                  href="/#value"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Value
                </Link>
              </ul>
            </div>

            <div>
              <p className="font-semibold">Documents</p>
              <ul className="flex flex-col space-y-4 mt-4">
                <Link
                  href="/"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Introduction
                </Link>
                <Link
                  href="/documents-bmc"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  BMC
                </Link>
                <Link
                  href="/design"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Purpose
                </Link>
                <Link
                  href="/Linkbout"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Audience
                </Link>
                <Link
                  href="/"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Value
                </Link>
              </ul>
            </div>

            <div>
              <p className="font-semibold">Design Artifacts</p>
              <ul className="flex flex-col space-y-4 mt-4">
                <Link
                  href="/design#logo"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Brand Logo
                </Link>
                <Link
                  href="/design#palette"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Color Palette
                </Link>
                <Link
                  href="/design#typo"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Brand Typography
                </Link>
              </ul>
            </div>

            <div>
              <p className="font-semibold">About us</p>
              <ul className="flex flex-col space-y-4 mt-4">
                <Link
                  href="/about#manns"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Manns
                </Link>
                <Link
                  href="/about#ethan"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Ethan
                </Link>
                <Link
                  href="/about#mark"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Mark
                </Link>
                <Link
                  href="/about#cha"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Chariz
                </Link>
                <Link
                  href="/about#manns"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Cherilyn
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex bg-[#FFFCEF]/60 h-[0.1rem] w-full"></div>
        <div className="flex items-center justify-between text-[#FFFCEF] mb-24">
          <div>
            <ul className="flex space-x-12 py-4 justify-between">
              <Link href="/">
                {" "}
                <img
                  src="/twitter-alt.png"
                  alt="twitter"
                  className=" w-6 h-6"
                />
              </Link>
              <Link href="/">
                {" "}
                <img src="/github.png" alt="github" className=" w-6 h-6" />
              </Link>
              <Link href="/">
                {" "}
                <img src="/linkedin.png" alt="linkedin" className=" w-6 h-6" />
              </Link>
              <Link href="/">
                {" "}
                <img src="/instagram.png" alt="instags" className=" w-6 h-6" />
              </Link>
            </ul>
          </div>
          <div>
            <p className="text-end text-[#FFFCEF]/80 text-sm py-4 font-extralight">
              made with love and coffee.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
