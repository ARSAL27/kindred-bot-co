import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Mail, Phone, MessageSquare, Zap, Trophy, Timer } from "lucide-react";

interface TimeBarProps {
  icon: React.ReactNode;
  label: string;
  time: string;
  timeInSeconds: number;
  maxSeconds: number;
  color: string;
  delay?: number;
}

function TimeBar({ icon, label, time, timeInSeconds, maxSeconds, color, delay = 0 }: TimeBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [width, setWidth] = useState(0);
  
  const percentage = Math.min((timeInSeconds / maxSeconds) * 100, 100);
  
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, percentage, delay]);

  const colorClasses: Record<string, { bg: string; bar: string; text: string }> = {
    destructive: {
      bg: "bg-destructive/10",
      bar: "bg-gradient-to-r from-destructive to-destructive/80",
      text: "text-destructive",
    },
    warning: {
      bg: "bg-warning/10",
      bar: "bg-gradient-to-r from-warning to-warning/80",
      text: "text-warning",
    },
    success: {
      bg: "bg-gradient-to-r from-primary via-secondary to-accent",
      bar: "bg-gradient-to-r from-primary via-secondary to-accent",
      text: "text-primary",
    },
  };

  const colors = colorClasses[color];
  const isWinner = color === "success";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className={`relative ${isWinner ? 'scale-105 z-10' : ''}`}
    >
      <div className={`glass rounded-2xl p-6 ${isWinner ? 'border-2 border-primary ring-4 ring-primary/20' : ''}`}>
        {isWinner && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1 px-3 py-1 rounded-full gradient-bg text-primary-foreground text-xs font-bold">
              <Trophy className="w-3 h-3" />
              WINNER
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors.bg}`}>
              {icon}
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{label}</h3>
              <p className={`text-sm font-medium ${colors.text}`}>{time}</p>
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="h-4 bg-muted rounded-full overflow-hidden">
          <motion.div
            className={`h-full rounded-full ${colors.bar}`}
            initial={{ width: 0 }}
            animate={{ width: `${width}%` }}
            transition={{ duration: 1.5, ease: "easeOut", delay: delay / 1000 + 0.3 }}
          />
        </div>
        
        {isWinner && (
          <div className="mt-3 text-center">
            <span className="text-xs text-muted-foreground">
              That's <span className="font-bold text-primary">17,280x faster</span> than email!
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function ResponseTimeSection() {
  const channels = [
    {
      icon: <Mail className="w-6 h-6 text-destructive" />,
      label: "Email Support",
      time: "24 hours average",
      timeInSeconds: 86400, // 24 hours
      color: "destructive",
    },
    {
      icon: <Phone className="w-6 h-6 text-warning" />,
      label: "Phone Support",
      time: "5 min wait + call time",
      timeInSeconds: 600, // 10 minutes total
      color: "warning",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      label: "7FS AI Chatbot",
      time: "Instant (< 5 seconds)",
      timeInSeconds: 5,
      color: "success",
    },
  ];

  const maxSeconds = 86400; // Normalize to 24 hours

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh-bg opacity-30" />
      
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
            <Timer className="w-4 h-4 text-primary" />
            <span>Speed Matters</span>
          </div>
          
          <h2 className="heading-2 mb-4">
            Response Time <span className="gradient-text">Comparison</span>
          </h2>
          <p className="body-large">
            In a world of instant gratification, every second counts. 
            See how our AI stacks up against traditional support channels.
          </p>
        </motion.div>

        {/* Timeline Bars */}
        <div className="max-w-3xl mx-auto space-y-4">
          {channels.map((channel, index) => (
            <TimeBar
              key={channel.label}
              {...channel}
              maxSeconds={maxSeconds}
              delay={index * 200}
            />
          ))}
        </div>

        {/* Stats Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="text-center p-6 glass rounded-2xl">
            <div className="text-4xl font-bold gradient-text mb-2">79%</div>
            <p className="text-sm text-muted-foreground">of customers prefer instant responses</p>
          </div>
          <div className="text-center p-6 glass rounded-2xl">
            <div className="text-4xl font-bold gradient-text mb-2">$1.3M</div>
            <p className="text-sm text-muted-foreground">average savings per year on support</p>
          </div>
          <div className="text-center p-6 glass rounded-2xl">
            <div className="text-4xl font-bold gradient-text mb-2">92%</div>
            <p className="text-sm text-muted-foreground">of queries resolved without human help</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
