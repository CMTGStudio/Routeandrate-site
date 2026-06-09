import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const formSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  brand: z.string().min(1, "Please enter your brand or company name"),
  spend: z.string().min(1, "Please select your monthly 3PL spend"),
  threepl: z.string().min(1, "Please enter your 3PL provider"),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const spendOptions = [
  { value: "Under £5k/month", label: "Under £5k/month" },
  { value: "£5k – £20k/month", label: "£5k – £20k/month" },
  { value: "£20k – £50k/month", label: "£20k – £50k/month" },
  { value: "£50k – £100k/month", label: "£50k – £100k/month" },
  { value: "Over £100k/month", label: "Over £100k/month" },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      brand: "",
      spend: "",
      threepl: "",
      notes: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: FormValues) =>
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      setSubmitted(true);
    },
  });

  const onSubmit = (data: FormValues) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Request an Audit
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Fill in a few details and we'll come back to you within 2 working days to talk through what we can find.
          </p>
        </div>

        {submitted ? (
          <div
            className="bg-primary/10 border border-primary/20 rounded-lg px-6 py-8 text-center"
            data-testid="text-success-message"
          >
            <p className="text-lg font-semibold text-foreground mb-2">Thanks — we'll be in touch within 2 working days.</p>
            <p className="text-muted-foreground">We'll review your details and reach out to discuss your audit.</p>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" data-testid="input-name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="brand"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Brand / company name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your brand or company" data-testid="input-brand" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="spend"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Monthly 3PL spend</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-spend">
                          <SelectValue placeholder="Select a range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {spendOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="threepl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Which 3PL do you use?</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Huboo, Fulfilment by Amazon, a local warehouse" data-testid="input-threepl" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Anything specific you're concerned about? <span className="text-muted-foreground font-normal">(optional)</span></FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g. charges seem high for storage, unexpected fees on invoices..."
                        className="resize-none"
                        rows={4}
                        data-testid="textarea-notes"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {mutation.isError && (
                <p className="text-sm text-destructive" data-testid="text-error-message">
                  Something went wrong. Please try again or email us directly at adam@routeandrate.com.
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-[#00d4aa] to-[#c4f94b] text-black text-lg py-6 font-semibold"
                disabled={mutation.isPending}
                data-testid="button-submit-audit"
              >
                {mutation.isPending ? "Sending…" : "Request an Audit"}
              </Button>
            </form>
          </Form>
        )}
      </div>
    </section>
  );
}
