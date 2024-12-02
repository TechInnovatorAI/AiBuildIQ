"use client";
import TopHero from "@/components/custome-ui/top-hero";

const Hero = () => {
    return (
        <div className="p-4">
            <TopHero
                subtitle="Threat Analysis"
                title="Smart, Fair, and Efficient AI-Automated Threat Detection and Analysis"
                description="Strengthen your lending confidence with the security of AiBuildiQ Protect."
                button="Request a Proof of Concept"
                isShow={true}
            />
        </div>
    );
};

export default Hero;
