import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Upload, Settings, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Connect",
    description: "Upload your knowledge base and connect your data sources. Import FAQs, product docs, and support history.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Customize",
    description: "Train AI on your data and design conversation flows. Customize responses to match your brand voice.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Deploy",
    description: "Add our widget to your website and go live instantly. Start automating support in minutes.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="heading-2 mt-4 mb-4">
            Go Live in <span className="gradient-text">3 Simple Steps</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Get your AI chatbot up and running in under 5 minutes
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="glass rounded-3xl p-8 text-center hover-lift h-full">
                  {/* Step Number */}
                  <div className="relative inline-flex mb-6">
                    <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center">
                      <step.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                      <span className="text-sm font-bold">{step.number}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 z-10 -translate-y-1/2">
                    <div className="w-8 h-8 rounded-full bg-card shadow-lg flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="gradient-bg hover:opacity-90">
            <Link to="/signup">
              Start Building Your Bot
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
