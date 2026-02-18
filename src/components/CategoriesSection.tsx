import { categories, type Category } from "@/data/prompts";

interface CategoriesSectionProps {
  activeCategory: Category | null;
  onCategoryClick: (category: Category | null) => void;
}

const CategoriesSection = ({ activeCategory, onCategoryClick }: CategoriesSectionProps) => {
  return (
    <section id="categories" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-2">Browse Categories</h2>
        <p className="text-muted-foreground text-center mb-10">Find the perfect prompt for any style</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          <button
            onClick={() => onCategoryClick(null)}
            className={`flex flex-col items-center gap-2 p-5 rounded-xl border transition-all duration-200 ${
              activeCategory === null
                ? "bg-primary border-primary text-primary-foreground shadow-lg"
                : "bg-card border-border text-foreground hover:border-primary/40 card-hover"
            }`}
          >
            <span className="text-2xl">🔥</span>
            <span className="text-sm font-semibold">All Prompts</span>
          </button>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => onCategoryClick(cat.name)}
              className={`flex flex-col items-center gap-2 p-5 rounded-xl border transition-all duration-200 ${
                activeCategory === cat.name
                  ? "bg-primary border-primary text-primary-foreground shadow-lg"
                  : "bg-card border-border text-foreground hover:border-primary/40 card-hover"
              }`}
            >
              <span className="text-2xl">{cat.icon}</span>
              <span className="text-sm font-semibold">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
