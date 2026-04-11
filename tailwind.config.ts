import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#0c0c0e",
          raised: "#121214",
          overlay: "#18181b",
        },
        border: {
          subtle: "rgba(255,255,255,0.06)",
          DEFAULT: "rgba(255,255,255,0.1)",
        },
        accent: {
          DEFAULT: "#7ee787",
          muted: "rgba(126,231,135,0.15)",
        },
        /** Slightly brighter mint for links on near-black (readability vs raw accent). */
        readable: {
          link: "#9fefa8",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [typography],
};

export default config;
