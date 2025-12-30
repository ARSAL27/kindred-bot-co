import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Clock, Users, TrendingUp, Zap, Target } from "lucide-react";

interface StatProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  description: string;
  color: string;
  animationDelay?: number;
}

function AnimatedStat({ icon, value, suffix = "", label, description, color, animationDelay = 0 }: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const interval = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      
      return () => clearInterval(interval);
    }, animationDelay);
    
    return () => clearTimeout(timer);
  }, [isInView, value, animationDelay]);

  const colorClasses: Record<string, string> = {
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-secondary/10 text-secondary border-secondary/20",
    accent: "bg-accent/10 text-accent border-accent/20",
    success: "bg-success/10 text-success border-success/20",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: animationDelay / 1000 }}
      className="relative group"
    >
      <div className="glass rounded-2xl p-6 hover-lift border border-border/50">
        {/* Animated background glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle at center, hsl(var(--${color}) / 0.1), transparent 70%)` }}
        />
        
        <div className="relative z-10">
          {/* Icon */}
          <div className={`w-14 h-14 rounded-xl ${colorClasses[color]} flex items-center justify-center mb-4 border`}>
            {icon}
          </div>
          
          {/* Counter */}
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-4xl md:text-5xl font-bold gradient-text tabular-nums">
              {count.toLocaleString()}
            </span>
            <span className="text-2xl font-semibold text-muted-foreground">{suffix}</span>
          </div>
          
          {/* Label */}
          <h3 className="text-lg font-semibold text-foreground mb-1">{label}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          
          {/* Live indicator */}
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
            </span>
            <span className="text-xs text-muted-foreground">Live data</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function LiveStatsSection() {
  const stats = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      value: 47892,
      label: "Questions Answered",
      description: "AI conversations completed this month",
      color: "primary",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: 2847,
      suffix: "hrs",
      label: "Hours Saved",
      description: "Time saved for support teams",
      color: "secondary",
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: 1234,
      label: "Leads Captured",
      description: "New leads generated this month",
      color: "accent",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: 94,
      suffix: "%",
      label: "Resolution Rate",
      description: "Issues resolved without human help",
      color: "success",
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-mesh-bg opacity-50" />
      
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
            <Zap className="w-4 h-4 text-primary" />
            <span>Real-Time Impact</span>
          </div>
          
          <h2 className="heading-2 mb-4">
            See the <span className="gradient-text">Power in Numbers</span>
          </h2>
          <p className="body-large">
            Watch our AI chatbots deliver results for businesses just like yours, updated in real-time.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={stat.label}
              {...stat}
              animationDelay={index * 150}
            />
          ))}
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3">
            <Target className="w-5 h-5 text-primary" />
            <span className="text-sm">
              <span className="font-semibold text-foreground">Average ROI:</span>
              <span className="text-muted-foreground"> 340% return in the first year</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
