"use client";
import TopHero from "@/components/custome-ui/top-hero";

const Hero = () => {
    return (
        <div className="p-4">
            <TopHero
                subtitle="Focused Lenders"
                title="Innovative, Fair, and Efficient Lending for Focused Lenders"
                description="Stay ahead of the competition and enhance customer experience using proven AI."
                button="Get a Custom Analysis"
                isShow={true}
            />
        </div>
    );
};

export default Hero;
