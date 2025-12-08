import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@assets/generated_images/professional_developer_headshot_placeholder.png";

export default function Hero() {
  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center pt-16 px-4"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-12 lg:py-20">
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="space-y-2">
              <p className="text-muted-foreground text-lg">Hello, I'm</p>
              <h1 
                id="hero-heading" 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              >
                Chandan Kumar
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                Final-year BCA Student | Aspiring Web Developer
              </p>
            </div>
            
            <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Passionate about creating beautiful, accessible, and user-friendly web experiences. 
              Currently exploring modern web technologies and building projects that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={handleContactClick}
                data-testid="button-contact-hero"
              >
                Contact Me
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit GitHub profile"
                    data-testid="link-github"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit LinkedIn profile"
                    data-testid="link-linkedin"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a 
                    href="mailto:chandansoni60632@gmail.com"
                    aria-label="Send email"
                    data-testid="link-email-hero"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                <img
                  src={heroImage}
                  alt="Chandan Kumar - Professional headshot"
                  className="w-full h-full object-cover"
                  loading="eager"
                  data-testid="img-hero-profile"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                <span className="text-center leading-tight">Open to<br/>Work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
