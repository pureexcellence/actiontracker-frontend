// app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Action Tracker",
  description: "Trackers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <main className="min-h-dvh">
          {/* Page frame */}
          <div className="mx-auto max-w-3xl px-6 py-10">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}