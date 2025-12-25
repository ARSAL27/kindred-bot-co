import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";

const problems = [
  "Overwhelmed support team?",
  "24/7 coverage impossible?",
  "Rising support costs?",
  "Slow response times?",
];

const solutions = [
  "AI handles 80% of queries automatically",
  "Always-on support across time zones",
  "Cut costs by 70% while scaling",
  "Instant responses, zero wait time",
];

export function ProblemSolutionSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">
            Sound Familiar? <span className="gradient-text">We've Got You Covered</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Transform your support challenges into competitive advantages
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="text-sm font-semibold text-destructive uppercase tracking-wider mb-6">
              The Problem
            </div>
            {problems.map((problem, index) => (
              <motion.div
                key={problem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-destructive/5 border border-destructive/20"
              >
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <p className="font-medium">{problem}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Arrow (Desktop) */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center"
            >
              <ArrowRight className="w-8 h-8 text-primary-foreground" />
            </motion.div>
          </div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="text-sm font-semibold text-success uppercase tracking-wider mb-6">
              The Solution
            </div>
            {solutions.map((solution, index) => (
              <motion.div
                key={solution}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-success/5 border border-success/20"
              >
                <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-success" />
                </div>
                <p className="font-medium">{solution}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
