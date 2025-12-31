import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for small businesses just getting started",
    features: [
      "500 conversations/month",
      "1 chatbot",
      "Website widget",
      "Basic analytics",
      "Email support",
      "5-minute setup",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$149",
    period: "/month",
    description: "For growing businesses that need more power",
    features: [
      "2,500 conversations/month",
      "3 chatbots",
      "Website + Facebook + Instagram",
      "Advanced analytics",
      "Lead capture & CRM sync",
      "Priority support",
      "Custom branding",
      "Human handoff",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Business",
    price: "$349",
    period: "/month",
    description: "For established businesses with high volume",
    features: [
      "10,000 conversations/month",
      "Unlimited chatbots",
      "All channels (WhatsApp, SMS, etc.)",
      "Custom integrations",
      "Dedicated account manager",
      "Phone support",
      "API access",
      "White-label option",
      "Advanced automations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  {
    question: "What counts as a conversation?",
    answer: "A conversation is a complete chat session with a customer, regardless of how many messages are exchanged within that session."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes! There are no long-term contracts. Cancel anytime with no penalties or hidden fees."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, every plan comes with a 14-day free trial. No credit card required to start."
  },
  {
    question: "What if I exceed my conversation limit?",
    answer: "We'll notify you when you're close to your limit. You can upgrade anytime, or pay a small overage fee."
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="heading-1 mb-6">
                Simple, Transparent <span className="gradient-text">Pricing</span>
              </h1>
              <p className="body-large mb-4">
                No hidden fees. No long-term contracts. Start free and scale as you grow.
              </p>
              <p className="text-success font-medium">
                All plans include a 14-day free trial
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="section-padding pt-8">
          <div className="container-wide">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative glass rounded-3xl p-8 ${
                    plan.popular ? "ring-2 ring-primary scale-105" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="gradient-bg text-primary-foreground text-sm font-medium px-4 py-1 rounded-full flex items-center gap-1">
                        <Sparkles className="w-4 h-4" /> Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-success" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    asChild 
                    className={`w-full ${plan.popular ? "gradient-bg" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    <Link to={plan.cta === "Contact Sales" ? "/contact" : "/signup"}>
                      {plan.cta}
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2">Frequently Asked Questions</h2>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-2xl p-6"
                >
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-wide text-center">
            <h2 className="heading-2 mb-6">Still Have Questions?</h2>
            <p className="body-large mb-8">
              Our team is here to help you find the right plan for your business.
            </p>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Talk to Sales</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
