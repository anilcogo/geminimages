import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import PromptGrid from "@/components/PromptGrid";
import PromptModal from "@/components/PromptModal";
import AIToolsSection from "@/components/AIToolsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { prompts, type Category, type Prompt } from "@/data/prompts";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);

  const filteredPrompts = useMemo(() => {
    return prompts.filter((p) => {
      const matchesCategory = !activeCategory || p.category === activeCategory;
      const matchesSearch =
        !searchQuery ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <CategoriesSection activeCategory={activeCategory} onCategoryClick={setActiveCategory} />
      <PromptGrid prompts={filteredPrompts} onPromptClick={setSelectedPrompt} />
      <AIToolsSection />
      <AboutSection />
      <Footer />
      <WhatsAppButton />

      {selectedPrompt && (
        <PromptModal prompt={selectedPrompt} onClose={() => setSelectedPrompt(null)} />
      )}
    </div>
  );
};

export default Index;
