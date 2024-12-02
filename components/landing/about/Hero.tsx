"use client";
import TopHero from "@/components/custome-ui/top-hero";

const Hero = () => {
  return (
    <div className="p-4">
      <TopHero
        subtitle="About Us"
        title="Working together for wider access, less bias, and greater transparency"
        description="The Crossroads of Purpose and Technology"
        button=""
        isShow={true}
      />
    </div>
  );
};

export default Hero;
