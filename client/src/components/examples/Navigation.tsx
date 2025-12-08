import { ThemeProvider } from "@/lib/theme";
import Navigation from "../portfolio/Navigation";

export default function NavigationExample() {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
}
