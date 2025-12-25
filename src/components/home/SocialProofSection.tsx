import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const companyLogos = [
  "Acme Corp", "GlobalTech", "InnovateLabs", "TechVentures", "CloudScale",
  "DataFlow", "NextGen AI", "SmartSystems", "FutureTech", "DigiCorp",
  "StreamLine", "CodeCraft", "ByteWorks", "NexusPoint", "QuantumLeap"
];

const stats = [
  { value: 10, suffix: "M+", label: "Messages Processed Monthly" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
  { value: 70, suffix: "%", label: "Average Cost Reduction" },
  { value: 1, prefix: "<", suffix: "s", label: "Response Time" },
];

function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export function SocialProofSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-3 mb-4">Trusted by 10,000+ Companies Worldwide</h2>
          <p className="text-muted-foreground">From startups to Fortune 500 companies</p>
        </motion.div>

        {/* Logo Carousel */}
        <div className="relative overflow-hidden mb-20">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10" />
          
          <div className="flex animate-marquee">
            {[...companyLogos, ...companyLogos].map((company, index) => (
              <div
                key={`${company}-${index}`}
                className="flex-shrink-0 mx-8 px-8 py-4 glass rounded-xl"
              >
                <span className="text-lg font-semibold text-muted-foreground whitespace-nowrap">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </p>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
