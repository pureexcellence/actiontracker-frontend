// app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Action Tracker",
  description: "Frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}