import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Loader2, 
  MessageSquare,
  Clock,
  CheckCircle
} from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  subject: z.string().trim().max(200, { message: "Subject must be less than 200 characters" }).optional(),
  message: z.string().trim().min(1, { message: "Message is required" }).max(2000, { message: "Message must be less than 2000 characters" }),
});

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Our team typically responds within 24 hours",
    value: "hello@7figurescalers.com",
    href: "mailto:hello@7figurescalers.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 9am to 6pm EST",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Come say hello at our office",
    value: "123 Innovation Drive, Austin, TX 78701",
    href: "https://maps.google.com",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    try {
      contactSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    const { error } = await supabase.from("contacts").insert({
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim() || null,
      message: formData.message.trim(),
    });

    setIsLoading(false);

    if (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly via email.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Start a{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Conversation
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions about our AI chatbot solutions? We're here to help you scale your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.title === "Visit Us" ? "_blank" : undefined}
                rel={item.title === "Visit Us" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full glass border-white/10 hover:border-primary/50 transition-all duration-300 hover-lift">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    <p className="text-primary font-medium">{item.value}</p>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glass border-white/10">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                      <p className="text-muted-foreground mb-6">
                        Your message has been received. We'll get back to you within 24 hours.
                      </p>
                      <Button onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}>
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? "border-destructive" : ""}
                          />
                          {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? "border-destructive" : ""}
                          />
                          {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="How can we help you?"
                          value={formData.subject}
                          onChange={handleChange}
                          className={errors.subject ? "border-destructive" : ""}
                        />
                        {errors.subject && <p className="text-sm text-destructive">{errors.subject}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your project or ask us anything..."
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className={errors.message ? "border-destructive" : ""}
                        />
                        {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                      </div>

                      <Button type="submit" size="lg" className="w-full gradient-bg" disabled={isLoading}>
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Side Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Transform Your Customer Experience?
                </h2>
                <p className="text-muted-foreground text-lg">
                  Whether you're looking to automate support, generate leads, or create 
                  engaging customer experiences, our team is here to help you find the 
                  perfect AI solution for your business.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Quick Response Time</h3>
                    <p className="text-muted-foreground text-sm">
                      We respond to all inquiries within 24 hours during business days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Expert Consultation</h3>
                    <p className="text-muted-foreground text-sm">
                      Get personalized advice from our AI specialists on the best solution for your needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Free Demo Available</h3>
                    <p className="text-muted-foreground text-sm">
                      See our AI chatbots in action with a personalized demo tailored to your industry.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Teaser */}
              <Card className="glass border-white/10">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Have Questions?</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Check out our frequently asked questions for quick answers to common inquiries.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="/#faq">View FAQ</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
