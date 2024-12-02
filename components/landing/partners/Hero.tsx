"use client";
import TopHero from "@/components/custome-ui/top-hero";

const Hero = () => {
  return (
    <div className="p-4">
      <TopHero
        subtitle="Our Partners"
        title="Establishing Connections Across Your Ecosystem"
        description="Partnering with industry leaders to support innovative lending solutions"
        button=""
        isShow={true}
      />
    </div>
  );
};

export default Hero;
