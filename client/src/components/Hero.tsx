import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/flat_lay_desk_parcels_laptop_analytics.png";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[70vh] md:min-h-0 pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      <img 
        src={heroBg}
        alt="Flat lay desk with parcels, laptop and shipping analytics charts"
        className="absolute inset-0 w-full h-full object-cover object-[60%_25%] sm:object-[55%_35%] md:object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/55 to-background/90 md:from-background/80 md:via-background/75 md:to-background" />
      
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight mb-6">
          92% of SME's are overpaying for parcel shipping.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
          Find out for free how much you can save.
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-[#00d4aa] to-[#c4f94b] text-black text-lg px-8 py-6 font-semibold"
          onClick={scrollToContact}
          data-testid="button-hero-cta"
        >
          Save me Money
        </Button>
      </div>
    </section>
  );
}
