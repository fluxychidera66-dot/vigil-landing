import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vigil - Revenue Protection SaaS',
  description: 'Stop losing money to silent failures. Vigil monitors your entire website for transaction-level failures.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
