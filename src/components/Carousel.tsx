import Image from "next/image";

function Carousel() {
  const testimony = [
    {
      title: "mama mo",
      description: "An epic tale of adventure.",
      avatar: "/avatars/avatar1.jpg",
      author: "Ava Knight",
      publish: "May 2025",
    },
    {
      title: "mama mo",
      description: "Nature's secrets unfold.",
      avatar: "/avatars/avatar2.jpg",
      author: "Liam Woods",
      publish: "May 2025",
    },
    {
      title: "mama mo",
      description: "A journey through the cosmos.",
      avatar: "/avatars/avatar3.jpg",
      author: "Nova Bright",
      publish: "May 2025",
    },
    {
      title: "mama mo",
      description: "Time travel and its consequences.",
      avatar: "/avatars/avatar4.jpg",
      author: "Theo Chronos",
      publish: "May 2025",
    },
    {
      title: "mama mo",
      description: "A bustling world of ambition.",
      avatar: "/avatars/avatar5.jpg",
      author: "Skye Morgan",
      publish: "May 2025",
    },
    {
      title: "mama mo",
      description: "An unsung champion rises.",
      avatar: "/avatars/avatar6.jpg",
      author: "Ryder Vale",
      publish: "May 2025",
    },
    {
      title: "mama mo",
      description: "Mysteries beneath the waves.",
      avatar: "/avatars/avatar7.png",
      author: "Marina Blue",
      publish: "May 2025",
    },
    {
      title: "mama mo",
      description: "Magic and machinery collide.",
      avatar: "/avatars/avatar8.png",
      author: "Dexter Gear",
      publish: "May 2025",
    },
    {
      title: "mama mo",
      description: "Stories of the unseen.",
      avatar: "/avatars/avatar9.png",
      author: "Ember Hollow",
      publish: "May 2025",
    },
    {
      title: "mama mo",
      description: "Stories of the unseen.",
      avatar: "/avatars/avatar9.png",
      author: "Ember Hollow",
      publish: "May 2025",
    },
    {
      title: "mama mo",
      description: "Stories of the unseen.",
      avatar: "/avatars/avatar9.png",
      author: "Ember Hollow",
      publish: "May 2025",
    },
    {
      title: "mama mo",
      description: "Stories of the unseen.",
      avatar: "/avatars/avatar9.png",
      author: "Ember Hollow",
      publish: "May 2025",
    },
    {
      title: "mama mo",
      description: "Stories of the unseen.",
      avatar: "/avatars/avatar9.png",
      author: "Ember Hollow",
      publish: "May 2025",
    },
    {
      title: "mama mo",
      description: "Stories of the unseen.",
      avatar: "/avatars/avatar9.png",
      author: "Ember Hollow",
      publish: "May 2025",
    },
    {
      title: "mama mo",
      description: "Stories of the unseen.",
      avatar: "/avatars/avatar9.png",
      author: "Ember Hollow",
      publish: "May 2025",
    },
    {
      title: "mama mo",
      description: "Stories of the unseen.",
      avatar: "/avatars/avatar9.png",
      author: "Ember Hollow",
      publish: "May 2025",
    },
    {
      title: "mama mo",
      description: "Stories of the unseen.",
      avatar: "/avatars/avatar9.png",
      author: "Ember Hollow",
      publish: "May 2025",
    },
  ];

  return (
    <div className="overflow-hidden w-full">
      <div className="p-2 mb-4 mt-10"></div>

      <div className="flex animate-scroll-x gap-4 px-4 mt-6">
        {[...testimony, ...testimony].map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 min-w-[24rem] h-[5rem] bg-[#FFFCEF]/40 backdrop-blur-lg rounded-xl shadow-md p-4 flex flex-col"
          >
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-14 h-14 relative flex-shrink-0">
                <Image
                  src={card.avatar}
                  alt={`${card.author} avatar`}
                  fill
                  className="rounded-full object-cover"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h3 className="text-[1rem] font-extrabold text-[#072330]">
                    {card.title}
                  </h3>
                  <p className="text-[0.8rem] text-[#072330]/50">
                    @{card.author} · {card.publish}
                  </p>
                </div>
                <p className="text-[#072330] mt-1">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
