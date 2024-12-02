"use client";
import TopHero from "@/components/custome-ui/top-hero";

const Hero = () => {
    return (
        <div className="p-4">
            <TopHero
                subtitle="Simplifying Lending: A Step-by-Step Approach"
                title=" How AIBuildIQ Works"
                description="Streamlining the lending process with intelligent, data-driven solutions tailored for brokers and borrowers"
                button=""
                isShow={false}
            />
        </div>
    );
};

export default Hero;
