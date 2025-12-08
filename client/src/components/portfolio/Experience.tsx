import { GraduationCap, Briefcase } from "lucide-react";

const timelineItems = [
  {
    type: "education",
    title: "Bachelor of Computer Applications (BCA)",
    organization: "University Name",
    period: "2022 - Present (Final Year)",
    description: "Pursuing BCA with focus on web development, database management, and software engineering principles. Maintaining strong academic performance while working on practical projects.",
    icon: GraduationCap,
  },
  {
    type: "experience",
    title: "Web Development Intern",
    organization: "Tech Startup",
    period: "Summer 2024",
    description: "Collaborated with senior developers to build responsive web applications. Gained hands-on experience with React, Node.js, and modern development workflows.",
    icon: Briefcase,
  },
  {
    type: "experience",
    title: "Freelance Web Developer",
    organization: "Self-Employed",
    period: "2023 - Present",
    description: "Working with small businesses and individuals to create custom websites and web applications. Managing projects from concept to deployment.",
    icon: Briefcase,
  },
  {
    type: "education",
    title: "Higher Secondary (12th)",
    organization: "School Name",
    period: "2020 - 2022",
    description: "Completed higher secondary education with focus on Science and Computer Science. Developed foundational programming skills.",
    icon: GraduationCap,
  },
];

export default function Experience() {
  return (
    <section 
      id="experience" 
      className="py-20 px-4"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="experience-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey through academics and professional experiences.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" aria-hidden="true" />

          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
                  <item.icon className="h-4 w-4 text-primary-foreground" />
                </div>

                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-card border border-card-border rounded-lg p-5 hover-elevate transition-all">
                    <span className="text-sm text-muted-foreground font-medium">{item.period}</span>
                    <h3 className="text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                    <p className="text-primary font-medium text-sm">{item.organization}</p>
                    <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                <div className="hidden md:block flex-1" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
