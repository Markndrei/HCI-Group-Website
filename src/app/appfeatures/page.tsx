import React from "react";
import Image from "next/image";

const features = [
  {
    title: "Profile Management",
    description:
      "Users can build and personalize their profiles, showcasing skills, education, experiences, and interests. This feature supports both student portfolios and professional profiles for mentors and project hosts.",
    image: "/features/profile.png",
  },
  {
    title: "Progress Tracking & Feedback",
    description:
      "The system enables deadline tracking and real-time feedback from mentors, fostering accountability and continuous improvement in internships and project collaborations.",
    image: "/features/tracking.png",
  },
  {
    title: "Internship & Project Listings",
    description:
      "Faculty and industry partners can post detailed opportunities, while students can browse, search, and apply using structured listings that include roles, expectations, and timelines.",
    image: "/features/listings.png",
  },
  {
    title: "Student Dashboard",
    description:
      "A centralized dashboard provides users with access to their applications, ongoing and completed projects.",
    image: "/features/dashboard.png",
  },
  {
    title: "Messaging System",
    description:
      "IPSync offers real-time messaging with support for one-on-one and automatic group chats per project, promoting seamless communication and collaboration.",
    image: "/features/messaging.png",
  },
  {
    title: "Project Publishing & Applications",
    description:
      "Users can create project listings with specific fields and accept applications directly through the platform’s intuitive forms.",
    image: "/features/publishing.png",
  },
  {
    title: "Smart Search & Filters",
    description:
      "Fuzzy search and filter tools help users find relevant projects efficiently, even with incomplete or imprecise input.",
    image: "/features/search.png",
  },
];

const AppFeatures = () => {
  return (
    <div className="bg-white text-[#36454F] flex flex-col items-center pt-20 pb-20">
      {/* Title Section */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-baseline mb-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#072330] leading-none mr-4">
            App Features.
          </h1>
          <span className="text-[#1C698B] font-light text-2xl sm:text-2xl leading-tight">
            And Details.
          </span>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 max-w-6xl space-y-20">
        {features.map((feature, index) => {
          const isReversed = index % 2 === 1;
          const number = (index + 1).toString().padStart(2, "0"); // Format like "01", "02", etc.

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                isReversed ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-full max-w-sm sm:max-w-md">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={400}
                    height={300}
                    className="rounded-xl shadow-lg object-cover w-full h-auto"
                  />
                </div>
              </div>

              {/* Text */}
              <div
                className={`w-full md:w-1/2 flex flex-col ${
                  isReversed ? "text-right items-end" : "text-left items-start"
                }`}
              >
                {/* Number badge */}
                <div
                  className={`text-[#1C698B] font-mono font-bold text-lg mb-1 ${
                    isReversed ? "self-end" : "self-start"
                  }`}
                >
                  {number}
                </div>

                <h2 className="text-2xl font-semibold text-[#072330] mb-2">
                  {feature.title}
                </h2>
                <p className="text-base text-[#36454F] mb-4">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppFeatures;
