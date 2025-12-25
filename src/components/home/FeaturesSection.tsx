import { motion } from "framer-motion";
import {
  Bot,
  Zap,
  Globe,
  BarChart3,
  Shield,
  Link2,
  MessageSquare,
  Target,
  Settings,
  RefreshCcw,
  Users,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Advanced NLP & AI",
    description: "GPT-4 powered understanding with context-aware responses and sentiment analysis",
    color: "primary",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Setup",
    description: "Deploy in 5 minutes with our no-code builder and pre-built templates",
    color: "warning",
  },
  {
    icon: Globe,
    title: "50+ Languages",
    description: "Auto-detection, real-time translation, and localized responses globally",
    color: "success",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time metrics, conversation insights, and custom performance reports",
    color: "secondary",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 certified, GDPR compliant, with end-to-end encryption",
    color: "primary",
  },
  {
    icon: Link2,
    title: "1000+ Integrations",
    description: "Connect with Salesforce, HubSpot, Zendesk, Slack, and more",
    color: "accent",
  },
  {
    icon: MessageSquare,
    title: "Omnichannel Deployment",
    description: "Website, WhatsApp, Messenger, mobile apps, and email integration",
    color: "secondary",
  },
  {
    icon: Target,
    title: "Smart Lead Qualification",
    description: "Auto lead scoring, meeting scheduling, and seamless CRM sync",
    color: "success",
  },
  {
    icon: Settings,
    title: "Visual Workflow Builder",
    description: "No-code automation with conditional logic and A/B testing",
    color: "warning",
  },
  {
    icon: RefreshCcw,
    title: "Auto-Learning",
    description: "Continuous improvement with pattern recognition and self-optimization",
    color: "primary",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Unified inbox, agent handoff, and performance tracking",
    color: "accent",
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization",
    description: "Proactive messaging, cart recovery, and personalization engine",
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

export function FeaturesSection() {
  return (
    <section id="features" className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Features
          </span>
          <h2 className="heading-2 mt-4 mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Automate Customer Support</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Powerful features designed to transform your customer experience
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="feature-card group cursor-pointer"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${
                  colorClasses[feature.color as keyof typeof colorClasses]
                } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
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
  );
}
