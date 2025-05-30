import Image from "next/image";

export default function Journey() {
  return (
    <div className="bg-white text-[#36454F] flex flex-col items-center pt-20 pb-20">
      {/* Title Section (STAYS OUTSIDE the background SVG) */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-start md:justify-start mb-4">
          <h1 className="text-6xl md:text-7xl font-extrabold text-[#072330] leading-none md:pr-4">
            journey.{" "}
          </h1>
          <span className="text-[#1C698B] mt-5 font-light text-2xl md:text-2xl leading-tight md:leading-none flex-grow">
            How our concept evolved into a solution that <br /> connects students and organizations.
          </span>
        </div>
      </div>

      {/* Container for the background SVG AND the content that sits on top of it */}
      {/* Increased vertical padding and width for this container to match the larger background SVG */}
      <div className="relative w-full flex justify-center mt-10 mb-20">
        <Image
          src="/journey-background.svg"
          alt="Decorative rectangular background for the journey section"
          width={1000} // Adjusted width to fit screenshot better, assuming typical screen sizes
          height={1000} // Significantly increased height to accommodate all content
          className="absolute inset-0 w-full h-full object-contain" // Use object-contain to prevent stretching unless md:object-fill is desired
        />

        {/* Main content sits on top of the background SVG */}
        {/* Adjusted padding (py-10) and max-w to ensure content fits within the background frame */}
        <main className="relative z-10 container mx-auto px-8 py-10 max-w-3xl bg-transparent">
          {/* Image Section */}
          {/* Increased picture size, adjusted margins to fit within the frame */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/journey-picture.svg"
              alt="A diverse group of people sitting on chairs, smiling towards the camera."
              width={800} // Increased size
              height={500} // Increased size proportionally
              className="w-full h-auto max-w-full" // Allow it to fill the main container width
            />
          </div>

          {/* Content Paragraphs */}
          <div className="space-y-6 text-lg leading-relaxed pl-10 pr-10">
            <p>
              The concept began with a simple observation: students and job-seekers
              often struggle to find meaningful internships, while organizations face
              inefficiencies in managing candidates. This mismatch inspired the creation
              of a centralized platform that addresses both needs.
            </p>
            <p>
              We started by identifying pain points through user interviews and
              institutional feedback. From there, we brainstormed solutions and
              sketched initial wireframes. These ideas evolved through multiple
              iterations—balancing technical feasibility with user expectations.
            </p>
            <p>
              With a validated concept, we built a prototype that featured core functions
              like skill-based matching and onboarding dashboards. User testing with
              students and HR managers refined these features further, revealing the
              need for real-time progress tracking and performance insights.
            </p>
            <p>
              Our project is now transitioning from prototype to full-fledged platform.
              With stakeholder input, strong design foundations, and a clear
              development roadmap, the platform is on track to transform internship and
              project placements into a streamlined, collaborative experience.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}