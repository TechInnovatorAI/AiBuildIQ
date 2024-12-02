"use client";
import TopHero from "@/components/custome-ui/top-hero";

const Hero = () => {
    return (
        <div className="p-4">
            <TopHero
                subtitle="Risk Evaluation"
                title="Intelligent, Inclusive, and Efficient AI-Driven Risk Evaluation"
                description="Deep lending insights for accurate borrower assessments."
                button="Request a Proof of Concept"
                isShow={true}
            />
        </div>
    );
};

export default Hero;
