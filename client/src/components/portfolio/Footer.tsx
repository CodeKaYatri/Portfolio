import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/CodeKaYatri", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/chandan-kumar-303478379/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:chandansoni60632@gmail.com", label: "Email" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-card-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Chandan Kumar</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              BCA Final Year Student (2026) passionate about technology, 
              programming, and creating clean, optimized software solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      data-testid={`link-footer-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-2 flex-wrap">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  asChild
                >
                  <a
                    href={social.href}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    aria-label={social.label}
                    data-testid={`link-footer-social-${social.label.toLowerCase()}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
            <p className="text-muted-foreground text-sm mt-3">
              chandansoni60632@gmail.com
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center sm:text-left">
              &copy; Chandan Kumar — 2025. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" aria-label="love" /> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
