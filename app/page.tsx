import ContactSection from "@/components/ContactSection";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import LogoCloud from "@/components/LogoCloud";
import TimelineSection from "@/components/TimelineSection";

export default function Home() {
	return (
		<div>
			<HeroSection />
			<FeatureSection />
			<ContactSection />
			<TimelineSection />
			<LogoCloud />
		</div>
	);
}
