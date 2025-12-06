import { Card, CardContent } from "@/components/ui/card";
import { FileSearch, BarChart3, Handshake } from "lucide-react";

const services = [
  {
    icon: FileSearch,
    title: "Review your current parcel spend",
    description:
      "We analyse your invoices, contracts and service levels to see where money is leaking.",
  },
  {
    icon: BarChart3,
    title: "Compare courier options",
    description:
      "We run a structured comparison of multiple carriers and services in plain English, not jargon.",
  },
  {
    icon: Handshake,
    title: "Plan your next move",
    description:
      "We show you whether to swap courier, renegotiate with your current courier or run a full parcel tender – and what a better deal should look like.",
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
            Route & Rate helps you understand your parcel shipping costs and pay less for them.
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
