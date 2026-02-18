import { type Prompt } from "@/data/prompts";
import PromptCard from "./PromptCard";

interface PromptGridProps {
  prompts: Prompt[];
  onPromptClick: (prompt: Prompt) => void;
}

const PromptGrid = ({ prompts, onPromptClick }: PromptGridProps) => {
  if (prompts.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-2xl mb-2">🔍</p>
        <p className="text-muted-foreground">No prompts found. Try a different search or category.</p>
      </div>
    );
  }

  return (
    <section id="popular-prompts" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-2">Popular Prompts</h2>
        <p className="text-muted-foreground text-center mb-10">Click any card to view the full prompt</p>

        <div className="masonry-grid">
          {prompts.map((prompt, i) => (
            <PromptCard key={prompt.id} prompt={prompt} onClick={() => onPromptClick(prompt)} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromptGrid;
