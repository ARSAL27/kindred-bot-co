import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  UtensilsCrossed, Scissors, Car, Dumbbell, Stethoscope, 
  Home, ShoppingBag, Sparkles, Wrench, PawPrint, ArrowRight,
  Users, Briefcase, Target
} from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  { icon: UtensilsCrossed, name: "Restaurants & Cafes", description: "Automate reservations, orders, and menu inquiries 24/7" },
  { icon: Scissors, name: "Barber Shops & Salons", description: "Instant appointment booking and reminders" },
  { icon: Car, name: "Auto Shops & Dealers", description: "Service scheduling and quote automation" },
  { icon: Dumbbell, name: "Gyms & Fitness", description: "Class bookings and membership inquiries" },
  { icon: Stethoscope, name: "Medical & Dental", description: "Patient scheduling and after-hours support" },
  { icon: Home, name: "Real Estate", description: "Property inquiries and showing scheduling" },
  { icon: ShoppingBag, name: "Retail & Boutiques", description: "Product availability and order tracking" },
  { icon: Sparkles, name: "Spas & Wellness", description: "Treatment booking and package inquiries" },
  { icon: Wrench, name: "Home Services", description: "Quote requests and service scheduling" },
  { icon: PawPrint, name: "Veterinary & Pet", description: "Appointment scheduling and pet care answers" },
];

const useCases = [
  { icon: Users, name: "Customer Support", description: "Answer FAQs and handle common inquiries instantly" },
  { icon: Briefcase, name: "Lead Generation", description: "Qualify leads and capture contact info 24/7" },
  { icon: Target, name: "Appointment Booking", description: "Let customers book appointments anytime" },
];

const Solutions = () => {
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
                AI Solutions for <span className="gradient-text">Every Business</span>
              </h1>
              <p className="body-large mb-8">
                Whether you run a restaurant, salon, or auto shop, our AI chatbot adapts to your industry's unique needs.
              </p>
              <Button asChild size="lg" className="gradient-bg">
                <Link to="/contact">Get Started Today</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Industries */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                By Industry
              </span>
              <h2 className="heading-2 mt-4">Built for Local Business</h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <industry.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{industry.name}</h3>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                By Use Case
              </span>
              <h2 className="heading-2 mt-4">What Can Our AI Do?</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-3xl p-8"
                >
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6">
                    <useCase.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{useCase.name}</h3>
                  <p className="text-muted-foreground mb-6">{useCase.description}</p>
                  <Button variant="outline" asChild className="gap-2">
                    <Link to="/contact">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide text-center">
            <h2 className="heading-2 mb-6">Ready to Transform Your Business?</h2>
            <p className="body-large mb-8 max-w-2xl mx-auto">
              Join thousands of local businesses using AI to grow their customer base.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-bg">
                <Link to="/signup">Start Free Trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
