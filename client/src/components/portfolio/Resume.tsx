import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

export default function Resume() {
  const handleDownload = () => {
    // Create a link element to download the resume image
    const link = document.createElement("a");
    link.href = "/Screenshot 2025-12-08 215725.jpg";
    link.download = "Chandan-Kumar-Resume.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="resume" 
      className="py-20 px-4 bg-muted/30"
      aria-labelledby="resume-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="resume-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My Resume
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Download my resume to learn more about my qualifications, experience, and skills.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-3d overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col items-center gap-6">
                <div className="w-full rounded-lg overflow-hidden border border-border shadow-lg bg-background">
                  <img 
                    src="/Screenshot 2025-12-08 215725.jpg" 
                    alt="Chandan Kumar Resume"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>
                
                <Button 
                  onClick={handleDownload}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}



