import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, DollarSign, Zap, TrendingUp, Clock, Rocket, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const setupFeatures = [
  "Custom chatbot design",
  "Website integration",
  "AI training on your business",
  "Knowledge base creation",
  "Lead capture setup",
  "Mobile optimization",
  "Staff training session",
  "Testing & QA",
  "Go-live support",
];

const monthlyFeatures = [
  "24/7 monitoring",
  "Unlimited content updates",
  "Performance optimization",
  "Monthly analytics reports",
  "Security updates",
  "Bug fixes & maintenance",
  "Priority support",
  "Monthly review calls",
  "Continuous AI improvements",
];

const benefits = [
  { icon: DollarSign, title: "Save Money", description: "Reduce support costs by up to 60%" },
  { icon: Zap, title: "Instant Responses", description: "Answer customers in milliseconds" },
  { icon: TrendingUp, title: "Boost Conversions", description: "Convert 3x more visitors" },
  { icon: Clock, title: "24/7 Availability", description: "Never miss a customer inquiry" },
  { icon: Rocket, title: "Scale Effortlessly", description: "Handle unlimited conversations" },
  { icon: Target, title: "Smart & Accurate", description: "AI learns your business context" },
];

export function PricingSection() {
  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="container-wide relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Simple Pricing
          </span>
          <h2 className="heading-2 mt-4 mb-4">
            Transparent, <span className="gradient-text">Value-Driven</span> Pricing
          </h2>
          <p className="body-large max-w-2xl mx-auto text-muted-foreground">
            No hidden fees. No long-term contracts. Cancel anytime with 30 days notice.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {/* Setup Fee Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-card border border-border/50 rounded-3xl p-8 h-full backdrop-blur-sm hover:border-primary/30 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Setup Fee</h3>
                  <p className="text-sm text-muted-foreground">One-time investment</p>
                </div>
              </div>
              
              <div className="mb-6">
                <span className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">$500</span>
                <span className="text-muted-foreground ml-2">one-time</span>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Everything you need to launch your AI-powered chatbot
              </p>
              
              <ul className="space-y-3 mb-8">
                {setupFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                asChild 
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold py-6"
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </motion.div>

          {/* Monthly Service Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
              <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold shadow-lg">
                Most Popular
              </span>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/50 rounded-3xl p-8 h-full backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Monthly Service</h3>
                  <p className="text-sm text-muted-foreground">Ongoing excellence</p>
                </div>
              </div>
              
              <div className="mb-6">
                <span className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">$149</span>
                <span className="text-muted-foreground ml-2">/month</span>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Complete care and continuous improvements for your chatbot
              </p>
              
              <ul className="space-y-3 mb-8">
                {monthlyFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                asChild 
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold py-6"
              >
                <Link to="/contact">Subscribe Now</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-4">Why Businesses Choose Us</h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Join hundreds of businesses that have transformed their customer experience
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary group-hover:to-accent transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h4 className="font-semibold mb-1">{benefit.title}</h4>
              <p className="text-xs text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Note */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted/50 border border-border/50">
            <Check className="w-4 h-4 text-success" />
            <span className="text-sm text-muted-foreground">
              No long-term contracts • Cancel anytime with 30 days notice • SSL encrypted • GDPR compliant
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
