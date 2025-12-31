import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Bot, Zap, Globe, BarChart3, Shield, Link2,
  MessageSquare, Target, Settings, RefreshCcw, Users, TrendingUp, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Bot,
    title: "Advanced AI Understanding",
    description: "Powered by the latest GPT technology, our chatbot understands context, intent, and even handles complex multi-turn conversations naturally.",
    color: "primary",
  },
  {
    icon: Zap,
    title: "5-Minute Setup",
    description: "No coding required. Simply answer a few questions about your business, and our AI builds your custom chatbot instantly.",
    color: "warning",
  },
  {
    icon: Globe,
    title: "50+ Languages",
    description: "Automatically detect and respond in your customer's language. Perfect for diverse communities and international customers.",
    color: "success",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "See exactly what customers are asking, conversion rates, satisfaction scores, and more in an easy-to-understand dashboard.",
    color: "secondary",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 certified with end-to-end encryption. Your customer data is always safe and never used to train AI models.",
    color: "primary",
  },
  {
    icon: Link2,
    title: "Easy Integrations",
    description: "Connect with your existing tools: Google Calendar, Square, Yelp, Facebook, Instagram, and 100+ more platforms.",
    color: "accent",
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel Support",
    description: "One chatbot for your website, Facebook Messenger, Instagram DMs, WhatsApp, and SMS. Manage all from one place.",
    color: "secondary",
  },
  {
    icon: Target,
    title: "Lead Capture & Qualification",
    description: "Automatically collect contact info, qualify leads based on your criteria, and sync to your CRM or email list.",
    color: "success",
  },
  {
    icon: Settings,
    title: "Full Customization",
    description: "Match your brand colors, personality, and tone. Create custom conversation flows for any scenario.",
    color: "warning",
  },
  {
    icon: RefreshCcw,
    title: "Continuous Learning",
    description: "Your chatbot gets smarter over time, learning from interactions to provide better, more accurate responses.",
    color: "primary",
  },
  {
    icon: Users,
    title: "Human Handoff",
    description: "Seamlessly transfer complex conversations to your team. Get notified instantly when human help is needed.",
    color: "accent",
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization",
    description: "Proactive messaging, abandoned cart recovery, and personalized recommendations to boost your sales.",
    color: "success",
  },
];

const colorClasses = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/10 text-accent",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
};

const Features = () => {
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
                Powerful Features for <span className="gradient-text">Local Businesses</span>
              </h1>
              <p className="body-large mb-8">
                Everything you need to automate customer service, book appointments, and grow your business 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gradient-bg">
                  <Link to="/signup">Start Free Trial</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">See Demo</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass rounded-2xl p-6 hover:scale-105 transition-transform"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${
                      colorClasses[feature.color as keyof typeof colorClasses]
                    } flex items-center justify-center mb-4`}
                  >
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-wide text-center">
            <h2 className="heading-2 mb-6">Ready to Get Started?</h2>
            <p className="body-large mb-8 max-w-2xl mx-auto">
              Join thousands of local businesses using our AI chatbot to save time and grow revenue.
            </p>
            <Button asChild size="lg" className="gradient-bg gap-2">
              <Link to="/signup">
                Start Your Free Trial <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
