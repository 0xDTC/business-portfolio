"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="size-6 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700" />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <SunIcon className="size-6" aria-hidden="true" />
      ) : (
        <MoonIcon className="size-6" aria-hidden="true" />
      )}
    </button>
  );
}
