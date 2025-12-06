import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/abstract_logistics_hero_background.png";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight mb-6">
          Stop overpaying for parcel shipping.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
          For our first few clients, Route & Rate works on a{" "}
          <span className="font-semibold text-foreground">no savings, no fee</span> basis: 
          if we can't lower your parcel costs, you don't pay a penny.
        </p>
        <Button
          size="lg"
          className="bg-cta text-cta-foreground text-lg px-8 py-6"
          onClick={scrollToContact}
          data-testid="button-hero-cta"
        >
          See if you qualify
        </Button>
      </div>
    </section>
  );
}
