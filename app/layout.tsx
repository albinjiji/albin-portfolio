import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Albin Jiji",
  description:
    "Frontend Engineer skilled in React.js, Next.js, TypeScript, Redux, and Redux Toolkit",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Albin Jiji",
    description:
      "Frontend Engineer skilled in React.js, Next.js, TypeScript, Redux, and Redux Toolkit",
  },
};

const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        <a
          href="#main"
          className="fixed left-2 top-2 z-50 -translate-y-16 rounded-md bg-[var(--accent)] px-3 py-2 text-sm text-white transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
