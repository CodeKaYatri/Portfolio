import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ExternalLink, Github, Play } from "lucide-react";
import dashboardImage from "@assets/generated_images/web_dashboard_project_mockup.png";

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

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  imageMap: Record<string, string>;
}

export default function ProjectModal({ project, onClose, imageMap }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="bg-background rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        role="document"
      >
        <div className="sticky top-0 bg-background border-b border-border p-4 flex items-center justify-between gap-4 z-10">
          <h2 id="modal-title" className="text-xl font-semibold text-foreground">
            {project.title}
          </h2>
          <Button
            ref={closeButtonRef}
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close modal"
            data-testid="button-close-modal"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          <div className="aspect-video rounded-lg overflow-hidden bg-muted">
            <img
              src={imageMap[project.image] || dashboardImage}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button asChild>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  data-testid="link-modal-live"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Live
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  data-testid="link-modal-repo"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Source Code
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  data-testid="link-modal-demo"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Watch Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
