"use client";
import TopHero from "@/components/custome-ui/top-hero";

const Hero = () => {
    return (
        <div className="p-4">
            <TopHero
                subtitle="Lorem Ipsum Dolor"
                title="Blogs and Articles"
                description="Exploring the latest trends, emerging topics, and valuable insights in AI and lending"
                button=""
                isShow={false}
            />
        </div>
    );
};

export default Hero;
