import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, User, Building2, PoundSterling, Truck, MessageCircle } from "lucide-react";

const mailtoLink = "mailto:adam@routeandrate.com?subject=Parcel%20Review%20Enquiry&body=Name:%0ACompany:%0AAnnual%20parcel%20spend:%0ACurrent%20couriers:%0AMain%20shipping%20issues:%0A";

const checklistItems = [
  { icon: User, text: "Your name" },
  { icon: Building2, text: "Company name" },
  { icon: PoundSterling, text: "Approximate annual parcel spend" },
  { icon: Truck, text: "Main couriers you use (e.g. DPD, DHL, Royal Mail)" },
  { icon: MessageCircle, text: "Biggest frustrations with your current setup" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Request a parcel review
        </h2>
        
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          If you'd like to see whether you qualify for the no savings, no fee intro offer, 
          email us a few details about your shipping and we'll get back to you.
        </p>

        <Card className="p-6 md:p-8 mb-10 text-left">
          <p className="font-semibold text-foreground mb-6 text-center">
            What to include in your email:
          </p>
          <ul className="space-y-4">
            {checklistItems.map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground">{item.text}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-[#00d4aa] to-[#c4f94b] text-black text-lg px-8 py-6 mb-6 font-semibold"
        >
          <a href={mailtoLink} data-testid="button-email-cta">
            <Mail className="w-5 h-5 mr-2" />
            Email us to request a review
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
