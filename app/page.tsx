import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import LogoCloud from "@/components/LogoCloud";
import ContentSection from "@/components/ContentSection";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div>
			<HeroSection />
			<FeatureSection />
			<ContentSection />
			<LogoCloud />
			<Footer />
		</div>
	);
}
