import Image from "next/image";
type BMCComponentProps = {
  image: string;
  title: string;
  description: string;
};

export default function BMCComponent({
  image,
  title,
  description,
}: BMCComponentProps) {
  return (
    <div className="relative w-full max-w-6xl">
      <div className="flex flex-row justify-between bg-[#1B8FC2]/20 border border-[#1B8FC2] p-16 gap-x-5 rounded-3xl">
        <Image src={image} alt={title} className="size-[18rem]" />
        <div className="max-w-full">
          <h2 className="text-[3.5rem] font-bold">{title}</h2>
          <p className="text-md text-justify">{description}</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1.2rem] bg-[#1C698B] rounded-b-3xl" />
    </div>
  );
}
