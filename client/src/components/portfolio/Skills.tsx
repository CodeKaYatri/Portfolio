import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  SiC, SiCplusplus, SiPython, SiMysql, SiGit, SiGithub
} from "react-icons/si";
import { Code, Keyboard, Monitor, Wrench, BarChart3 } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: [
      { name: "C", icon: SiC, level: 60 },
      { name: "C++", icon: SiCplusplus, level: 60 },
      { name: "Python", icon: SiPython, level: 40 },
      { name: "SQL", icon: SiMysql, level: 40 },
    ],
  },
  {
    title: "Typing",
    icon: Keyboard,
    skills: [
      { name: "English", speed: "74 WPM", level: 85 },
      { name: "Hindi", speed: "44 WPM", level: 70 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Power BI", icon: BarChart3, level: 60 },
      { name: "Git", icon: SiGit, level: 70 },
      { name: "GitHub", icon: SiGithub, level: 75 },
    ],
  },
  {
    title: "Knowledge",
    icon: Monitor,
    skills: [
      { name: "Computer Basics", level: 95 },
      { name: "Problem Solving", level: 85 },
      { name: "Data Structures", level: 75 },
      { name: "Algorithms", level: 70 },
    ],
  },
];

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="py-20 px-4 bg-muted/30"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My technical skills and areas of expertise in programming and technology.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="hover-elevate overflow-visible card-3d">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center gap-2">
                  <category.icon className="h-5 w-5 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        {'icon' in skill && skill.icon && (
                          <skill.icon className="h-5 w-5 text-muted-foreground" />
                        )}
                        <span className="text-foreground font-medium">{skill.name}</span>
                        {'speed' in skill && (
                          <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                            {skill.speed}
                          </span>
                        )}
                      </div>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                      aria-label={`${skill.name} proficiency: ${skill.level}%`}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
