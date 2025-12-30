import { motion } from "framer-motion";
import { 
  Shield, Lock, Clock, RefreshCw, Headphones, FileCheck,
  Award, CheckCircle, Globe, Server
} from "lucide-react";

interface BadgeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function TrustBadge({ icon, title, description }: BadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center text-center p-6 glass rounded-2xl hover-lift group"
    >
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
}

export function TrustBadgesSection() {
  const badges: BadgeProps[] = [
    {
      icon: <RefreshCw className="w-7 h-7" />,
      title: "30-Day Money Back",
      description: "Full refund if you're not satisfied",
    },
    {
      icon: <FileCheck className="w-7 h-7" />,
      title: "No Long-Term Contracts",
      description: "Cancel anytime with 30 days notice",
    },
    {
      icon: <Lock className="w-7 h-7" />,
      title: "GDPR Compliant",
      description: "Your data is safe and protected",
    },
    {
      icon: <Server className="w-7 h-7" />,
      title: "99.9% Uptime",
      description: "Enterprise-grade reliability",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "SSL Encrypted",
      description: "Bank-level security for all data",
    },
    {
      icon: <Headphones className="w-7 h-7" />,
      title: "24/7 Support",
      description: "We're here whenever you need us",
    },
  ];

  const certifications = [
    { icon: <Award className="w-5 h-5" />, label: "SOC 2 Type II" },
    { icon: <Globe className="w-5 h-5" />, label: "ISO 27001" },
    { icon: <Shield className="w-5 h-5" />, label: "HIPAA Ready" },
    { icon: <Lock className="w-5 h-5" />, label: "PCI DSS" },
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-muted/30">
      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-6">
            <Shield className="w-4 h-4 text-success" />
            <span>Trust & Security</span>
          </div>
          
          <h2 className="heading-2 mb-4">
            Your Business is <span className="gradient-text">Safe With Us</span>
          </h2>
          <p className="body-large">
            We take security and reliability seriously. Here's why businesses trust us with their customer conversations.
          </p>
        </motion.div>

        {/* Trust Badges Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {badges.map((badge, index) => (
            <TrustBadge key={index} {...badge} />
          ))}
        </div>

        {/* Certifications Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass rounded-2xl p-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-success" />
              <span className="font-semibold text-foreground">Industry Certifications & Compliance</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium"
                >
                  {cert.icon}
                  {cert.label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Guarantee Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 glass rounded-full px-8 py-4 border-2 border-success/30">
            <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-success" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Risk-Free Guarantee</p>
              <p className="text-sm text-muted-foreground">Try our service for 30 days. Not satisfied? Full refund, no questions asked.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
