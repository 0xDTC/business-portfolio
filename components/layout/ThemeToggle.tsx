"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      type="button"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
      aria-label="Toggle theme"
      suppressHydrationWarning
    >
      {currentTheme === "dark" ? (
        <SunIcon className="size-6" aria-hidden="true" />
      ) : (
        <MoonIcon className="size-6" aria-hidden="true" />
      )}
    </button>
  );
}
