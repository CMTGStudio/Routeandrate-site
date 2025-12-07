import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const mailtoLink = "mailto:adam@routeandrate.com?subject=Parcel%20Review%20Enquiry&body=Name:%0ACompany:%0AAnnual%20parcel%20spend:%0ACurrent%20couriers:%0AMain%20shipping%20issues:%0A";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Request a parcel review
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          If you'd like to see whether you qualify for the no savings, no fee intro offer, 
          email me a few details about your shipping and I'll get back to you.
        </p>

        <div className="text-left max-w-md mx-auto mb-10">
          <p className="font-semibold text-foreground mb-4">What to include:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1.5">•</span>
              <span>Name</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1.5">•</span>
              <span>Company</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1.5">•</span>
              <span>Approximate annual parcel spend</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1.5">•</span>
              <span>Main couriers you use (e.g. DPD, DHL, Royal Mail)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1.5">•</span>
              <span>Biggest frustrations with your current shipping setup</span>
            </li>
          </ul>
        </div>

        <Button
          asChild
          size="lg"
          className="bg-cta text-cta-foreground text-lg px-8 py-6 mb-6"
        >
          <a href={mailtoLink} data-testid="button-email-cta">
            <Mail className="w-5 h-5 mr-2" />
            Email Adam to request a review
          </a>
        </Button>

        <p className="text-muted-foreground mb-8">
          Or email directly:{" "}
          <a
            href="mailto:adam@routeandrate.com"
            className="text-primary font-medium hover:underline"
            data-testid="link-email-direct"
          >
            adam@routeandrate.com
          </a>
        </p>

        <p className="text-sm text-muted-foreground">
          We'll only use your details to respond to your enquiry.
        </p>
      </div>
    </section>
  );
}
