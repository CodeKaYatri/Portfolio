import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    id: 1,
    title: "The Joy of Programming Using Python",
    issuer: "NPTEL Swayam",
    score: "82%",
    date: "2024",
    description: "A comprehensive course covering Python programming fundamentals, data structures, algorithms, and problem-solving techniques. Achieved a score of 82% in the final assessment.",
    skills: ["Python", "Programming", "Problem Solving", "Data Structures"],
    verified: true,
    image: "/Screenshot 2025-12-08 214404.jpg",
  },
  {
    id: 2,
    title: "Power BI Certification",
    issuer: "Skill Nation",
    score: "Certified",
    date: "2024",
    description: "Professional certification in Microsoft Power BI for business intelligence and data visualization. Covers data modeling, DAX formulas, report creation, and dashboard design.",
    skills: ["Power BI", "Data Visualization", "Business Intelligence", "DAX"],
    verified: true,
    image: "/Screenshot 2025-12-08 214905.jpg",
  },
];

export default function Certifications() {
  return (
    <section 
      id="certifications" 
      className="py-20 px-4"
      aria-labelledby="certifications-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="certifications-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Certifications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications demonstrating my commitment to continuous learning.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <Card key={cert.id} className="hover-elevate overflow-visible card-3d">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                      <p className="text-muted-foreground text-sm mt-1">{cert.issuer}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="shrink-0">
                    {cert.score}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {cert.image && (
                  <div className="rounded-lg overflow-hidden border border-border shadow-md">
                    <img 
                      src={cert.image} 
                      alt={`${cert.title} Certificate`}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                )}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.date}</span>
                  </div>
                  {cert.verified && (
                    <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20">
                      Verified
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
