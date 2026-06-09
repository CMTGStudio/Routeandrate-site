import { Check } from "lucide-react";

const criteria = [
  { text: "UK DTC ecommerce brands using a third-party logistics provider (3PL)" },
  { text: "Paying your 3PL for pick, pack, storage, or fulfilment services" },
  { text: "Spending enough with your 3PL that billing errors actually hurt — typically £5k+/month" },
  { text: "No dedicated finance or logistics team checking the invoices line by line" },
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
            We work best with brands that look like this:
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
              <span className="text-foreground text-lg leading-relaxed">
                {item.text}
              </span>
            </li>
          ))}
        </ul>

        <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
          If this sounds like you, there's a good chance we'll find something worth recovering.
        </p>
      </div>
    </section>
  );
}
