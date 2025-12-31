import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Target, Users, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "Everything we build starts with understanding what local businesses actually need.",
  },
  {
    icon: Target,
    title: "Simplicity",
    description: "Powerful technology should be easy to use. No PhD required.",
  },
  {
    icon: Zap,
    title: "Speed",
    description: "Time is money. We help businesses respond to customers in seconds, not hours.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We're building tools to help local businesses compete and thrive.",
  },
];

const stats = [
  { value: "10,000+", label: "Businesses Served" },
  { value: "50M+", label: "Conversations Handled" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

const About = () => {
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
                Helping Local Businesses <span className="gradient-text">Scale with AI</span>
              </h1>
              <p className="body-large">
                We believe every local business deserves access to the same powerful AI technology that big corporations use. 
                Our mission is to level the playing field.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Our Story
                </span>
                <h2 className="heading-2 mt-4 mb-6">
                  Built by Business Owners, for Business Owners
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We started 7 Figure Scalers after watching our friends struggle to manage customer inquiries 
                    at their local restaurants and barbershops. They were losing customers simply because they 
                    couldn't answer the phone fast enough.
                  </p>
                  <p>
                    We knew AI could solve this problem, but every solution out there was built for big 
                    enterprises with big budgets and dedicated IT teams. Local businesses were left behind.
                  </p>
                  <p>
                    So we built something different: an AI chatbot that's powerful enough to handle any 
                    customer conversation, but simple enough that anyone can set it up in 5 minutes.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-8"
              >
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                      <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Our Values
              </span>
              <h2 className="heading-2 mt-4">What We Stand For</h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide text-center">
            <h2 className="heading-2 mb-6">Ready to Join 10,000+ Businesses?</h2>
            <p className="body-large mb-8 max-w-2xl mx-auto">
              Start your free trial today and see why local businesses love our AI chatbot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-bg gap-2">
                <Link to="/signup">
                  Start Free Trial <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
