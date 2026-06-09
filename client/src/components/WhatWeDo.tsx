import { Card, CardContent } from "@/components/ui/card";
import { FileSearch, BarChart3, ClipboardList } from "lucide-react";

const services = [
  {
    icon: FileSearch,
    title: "Audit your 3PL invoices",
    description:
      "We go line by line through your 3PL billing to find errors, duplicate charges, and fees you should never have been paying.",
  },
  {
    icon: BarChart3,
    title: "Benchmark against what you should be paying",
    description:
      "We compare your rates against current market benchmarks so you can see exactly where you're being overcharged.",
  },
  {
    icon: ClipboardList,
    title: "Give you a clear recovery plan",
    description:
      "We put together a straightforward report with the specific overcharges we've found and what to do about them.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Route & Rate helps UK DTC brands find and recover money lost to 3PL billing errors and overcharges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-service-${index}`}>
              <CardContent className="pt-8 pb-8 px-6">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
