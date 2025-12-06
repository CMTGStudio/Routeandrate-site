import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
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
