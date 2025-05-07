import Link from "next/link";
export default function Documents() {
  return (
    <div>
      <Link
        href="/documents-bmc"
        className="transition duration-300 hover:text-[#1b8fc2]/80"
      >
        Click to go to BMC!
      </Link>
    </div>
  );
}
