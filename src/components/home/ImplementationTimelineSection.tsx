import { motion } from "framer-motion";
import { 
  Palette, Brain, TestTube, Rocket, CheckCircle,
  Calendar, ArrowRight, Sparkles
} from "lucide-react";

interface TimelineStepProps {
  day: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  tasks: string[];
  isLast?: boolean;
  index: number;
}

function TimelineStep({ day, icon, title, description, tasks, isLast, index }: TimelineStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex gap-6"
    >
      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center text-primary-foreground shrink-0 relative z-10">
          {icon}
        </div>
        {!isLast && (
          <div className="w-0.5 h-full bg-gradient-to-b from-primary to-secondary/30 mt-2" />
        )}
      </div>

      {/* Content */}
      <div className="pb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">
            {day}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="glass rounded-xl p-4 space-y-2">
          {tasks.map((task, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-success shrink-0" />
              <span className="text-muted-foreground">{task}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function ImplementationTimelineSection() {
  const steps: Omit<TimelineStepProps, 'index' | 'isLast'>[] = [
    {
      day: "Day 1-2",
      icon: <Palette className="w-6 h-6" />,
      title: "Design & Setup",
      description: "We customize your chatbot to match your brand perfectly.",
      tasks: [
        "Brand color and style customization",
        "Website integration code setup",
        "Welcome message configuration",
        "Mobile responsiveness testing",
      ],
    },
    {
      day: "Day 3-4",
      icon: <Brain className="w-6 h-6" />,
      title: "AI Training",
      description: "We train your AI on your business, products, and FAQs.",
      tasks: [
        "Knowledge base creation from your content",
        "FAQ import and optimization",
        "Custom response training",
        "Industry-specific terminology setup",
      ],
    },
    {
      day: "Day 5-6",
      icon: <TestTube className="w-6 h-6" />,
      title: "Testing & Refinement",
      description: "Rigorous testing to ensure perfect responses every time.",
      tasks: [
        "Conversation flow testing",
        "Edge case handling",
        "Response accuracy verification",
        "Team training session",
      ],
    },
    {
      day: "Day 7",
      icon: <Rocket className="w-6 h-6" />,
      title: "Launch Day!",
      description: "Your AI chatbot goes live and starts capturing leads.",
      tasks: [
        "Live deployment on your website",
        "Real-time monitoring setup",
        "Performance dashboard access",
        "Ongoing optimization begins",
      ],
    },
  ];

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
            <Calendar className="w-4 h-4 text-primary" />
            <span>Quick Implementation</span>
          </div>
          
          <h2 className="heading-2 mb-4">
            From Signup to <span className="gradient-text">Live in 7 Days</span>
          </h2>
          <p className="body-large">
            No lengthy implementations or complex setups. We handle everything 
            so you can start converting visitors into customers within a week.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <TimelineStep
              key={index}
              {...step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 glass rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="font-semibold text-foreground">Ready to get started?</span>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground hidden sm:block" />
            <a 
              href="/contact" 
              className="px-6 py-3 rounded-full gradient-bg text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Start Your 7-Day Setup
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
