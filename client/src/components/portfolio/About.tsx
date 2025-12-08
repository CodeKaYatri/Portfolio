import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, Code, Award, Keyboard } from "lucide-react";

const skills = [
  { name: "C / C++", level: 80 },
  { name: "Python", level: 82 },
  { name: "Java", level: 70 },
  { name: "SQL / Databases", level: 75 },
  { name: "Computer Fundamentals", level: 90 },
  { name: "Power BI", level: 75 },
];

const typingSkills = [
  { name: "English Typing", speed: "74 WPM" },
  { name: "Hindi Typing", speed: "44 WPM" },
];

const highlights = [
  { icon: GraduationCap, title: "Education", description: "BCA Final Year (2026)" },
  { icon: Code, title: "Focus", description: "Programming & Development" },
  { icon: Award, title: "Certifications", description: "NPTEL Python, Power BI" },
  { icon: Keyboard, title: "Typing", description: "74 WPM English" },
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
              Hi! I'm <strong className="text-foreground">Chandan Kumar</strong>, pursuing my BCA final year 
              (completing in 2026). I am passionate about technology, programming, and modern software solutions.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I have strong fundamentals in computer science and problem-solving. I enjoy creating clean, 
              optimized, and structured applications. My expertise includes C, C++, Python, Java, and SQL, 
              along with tools like Power BI for data visualization.
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

            <Card className="bg-muted/30">
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Keyboard className="h-4 w-4 text-primary" />
                  Typing Speed
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {typingSkills.map((skill) => (
                    <div key={skill.name} className="text-center p-3 bg-background rounded-lg">
                      <p className="text-2xl font-bold text-primary">{skill.speed}</p>
                      <p className="text-sm text-muted-foreground">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
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
