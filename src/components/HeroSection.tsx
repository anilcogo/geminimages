import { Search } from "lucide-react";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const HeroSection = ({ searchQuery, onSearchChange }: HeroSectionProps) => {
  return (
    <section id="home" className="gradient-hero pt-28 pb-16 px-4">
      <div className="container mx-auto text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 tracking-tight">
          AI Image Prompts
          <span className="block text-primary mt-1">Ready to Use</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Discover curated prompts for Gemini, ChatGPT & DeepSeek. Copy, paste, and create stunning AI images instantly.
        </p>

        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            placeholder="Search prompts..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-card border border-border shadow-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
