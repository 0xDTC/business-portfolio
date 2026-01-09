import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact - Portfolio",
  description: "Get in touch for collaborations, projects, or inquiries",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
