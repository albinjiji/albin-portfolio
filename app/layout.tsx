import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Albin Jiji',
  description:
    'Frontend Engineer skilled in React.js, Next.js, TypeScript, Redux, and Redux Toolkit',
  icons: {
      icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
