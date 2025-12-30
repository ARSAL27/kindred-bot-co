import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { SocialProofSection } from "@/components/home/SocialProofSection";
import { LiveStatsSection } from "@/components/home/LiveStatsSection";
import { ProblemSolutionSection } from "@/components/home/ProblemSolutionSection";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { ResponseTimeSection } from "@/components/home/ResponseTimeSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { UseCasesSection } from "@/components/home/UseCasesSection";
import { ImplementationTimelineSection } from "@/components/home/ImplementationTimelineSection";
import { TrustBadgesSection } from "@/components/home/TrustBadgesSection";
import { PricingSection } from "@/components/home/PricingSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofSection />
        <LiveStatsSection />
        <ProblemSolutionSection />
        <BeforeAfterSection />
        <ResponseTimeSection />
        <FeaturesSection />
        <HowItWorksSection />
        <UseCasesSection />
        <ImplementationTimelineSection />
        <TrustBadgesSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
