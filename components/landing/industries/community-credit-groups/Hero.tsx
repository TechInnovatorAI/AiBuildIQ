"use client";
import TopHero from "@/components/custome-ui/top-hero";

const Hero = () => {
    return (
        <div className="p-4">
            <TopHero
                subtitle="Community Credit Groups"
                title="Lending Made Smarter, More Inclusive, and Efficient for Community Credit Groups"
                description="Serve members better with AI that stands the test of time"
                button=" Get a Custom Analysis"
                isShow={true}
            />
        </div>
    );
};

export default Hero;
