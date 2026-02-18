const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">About Geminimages</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Geminimages is your go-to library for high-quality AI image generation prompts.
          We curate and craft prompts for various categories — from professional headshots
          to cinematic shots — so you can create stunning visuals with just one click.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Simply browse, copy the prompt you like, and paste it into Google Gemini, ChatGPT,
          or DeepSeek. It's that easy. New prompts are added regularly.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
