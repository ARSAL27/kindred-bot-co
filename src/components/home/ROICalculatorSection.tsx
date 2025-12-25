import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calculator, TrendingUp, Clock, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

export function ROICalculatorSection() {
  const [tickets, setTickets] = useState([5000]);
  const [handleTime, setHandleTime] = useState([8]);
  const [agentRate, setAgentRate] = useState([25]);
  const [agents, setAgents] = useState([10]);

  const calculations = useMemo(() => {
    const monthlyTickets = tickets[0];
    const avgHandleTimeMinutes = handleTime[0];
    const hourlyRate = agentRate[0];
    const numAgents = agents[0];

    // Current cost calculations
    const hoursPerMonth = numAgents * 160; // 40 hours * 4 weeks
    const currentMonthlyCost = hoursPerMonth * hourlyRate;
    const currentAnnualCost = currentMonthlyCost * 12;

    // AI automation (80% of tickets)
    const automatedTickets = Math.round(monthlyTickets * 0.8);
    const timesSavedHours = (automatedTickets * avgHandleTimeMinutes) / 60;
    const costSavings = timesSavedHours * hourlyRate;
    const annualSavings = costSavings * 12;

    // ROI
    const platformCost = 149 * 12; // Professional plan annual
    const netSavings = annualSavings - platformCost;
    const roiPercentage = Math.round((netSavings / platformCost) * 100);
    const paybackMonths = platformCost / costSavings;

    return {
      annualSavings: Math.round(annualSavings),
      hoursSaved: Math.round(timesSavedHours * 12),
      roiPercentage,
      paybackMonths: paybackMonths < 1 ? "< 1" : Math.round(paybackMonths),
      automatedTickets: automatedTickets * 12,
    };
  }, [tickets, handleTime, agentRate, agents]);

  return (
    <section id="roi-calculator" className="section-padding bg-muted/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            ROI Calculator
          </span>
          <h2 className="heading-2 mt-4 mb-4">
            Calculate Your <span className="gradient-text">Savings</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            See how much you could save by automating support with AI
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Calculator Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 space-y-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                <Calculator className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Enter Your Numbers</h3>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-3">
                  <Label>Monthly Support Tickets</Label>
                  <span className="font-semibold">{tickets[0].toLocaleString()}</span>
                </div>
                <Slider
                  value={tickets}
                  onValueChange={setTickets}
                  max={50000}
                  min={100}
                  step={100}
                  className="[&_[role=slider]]:gradient-bg"
                />
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <Label>Avg. Handle Time (minutes)</Label>
                  <span className="font-semibold">{handleTime[0]}</span>
                </div>
                <Slider
                  value={handleTime}
                  onValueChange={setHandleTime}
                  max={30}
                  min={1}
                  step={1}
                  className="[&_[role=slider]]:gradient-bg"
                />
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <Label>Agent Hourly Rate ($)</Label>
                  <span className="font-semibold">${agentRate[0]}</span>
                </div>
                <Slider
                  value={agentRate}
                  onValueChange={setAgentRate}
                  max={75}
                  min={10}
                  step={1}
                  className="[&_[role=slider]]:gradient-bg"
                />
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <Label>Number of Support Agents</Label>
                  <span className="font-semibold">{agents[0]}</span>
                </div>
                <Slider
                  value={agents}
                  onValueChange={setAgents}
                  max={100}
                  min={1}
                  step={1}
                  className="[&_[role=slider]]:gradient-bg"
                />
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-6 text-center">
                <DollarSign className="w-8 h-8 text-success mx-auto mb-3" />
                <p className="text-3xl font-bold gradient-text">
                  ${calculations.annualSavings.toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground mt-1">Annual Savings</p>
              </div>

              <div className="glass rounded-2xl p-6 text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold gradient-text">
                  {calculations.hoursSaved.toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground mt-1">Hours Saved/Year</p>
              </div>

              <div className="glass rounded-2xl p-6 text-center">
                <TrendingUp className="w-8 h-8 text-secondary mx-auto mb-3" />
                <p className="text-3xl font-bold gradient-text">
                  {calculations.roiPercentage}%
                </p>
                <p className="text-sm text-muted-foreground mt-1">ROI</p>
              </div>

              <div className="glass rounded-2xl p-6 text-center">
                <Calculator className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-3xl font-bold gradient-text">
                  {calculations.paybackMonths}
                </p>
                <p className="text-sm text-muted-foreground mt-1">Months to Payback</p>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <p className="text-muted-foreground mb-2">
                Based on automating 80% of your support tickets:
              </p>
              <p className="text-lg font-semibold">
                <span className="gradient-text">{calculations.automatedTickets.toLocaleString()}</span> tickets
                handled automatically each year
              </p>
            </div>

            <Button asChild size="lg" className="w-full gradient-bg hover:opacity-90">
              <Link to="/demo">
                See Your Custom ROI
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
