"use client";
import { Inter } from "next/font/google";
import "semantic-ui-css/semantic.min.css";
import "@/scss/global.scss";
import { AuthProvider } from "./contexts";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
