import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

interface ProfileCardProps {
  name: string;
  title: string;
  description: string;
  links: {
    github: string;
    linkedin: string;
    instagram: string;
  };
  portfolio: string;
}

export default function ProfileCard({
  name,
  title,
  description,
  links,
  portfolio,
}: ProfileCardProps) {
  return (
    <div className="p-6 max-w-[30rem] text-left">
      <h2 className="text-[2rem] font-extrabold tracking-wide text-[#072330]">
        {name}
      </h2>
      <h3 className="text-[1.5rem] font-semibold text-gray-700/70 mt-1">
        {title}
      </h3>
      <p className="text-[1rem] text-gray-600 mt-2 leading-relaxed">
        {description}
      </p>

      <div className="flex justify-center space-x-16  mt-6 text-[#3D7B94] text-lg">
        <Link
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={40} className="hover:text-[#33687b] transition" />
        </Link>
        <Link
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={40} className="hover:text-[#33687b] transition" />
        </Link>
        <Link
          href={links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={40} className="hover:text-[#33687b] transition" />
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <Link
          href={portfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-24 py-4 bg-[#3D7B94] text-white text-[1.2rem] tracking-wide font-light rounded-full hover:bg-[#33687b] transition whitespace-nowrap"
        >
          VISIT PERSONAL PORTFOLIO
        </Link>
      </div>
    </div>
  );
}
