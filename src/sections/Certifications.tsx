import { Card } from "@/src/components/ui/Card";
import { SectionHeading } from "./About";

const certifications = [
  {
    title: "Microsoft Azure AI",
    issuer: "Microsoft Learn",
    year: "2026",
    description:
      "Completed certification in developing AI-powered applications using Microsoft Azure AI services.",
  },
  {
    title: "NPTEL Data Structures & Algorithms",
    issuer: "NPTEL",
    year: "2023",
    description:
      "Completed an NPTEL certification in Data Structures and Algorithms with strong academic performance.",
  },
  {
    title: "Google × M. S. Ramaiah Institute of Technology × DeepStation AI Hackathon",
    issuer: "Google • MSRIT • DeepStation AI",
    year: "2026",
    description:
      "Developed AI-driven solutions in a competitive hackathon environment, collaborating with teammates to solve real-world problems.",
  },
  {
    title: "PRISM Hackathon",
    issuer: "PRISM",
    year: "2025",
    description:
      "Participated in a software development hackathon, collaborating on innovative problem-solving and application development.",
  },
];

export const Certifications = () => {
  return (
    <section className="py-24">

      <div className="container mx-auto px-6">

        <SectionHeading
          title="Certifications"
          subtitle="Courses, certifications and hackathons."
        />

        <div className="grid md:grid-cols-2 gap-6">

          {certifications.map((item) => (
            <Card key={item.title} className="p-6">
  <h3 className="text-lg font-bold">{item.title}</h3>

  <p className="mt-2 text-indigo-400">{item.issuer}</p>

  <p className="text-sm text-slate-500">{item.year}</p>

  <p className="mt-3 text-slate-400 leading-relaxed">
    {item.description}
  </p>
</Card>
          ))}

        </div>

      </div>

    </section>
  );
};