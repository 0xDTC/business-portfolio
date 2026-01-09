import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Writeups - Portfolio",
  description: "Technical writeups, tutorials, and blog posts",
};

export default function WriteupsPage() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
              Writeups
            </h1>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
              Technical articles, tutorials, CTF writeups, and insights. Search, filter by tags, and explore my technical content.
            </p>
          </div>
          <div className="mt-16">
            <p className="text-base text-gray-600 dark:text-gray-400">
              Coming soon: Markdown-powered writeups with search, code highlighting, table of contents, and category filtering.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
