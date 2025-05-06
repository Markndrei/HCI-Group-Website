// Footer component
export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col w-full bg-[#072330] text-[#FFFCEF] px-[15%] tracking-wider">
        <div className="grid grid-cols-2 mb-[5rem] mt-[9rem] tracking-wider font-extralight">
          <div>
            <img src="/emblem.png" alt="Logo" className="w-16 h-16" />
            <p className="pl-5">Copyright &copy; 2025 Jinjaroos.</p>
            <p className="pl-5">All rights reserved.</p>
          </div>

          <div className="flex justify-between space-y-4">
            <div>
              <p className="font-semibold">Landing</p>
              <ul className="flex flex-col space-y-4 mt-4">
                <a
                  href="/"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Introduction
                </a>
                <a
                  href="/documents"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Identity
                </a>
                <a
                  href="/design"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Purpose
                </a>
                <a
                  href="/about"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Audience
                </a>
                <a className="transition duration-300 hover:text-[#1b8fc2]/80">
                  Value
                </a>
              </ul>
            </div>

            <div>
              <p className="font-semibold">Documents</p>
              <ul className="flex flex-col space-y-4 mt-4">
                <a
                  href="/"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Introduction
                </a>
                <a
                  href="/documents"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Identity
                </a>
                <a
                  href="/design"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Purpose
                </a>
                <a
                  href="/about"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Audience
                </a>
                <a className="transition duration-300 hover:text-[#1b8fc2]/80">
                  Value
                </a>
              </ul>
            </div>

            <div>
              <p className="font-semibold">Design Artifacts</p>
              <ul className="flex flex-col space-y-4 mt-4">
                <a
                  href="/"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Introduction
                </a>
                <a
                  href="/documents"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Identity
                </a>
                <a
                  href="/design"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Purpose
                </a>
                <a
                  href="/about"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Audience
                </a>
                <a className="transition duration-300 hover:text-[#1b8fc2]/80">
                  Value
                </a>
              </ul>
            </div>

            <div>
              <p className="font-semibold">About us</p>
              <ul className="flex flex-col space-y-4 mt-4">
                <a
                  href="/"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Manns
                </a>
                <a
                  href="/documents"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Cherilyn
                </a>
                <a
                  href="/design"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Mark
                </a>
                <a
                  href="/about"
                  className="transition duration-300 hover:text-[#1b8fc2]/80"
                >
                  Chariz
                </a>
                <a className="transition duration-300 hover:text-[#1b8fc2]/80">
                  Ethan
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex bg-[#FFFCEF]/60 h-[0.1rem] w-full"></div>
        <div className="flex items-center justify-between text-[#FFFCEF] mb-24">
          <div>
            <ul className="flex space-x-12 py-4 justify-between">
              <a href="/">
                {" "}
                <img
                  src="/twitter-alt.png"
                  alt="twitter"
                  className=" w-6 h-6"
                />
              </a>
              <a href="/">
                {" "}
                <img src="/github.png" alt="github" className=" w-6 h-6" />
              </a>
              <a href="/">
                {" "}
                <img src="/linkedin.png" alt="linkedin" className=" w-6 h-6" />
              </a>
              <a href="/">
                {" "}
                <img src="/instagram.png" alt="instags" className=" w-6 h-6" />
              </a>
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
