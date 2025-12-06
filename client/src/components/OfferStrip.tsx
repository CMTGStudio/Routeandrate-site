export default function OfferStrip() {
  return (
    <div className="bg-primary/10 border-y border-primary/20 py-4">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm md:text-base text-foreground">
          <span className="font-semibold">Intro offer:</span>{" "}
          <span className="text-muted-foreground">
            We're taking on a small number of growing ecommerce and B2B UK businesses on a no savings, no fee basis. 
            If we don't find measurable parcel savings, our fee is £0.
          </span>
        </p>
      </div>
    </div>
  );
}
