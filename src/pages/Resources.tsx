import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, FileText, Video, HelpCircle, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const resourceCategories = [
  {
    icon: BookOpen,
    title: "Blog",
    description: "Tips, strategies, and insights for growing your local business with AI.",
    link: "/blog",
    articles: [
      "How AI Chatbots Are Transforming Restaurant Reservations",
      "5 Ways to Reduce No-Shows at Your Salon",
      "The Ultimate Guide to Automating Customer Support",
    ],
  },
  {
    icon: FileText,
    title: "Case Studies",
    description: "Real success stories from businesses like yours.",
    link: "/case-studies",
    articles: [
      "How Joe's Barbershop Increased Bookings by 45%",
      "Main Street Grill Saves 20 Hours/Week with AI",
      "Valley Dental Reduces Phone Calls by 60%",
    ],
  },
  {
    icon: Video,
    title: "Tutorials",
    description: "Step-by-step guides to get the most out of your chatbot.",
    link: "/tutorials",
    articles: [
      "Setting Up Your First Chatbot in 5 Minutes",
      "Customizing Your Chatbot's Personality",
      "Connecting Your Calendar for Auto-Booking",
    ],
  },
  {
    icon: HelpCircle,
    title: "Help Center",
    description: "Find answers to common questions and troubleshooting guides.",
    link: "/help",
    articles: [
      "Getting Started Guide",
      "FAQ: Billing & Plans",
      "Troubleshooting Common Issues",
    ],
  },
];

const featuredGuides = [
  {
    title: "The Complete Guide to AI Chatbots for Local Business",
    description: "Everything you need to know about implementing AI customer service for your business.",
    readTime: "15 min read",
  },
  {
    title: "ROI Calculator: How Much Can You Save?",
    description: "Calculate your potential savings and revenue increase with our interactive tool.",
    readTime: "Interactive",
  },
  {
    title: "Industry Playbooks",
    description: "Specific strategies for restaurants, salons, auto shops, and more.",
    readTime: "10 min each",
  },
];

const Resources = () => {
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
                Resources to Help You <span className="gradient-text">Succeed</span>
              </h1>
              <p className="body-large">
                Guides, tutorials, case studies, and more to help you get the most out of your AI chatbot.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-8">
              {resourceCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-3xl p-8"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center shrink-0">
                      <category.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {category.articles.map((article) => (
                      <li key={article} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{article}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild variant="outline" className="gap-2">
                    <Link to={category.link}>
                      View All <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Guides */}
        <section className="section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Featured
              </span>
              <h2 className="heading-2 mt-4">Must-Read Guides</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredGuides.map((guide, index) => (
                <motion.div
                  key={guide.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 hover:scale-105 transition-transform cursor-pointer"
                >
                  <h3 className="font-semibold mb-2">{guide.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{guide.description}</p>
                  <span className="text-xs text-primary font-medium">{guide.readTime}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide text-center max-w-2xl mx-auto">
            <h2 className="heading-2 mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Get the latest tips, strategies, and product updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-12 w-full sm:w-80 rounded-xl border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <Button size="lg" className="gradient-bg">
                Subscribe
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-wide text-center">
            <h2 className="heading-2 mb-6">Ready to Get Started?</h2>
            <p className="body-large mb-8">
              Try our AI chatbot free for 14 days. No credit card required.
            </p>
            <Button asChild size="lg" className="gradient-bg gap-2">
              <Link to="/signup">
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
