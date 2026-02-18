import { type Prompt } from "@/data/prompts";

interface PromptCardProps {
  prompt: Prompt;
  onClick: () => void;
  index: number;
}

const PromptCard = ({ prompt, onClick, index }: PromptCardProps) => {
  return (
    <div
      className="masonry-item"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <button
        onClick={onClick}
        className="w-full text-left rounded-xl overflow-hidden bg-card border border-border card-hover group fade-in-up block"
      >
        <div className="relative overflow-hidden">
          <img
            src={prompt.image}
            alt={prompt.title}
            loading="lazy"
            className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold backdrop-blur-sm">
            {prompt.category}
          </span>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-foreground text-sm leading-snug">{prompt.title}</h3>
          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{prompt.prompt.slice(0, 80)}...</p>
        </div>
      </button>
    </div>
  );
};

export default PromptCard;
