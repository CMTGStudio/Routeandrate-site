import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="pt-32 pb-20 md:pt-40 md:pb-28"
      style={{ backgroundColor: "#F7F8FA" }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight mb-6">
          Your 3PL is probably overcharging you. Most brands never find out.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
          Route & Rate audits your 3PL invoices, benchmarks what you should actually be paying, and puts together a clear recovery plan. No savings, no fee.
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-[#00d4aa] to-[#c4f94b] text-black text-lg px-8 py-6 font-semibold"
          onClick={scrollToContact}
          data-testid="button-hero-cta"
        >
          Request an Audit
        </Button>
      </div>
    </section>
  );
}
