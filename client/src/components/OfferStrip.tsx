export default function OfferStrip() {
  return (
    <div className="bg-[hsl(24_90%_50%/0.12)] dark:bg-[hsl(24_90%_55%/0.15)] border-y border-[hsl(24_90%_50%/0.25)] dark:border-[hsl(24_90%_55%/0.3)] py-4">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm md:text-base text-foreground">
          <span className="font-semibold text-[hsl(24_90%_35%)] dark:text-[hsl(24_90%_65%)]">Intro offer:</span>{" "}
          <span className="text-muted-foreground">
            We're taking on a small number of growing ecommerce and B2B UK businesses on a{" "}
            <span className="font-semibold text-foreground">no savings, no fee</span> basis. 
            If we don't find measurable parcel savings,{" "}
            <span className="font-semibold text-foreground">our fee is £0</span>.
          </span>
        </p>
      </div>
    </div>
  );
}
