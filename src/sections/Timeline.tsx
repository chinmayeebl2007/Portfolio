import { SectionHeading } from "./About";

const timeline = [
  {
    year: "2023",
    title: "Started AI & Data Science",
  },
  {
    year: "2024",
    title: "Built Lost & Found Portal",
  },
  {
    year: "2025",
    title: "Built JobBridge",
  },
  {
    year: "2026",
    title: "FlyRank Internship",
  },
];

export const Timeline = () => {
  return (
    <section className="py-24">

      <div className="container mx-auto px-6">

        <SectionHeading
          title="Journey"
          subtitle="My learning and development timeline."
        />

        <div className="border-l-2 border-indigo-500 ml-4">

          {timeline.map((item) => (
            <div
              key={item.year}
              className="relative mb-10 pl-8"
            >
              <div className="absolute w-4 h-4 rounded-full bg-indigo-500 -left-2 top-2" />

              <h3 className="font-bold">
                {item.year}
              </h3>

              <p className="text-slate-400">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};