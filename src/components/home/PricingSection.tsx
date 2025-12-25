import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: 49,
    description: "Perfect for small businesses getting started",
    features: ["1 AI Chatbot", "1,000 conversations/month", "Basic analytics", "Email support", "5 integrations", "Knowledge base", "Website widget"],
    popular: false,
  },
  {
    name: "Professional",
    price: 149,
    description: "Best for growing businesses",
    features: ["5 AI Chatbots", "10,000 conversations/month", "Advanced analytics", "Priority 24/7 support", "Unlimited integrations", "Custom branding", "All channels", "Multi-language", "A/B testing"],
    popular: true,
  },
  {
    name: "Business",
    price: 399,
    description: "For established companies",
    features: ["Unlimited chatbots", "50,000 conversations/month", "Real-time AI insights", "Dedicated manager", "White-label solution", "Custom AI training", "SLA guarantees", "API access"],
    popular: false,
  },
  {
    name: "Enterprise",
    price: null,
    description: "Custom solutions for large organizations",
    features: ["Everything in Business", "Unlimited conversations", "On-premise deployment", "Custom integrations", "Dedicated infrastructure", "Custom contracts", "Training & onboarding"],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="section-padding">
      <div className="container-wide">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Pricing</span>
          <h2 className="heading-2 mt-4 mb-4">Simple, <span className="gradient-text">Transparent Pricing</span></h2>
          <p className="body-large max-w-2xl mx-auto">No hidden fees. Cancel anytime. Start free.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
              className={`pricing-card ${plan.popular ? "pricing-card-popular border-2 border-primary" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-bg text-primary-foreground text-sm font-medium flex items-center gap-1">
                  <Star className="w-4 h-4" /> Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
              <div className="mb-6">
                {plan.price ? (
                  <><span className="text-4xl font-bold">${plan.price}</span><span className="text-muted-foreground">/month</span></>
                ) : (
                  <span className="text-2xl font-bold">Custom</span>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className={`w-full ${plan.popular ? "gradient-bg hover:opacity-90" : ""}`} variant={plan.popular ? "default" : "outline"}>
                <Link to={plan.price ? "/signup" : "/contact"}>{plan.price ? "Start Free Trial" : "Contact Sales"}</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">All plans include: SSL encryption, 99.9% uptime, GDPR compliance</p>
      </div>
    </section>
  );
}
