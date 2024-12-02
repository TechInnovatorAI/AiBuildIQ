"use client";
import TopHero from "@/components/custome-ui/top-hero";

const Hero = () => {
  return (
    <div className="p-4">
      <TopHero
        subtitle="FAQ’s"
        title="Frequently Asked Questions"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        button=""
        isShow={true}
      />
    </div>
  );
};

export default Hero;
