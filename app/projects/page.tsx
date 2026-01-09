import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects - Portfolio",
  description: "Explore my GitHub projects and featured work",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
              Projects
            </h1>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
              Explore my work and contributions. Projects will be automatically fetched from GitHub and displayed here.
            </p>
          </div>
          <div className="mt-16">
            <p className="text-base text-gray-600 dark:text-gray-400">
              Coming soon: GitHub projects integration with featured projects, filters, and detailed views.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
