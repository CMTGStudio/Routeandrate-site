import { Check } from "lucide-react";

const criteria = [
  "Growing UK ecommerce or B2B businesses without a logistics team",
  "Spending roughly £100k–£500k per year on parcel shipping",
  "Using one or two main couriers (like DPD, DHL, UPS, Royal Mail)",
  "No in-house logistics or procurement team dedicated to parcels",
];

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Who Route & Rate is for
          </h2>
          <p className="text-lg text-muted-foreground">
            We work best with businesses that fit this profile:
          </p>
        </div>

        <ul className="space-y-4 max-w-2xl mx-auto">
          {criteria.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-4"
              data-testid={`criteria-${index}`}
            >
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground text-lg leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
