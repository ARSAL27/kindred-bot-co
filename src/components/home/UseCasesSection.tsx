import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  UtensilsCrossed,
  Scissors,
  Car,
  Dumbbell,
  Stethoscope,
  Home,
  ShoppingBag,
  Sparkles,
  Wrench,
  PawPrint,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const useCases = [
  {
    id: "restaurants",
    icon: UtensilsCrossed,
    name: "Restaurants & Cafes",
    benefits: [
      "24/7 reservation booking & confirmation",
      "Menu inquiries & dietary info instantly",
      "Handle delivery & takeout orders",
      "Reduce no-shows with smart reminders",
    ],
    stat: "60% fewer missed reservations",
    cta: "View Restaurant Case Study",
  },
  {
    id: "barbershops",
    icon: Scissors,
    name: "Barber Shops & Salons",
    benefits: [
      "Instant appointment scheduling",
      "Automated booking reminders",
      "Service pricing & availability",
      "Handle walk-in inquiries after hours",
    ],
    stat: "45% more bookings",
    cta: "View Salon Case Study",
  },
  {
    id: "automotive",
    icon: Car,
    name: "Auto Shops & Dealers",
    benefits: [
      "Service appointment scheduling",
      "Quote requests automation",
      "Parts availability inquiries",
      "Follow-up on estimates 24/7",
    ],
    stat: "3x faster response time",
    cta: "View Auto Shop Case Study",
  },
  {
    id: "fitness",
    icon: Dumbbell,
    name: "Gyms & Fitness Studios",
    benefits: [
      "Class booking & cancellations",
      "Membership inquiries automation",
      "Personal training scheduling",
      "Facility hours & info instantly",
    ],
    stat: "50% reduction in front desk calls",
    cta: "View Fitness Case Study",
  },
  {
    id: "medical",
    icon: Stethoscope,
    name: "Medical & Dental Clinics",
    benefits: [
      "24/7 appointment scheduling",
      "Insurance & billing questions",
      "Prescription refill requests",
      "After-hours patient support",
    ],
    stat: "80% patient satisfaction",
    cta: "View Medical Case Study",
  },
  {
    id: "realestate",
    icon: Home,
    name: "Real Estate Agencies",
    benefits: [
      "Instant property inquiries",
      "Automated showing scheduling",
      "Lead qualification 24/7",
      "Neighborhood info & pricing",
    ],
    stat: "3x more qualified leads",
    cta: "View Real Estate Case Study",
  },
  {
    id: "retail",
    icon: ShoppingBag,
    name: "Retail & Boutiques",
    benefits: [
      "Product availability checks",
      "Store hours & location info",
      "Order tracking assistance",
      "Personal shopping recommendations",
    ],
    stat: "40% increase in foot traffic",
    cta: "View Retail Case Study",
  },
  {
    id: "spas",
    icon: Sparkles,
    name: "Spas & Wellness Centers",
    benefits: [
      "Treatment booking & info",
      "Package & membership inquiries",
      "Gift card purchases",
      "Cancellation & rescheduling",
    ],
    stat: "55% fewer phone calls",
    cta: "View Spa Case Study",
  },
  {
    id: "contractors",
    icon: Wrench,
    name: "Home Services & Contractors",
    benefits: [
      "Quote requests 24/7",
      "Service scheduling",
      "Emergency availability info",
      "Project status updates",
    ],
    stat: "2x more service calls booked",
    cta: "View Contractor Case Study",
  },
  {
    id: "veterinary",
    icon: PawPrint,
    name: "Veterinary & Pet Services",
    benefits: [
      "Appointment scheduling",
      "Pet care questions answered",
      "Vaccination reminders",
      "Emergency triage assistance",
    ],
    stat: "70% reduction in wait times",
    cta: "View Veterinary Case Study",
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
            Built For Local Business
          </span>
          <h2 className="heading-2 mt-4 mb-4">
            AI That Works for <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            From restaurants to retail, see how local businesses are automating customer service and booking more appointments
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tab Navigation */}
          <div className="lg:col-span-1">
            <div className="glass rounded-2xl p-2 space-y-1 max-h-[500px] overflow-y-auto">
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
                  <span className="font-medium text-sm">{useCase.name}</span>
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
