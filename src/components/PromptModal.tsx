import { useState } from "react";
import { X, Copy, Check, ExternalLink } from "lucide-react";
import { type Prompt } from "@/data/prompts";

interface PromptModalProps {
  prompt: Prompt;
  onClose: () => void;
}

const aiTools = [
  { name: "Google Gemini", url: "https://gemini.google.com/", color: "bg-sky-deep" },
  { name: "ChatGPT", url: "https://chat.openai.com/", color: "bg-foreground" },
  { name: "DeepSeek", url: "https://chat.deepseek.com/", color: "bg-primary" },
];

const PromptModal = ({ prompt, onClose }: PromptModalProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" />

      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative glass-panel rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-fade-in-up shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-card/80 hover:bg-card text-foreground transition-colors"
        >
          <X size={18} />
        </button>

        <img
          src={prompt.image}
          alt={prompt.title}
          className="w-full rounded-t-2xl object-cover max-h-64"
        />

        <div className="p-6">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-3">
            {prompt.category}
          </span>
          <h2 className="text-xl font-bold text-foreground mb-4">{prompt.title}</h2>

          <div className="bg-muted rounded-xl p-4 mb-5">
            <p className="text-sm text-foreground leading-relaxed select-all">{prompt.prompt}</p>
          </div>

          <button
            onClick={handleCopy}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl gradient-sky text-primary-foreground font-semibold ripple-btn transition-transform hover:scale-[1.02] mb-4"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? "Copied ✔" : "Copy Prompt"}
          </button>

          <div className="grid grid-cols-3 gap-2">
            {aiTools.map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-border text-xs font-medium text-foreground hover:bg-secondary transition-colors"
              >
                <ExternalLink size={13} />
                {tool.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptModal;
