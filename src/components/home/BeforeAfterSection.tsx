import { motion } from "framer-motion";
import { 
  X, Check, Clock, MessageSquare, Users, TrendingUp, 
  AlertTriangle, Smile, Coffee, Zap, ArrowRight 
} from "lucide-react";

interface ComparisonItemProps {
  icon: React.ReactNode;
  title: string;
  before: string;
  after: string;
  improvement?: string;
}

function ComparisonItem({ icon, title, before, after, improvement }: ComparisonItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass rounded-2xl p-6 hover-lift"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <h3 className="font-semibold text-foreground">{title}</h3>
      </div>
      
      <div className="grid grid-cols-[1fr,auto,1fr] gap-4 items-center">
        {/* Before */}
        <div className="text-center p-4 rounded-xl bg-destructive/5 border border-destructive/20">
          <div className="flex items-center justify-center gap-1 text-destructive mb-2">
            <X className="w-4 h-4" />
            <span className="text-xs font-medium uppercase tracking-wide">Before</span>
          </div>
          <p className="text-sm text-muted-foreground">{before}</p>
        </div>
        
        {/* Arrow */}
        <div className="flex items-center justify-center">
          <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
            <ArrowRight className="w-5 h-5 text-primary-foreground" />
          </div>
        </div>
        
        {/* After */}
        <div className="text-center p-4 rounded-xl bg-success/5 border border-success/20">
          <div className="flex items-center justify-center gap-1 text-success mb-2">
            <Check className="w-4 h-4" />
            <span className="text-xs font-medium uppercase tracking-wide">After</span>
          </div>
          <p className="text-sm text-muted-foreground">{after}</p>
        </div>
      </div>
      
      {improvement && (
        <div className="mt-4 pt-4 border-t border-border/50 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium">
            <TrendingUp className="w-3 h-3" />
            {improvement}
          </span>
        </div>
      )}
    </motion.div>
  );
}

export function BeforeAfterSection() {
  const comparisons: ComparisonItemProps[] = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Response Time",
      before: "24+ hours average",
      after: "Instant (< 5 seconds)",
      improvement: "99.9% faster response",
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Query Handling",
      before: "Max 50 tickets/day",
      after: "Unlimited conversations",
      improvement: "∞ scalability",
    },
    {
      icon: <Coffee className="w-5 h-5" />,
      title: "Availability",
      before: "Business hours only",
      after: "24/7/365 always-on",
      improvement: "168 hours/week coverage",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Lead Capture",
      before: "Manual form fills",
      after: "Automated qualification",
      improvement: "3x more leads captured",
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Error Rate",
      before: "Human mistakes happen",
      after: "Consistent accuracy",
      improvement: "95% accuracy rate",
    },
    {
      icon: <Smile className="w-5 h-5" />,
      title: "Customer Satisfaction",
      before: "Long wait frustration",
      after: "Instant help = happy customers",
      improvement: "+40% CSAT improvement",
    },
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
            <Zap className="w-4 h-4 text-accent" />
            <span>The Transformation</span>
          </div>
          
          <h2 className="heading-2 mb-4">
            <span className="gradient-text">Before vs After</span> Our AI Chatbot
          </h2>
          <p className="body-large">
            See the dramatic improvements businesses experience when they upgrade 
            from traditional support to AI-powered assistance.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparisons.map((comparison, index) => (
            <ComparisonItem key={index} {...comparison} />
          ))}
        </div>
      </div>
    </section>
  );
}
