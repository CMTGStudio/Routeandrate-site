const steps = [
  {
    number: "1",
    title: "Share your current setup",
    description:
      "You send us recent invoices and a quick overview of how you ship today.",
  },
  {
    number: "2",
    title: "We model your options",
    description:
      "We benchmark your rates and build a clear like-for-like comparison across couriers.",
  },
  {
    number: "3",
    title: "You choose, we support",
    description:
      "You choose the route and rate that fits your business; we support implementation and negotiations.",
    callout:
      "If you're in our introductory group, our work is on a no savings, no fee basis – if we don't create measurable savings, you don't pay a penny.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple, three-step process to lower your parcel costs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-border" style={{ left: '16.67%', right: '16.67%' }} />
          
          {steps.map((step, index) => (
            <div key={index} className="relative" data-testid={`step-${index}`}>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-6 relative z-10">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {step.description}
                </p>
                {step.callout && (
                  <p className="text-sm text-primary bg-primary/10 rounded-md px-4 py-3 mt-2">
                    {step.callout}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
