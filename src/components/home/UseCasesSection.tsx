import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Code,
  Heart,
  Building2,
  Wallet,
  GraduationCap,
  Plane,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const useCases = [
  {
    id: "ecommerce",
    icon: ShoppingCart,
    name: "E-commerce",
    benefits: [
      "Automate order tracking and returns",
      "Personalized product recommendations",
      "24/7 cart abandonment recovery",
      "Instant inventory inquiries",
    ],
    stat: "45% increase in conversions",
    cta: "View E-commerce Case Study",
  },
  {
    id: "saas",
    icon: Code,
    name: "SaaS",
    benefits: [
      "Streamlined user onboarding",
      "Technical support automation",
      "Billing and subscription queries",
      "Feature adoption assistance",
    ],
    stat: "60% reduction in support tickets",
    cta: "View SaaS Case Study",
  },
  {
    id: "healthcare",
    icon: Heart,
    name: "Healthcare",
    benefits: [
      "24/7 appointment scheduling",
      "Patient FAQ automation",
      "HIPAA compliant messaging",
      "Prescription refill requests",
    ],
    stat: "80% patient satisfaction",
    cta: "View Healthcare Case Study",
  },
  {
    id: "realestate",
    icon: Building2,
    name: "Real Estate",
    benefits: [
      "Instant property inquiries",
      "Automated viewing scheduling",
      "Lead qualification 24/7",
      "Virtual tour assistance",
    ],
    stat: "3x more qualified leads",
    cta: "View Real Estate Case Study",
  },
  {
    id: "finance",
    icon: Wallet,
    name: "Finance",
    benefits: [
      "Account balance inquiries",
      "Fraud alert handling",
      "Loan application support",
      "Secure transaction verification",
    ],
    stat: "70% cost reduction",
    cta: "View Finance Case Study",
  },
  {
    id: "education",
    icon: GraduationCap,
    name: "Education",
    benefits: [
      "Course enrollment automation",
      "Student support 24/7",
      "Admissions assistance",
      "Learning resource guidance",
    ],
    stat: "50% faster enrollment",
    cta: "View Education Case Study",
  },
  {
    id: "travel",
    icon: Plane,
    name: "Travel",
    benefits: [
      "Booking assistance",
      "Real-time itinerary changes",
      "24/7 travel support",
      "Loyalty program management",
    ],
    stat: "40% higher bookings",
    cta: "View Travel Case Study",
  },
];

export function UseCasesSection() {
  const [activeCase, setActiveCase] = useState(useCases[0]);

  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Use Cases
          </span>
          <h2 className="heading-2 mt-4 mb-4">
            Built for <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            See how businesses across industries are transforming with AI
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tab Navigation */}
          <div className="lg:col-span-1">
            <div className="glass rounded-2xl p-2 space-y-2">
              {useCases.map((useCase) => (
                <button
                  key={useCase.id}
                  onClick={() => setActiveCase(useCase)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${
                    activeCase.id === useCase.id
                      ? "gradient-bg text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  <useCase.icon className="w-5 h-5 shrink-0" />
                  <span className="font-medium">{useCase.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-3xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center">
                    <activeCase.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">{activeCase.name}</h3>
                    <p className="text-success font-medium">{activeCase.stat}</p>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {activeCase.benefits.map((benefit, index) => (
                    <motion.li
                      key={benefit}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-success" />
                      </div>
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>

                <Button asChild variant="outline" className="gap-2">
                  <Link to="/case-studies">
                    {activeCase.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
