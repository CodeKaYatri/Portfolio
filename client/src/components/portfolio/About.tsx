import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, Code, Coffee, Gamepad2 } from "lucide-react";

const skills = [
  { name: "React / JavaScript", level: 85 },
  { name: "HTML / CSS", level: 90 },
  { name: "TypeScript", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "Python", level: 65 },
  { name: "SQL / Databases", level: 70 },
];

const highlights = [
  { icon: GraduationCap, title: "Education", description: "BCA Final Year Student" },
  { icon: Code, title: "Focus", description: "Full Stack Web Development" },
  { icon: Coffee, title: "Passion", description: "Clean, Accessible Code" },
  { icon: Gamepad2, title: "Interests", description: "Gaming, Music, Tech" },
];

export default function About() {
  return (
    <section 
      id="about" 
      className="py-20 px-4"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Hi! I'm <strong className="text-foreground">Chandan Kumar</strong>, a final-year BCA student 
              passionate about web development and creating meaningful digital experiences. My journey 
              in technology started with curiosity and has grown into a dedicated pursuit of building 
              accessible, performant, and beautiful applications.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I specialize in front-end development with React and have been expanding my skills 
              to become a full-stack developer. I believe in writing clean code, following best 
              practices, and never stopping learning.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <Card key={item.title} className="hover-elevate">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-md">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Technical Skills</h3>
            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2"
                    aria-label={`${skill.name} proficiency: ${skill.level}%`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
