import { useState, lazy, Suspense } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";
import projectsData from "@/data/projects.json";
import dashboardImage from "@assets/generated_images/web_dashboard_project_mockup.png";
import mobileImage from "@assets/generated_images/mobile_app_project_mockup.png";
import portfolioImage from "@assets/generated_images/portfolio_website_project_mockup.png";

const ProjectModal = lazy(() => import("./ProjectModal"));

const imageMap: Record<string, string> = {
  dashboard: dashboardImage,
  mobile: mobileImage,
  portfolio: portfolioImage,
};

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  repoUrl: string;
  demoUrl: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projects = projectsData as Project[];

  return (
    <section 
      id="projects" 
      className="py-20 px-4 bg-muted/30"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="group overflow-visible hover-elevate cursor-pointer transition-all duration-300"
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setSelectedProject(project)}
              aria-label={`View details for ${project.title}`}
              data-testid={`card-project-${project.id}`}
            >
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={imageMap[project.image] || dashboardImage}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-5 space-y-3">
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-5 pb-5 pt-0 flex gap-2 flex-wrap">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  onClick={(e) => e.stopPropagation()}
                >
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`View live demo of ${project.title}`}
                    data-testid={`link-project-live-${project.id}`}
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  onClick={(e) => e.stopPropagation()}
                >
                  <a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`View source code of ${project.title}`}
                    data-testid={`link-project-repo-${project.id}`}
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  onClick={(e) => e.stopPropagation()}
                >
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Watch demo of ${project.title}`}
                    data-testid={`link-project-demo-${project.id}`}
                  >
                    <Play className="h-4 w-4 mr-1" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Suspense fallback={<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"><div className="text-white">Loading...</div></div>}>
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
            imageMap={imageMap}
          />
        </Suspense>
      )}
    </section>
  );
}
