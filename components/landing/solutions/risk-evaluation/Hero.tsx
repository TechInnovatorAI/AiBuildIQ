"use client";
import TopHero from "@/components/ui/top-hero";

const Hero = () => {
    return (
        <div className="p-4">
            <TopHero
                subtitle="Risk Evaluation"
                title="Intelligent, Inclusive, and Efficient AI-Driven Risk Evaluation"
                description="Deep lending insights for accurate borrower assessments."
                button="Request a proof of Concept"
            />
        </div>
    );
};

export default Hero;
