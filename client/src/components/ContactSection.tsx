import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const spendRanges = [
  "Under £100k",
  "£100k – £250k",
  "£250k – £500k",
  "£500k – £1m",
  "Over £1m",
];

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    annualSpend: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/enquiries", formData);
      
      toast({
        title: "Enquiry sent",
        description: "We'll be in touch shortly to discuss your parcel shipping.",
      });
      
      setFormData({
        name: "",
        company: "",
        email: "",
        annualSpend: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Book a quick parcel review
          </h2>
          <p className="text-lg text-muted-foreground">
            Share a few details about your shipping and we'll tell you honestly 
            whether a proper parcel tender is worth it.
          </p>
        </div>

        <Card>
          <CardContent className="pt-8 pb-8 px-6 md:px-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    data-testid="input-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    required
                    data-testid="input-company"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  data-testid="input-email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="spend">Approximate annual parcel spend</Label>
                <Select
                  value={formData.annualSpend}
                  onValueChange={(value) =>
                    setFormData({ ...formData, annualSpend: value })
                  }
                >
                  <SelectTrigger data-testid="select-spend">
                    <SelectValue placeholder="Select a range" />
                  </SelectTrigger>
                  <SelectContent>
                    {spendRanges.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message (optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us a bit about your shipping setup..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="min-h-[120px]"
                  data-testid="input-message"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-cta text-cta-foreground"
                disabled={isSubmitting}
                data-testid="button-submit"
              >
                {isSubmitting ? "Sending..." : "Request Parcel Review"}
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-muted-foreground mb-2">Or email us directly:</p>
              <a
                href="mailto:adam@routeandrate.com"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                data-testid="link-email"
              >
                <Mail className="w-4 h-4" />
                adam@routeandrate.com
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
