import { ExternalLink } from "lucide-react";

const tools = [
  {
    name: "Google Gemini",
    description: "Google's powerful multimodal AI",
    url: "https://gemini.google.com/",
    icon: "✨",
  },
  {
    name: "ChatGPT",
    description: "OpenAI's conversational AI",
    url: "https://chat.openai.com/",
    icon: "🤖",
  },
  {
    name: "DeepSeek",
    description: "Advanced reasoning AI model",
    url: "https://chat.deepseek.com/",
    icon: "🔮",
  },
];

const AIToolsSection = () => {
  return (
    <section id="ai-tools" className="py-16 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-2">Use Prompt With</h2>
        <p className="text-muted-foreground text-center mb-10">Open your favourite AI tool and paste the prompt</p>

        <div className="grid sm:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border card-hover group text-center"
            >
              <span className="text-4xl">{tool.icon}</span>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{tool.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{tool.description}</p>
              </div>
              <span className="flex items-center gap-1 text-xs text-primary font-medium mt-1">
                Open <ExternalLink size={12} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIToolsSection;
