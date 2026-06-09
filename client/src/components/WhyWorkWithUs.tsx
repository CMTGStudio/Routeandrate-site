import { Shield, Microscope, Users } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Independent",
    description:
      "We're not connected to any 3PL provider. We work for you, not for the warehouse, which means our findings are always in your interest.",
  },
  {
    icon: Microscope,
    title: "Built on real logistics experience",
    description:
      "Our founder has overseen tens of millions in logistics spend across EMEA. We've sat on the other side of these contracts, so we know exactly where the money disappears.",
  },
  {
    icon: Users,
    title: "Founder-friendly",
    description:
      "Plain language, clear numbers, no jargon. We explain what we found and what it means for your business — without drowning you in a 60-page report.",
  },
];

export default function WhyWorkWithUs() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Work With Us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="text-center"
              data-testid={`pillar-${index}`}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
