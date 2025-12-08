import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const timeline = [
  {
    id: 1,
    type: "education",
    title: "Bachelor of Computer Applications (BCA)",
    organization: "University",
    period: "2023 - 2026",
    description: "Pursuing BCA final year with focus on computer science fundamentals, programming languages, database management, and software development. Building strong foundation in problem-solving and analytical thinking.",
    icon: GraduationCap,
    current: true,
  },
  {
    id: 2,
    type: "certification",
    title: "NPTEL Python Certification",
    organization: "NPTEL Swayam",
    period: "2024",
    description: "Completed 'The Joy of Programming Using Python' course with 82% score. Gained expertise in Python programming, data structures, and algorithmic problem solving.",
    icon: Award,
  },
  {
    id: 3,
    type: "certification",
    title: "Power BI Certification",
    organization: "Skill Nation",
    period: "2024",
    description: "Earned professional certification in Microsoft Power BI for business intelligence and data visualization. Learned data modeling, DAX, and creating interactive dashboards.",
    icon: Award,
  },
  {
    id: 4,
    type: "project",
    title: "Student Management System",
    organization: "Personal Project",
    period: "2024",
    description: "Developed a comprehensive student management system using C programming with AI-assisted techniques. Implemented features for student records, grades, and attendance tracking.",
    icon: BookOpen,
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
            Education & Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic journey and professional development milestones.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={item.id} className="relative flex gap-6 md:gap-8">
                <div className="hidden md:flex flex-col items-center">
                  <div 
                    className={`w-16 h-16 rounded-full flex items-center justify-center z-10 ${
                      item.current 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    <item.icon className="h-6 w-6" />
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="flex-1 w-0.5 bg-transparent" />
                  )}
                </div>

                <Card className={`flex-1 hover-elevate overflow-visible ${item.current ? 'border-primary/50' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="md:hidden p-2 bg-primary/10 rounded-lg">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                          <p className="text-muted-foreground text-sm">{item.organization}</p>
                        </div>
                      </div>
                      <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                        item.current 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {item.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
