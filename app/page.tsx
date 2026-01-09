import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import LogoCloud from "@/components/LogoCloud";
import TimelineSection from "@/components/TimelineSection";
import ContentSection from "@/components/ContentSection";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div>
			<HeroSection />
			<FeatureSection />
			<ContentSection />
			<TimelineSection />
			<LogoCloud />
			<Footer />
		</div>
	);
}
