import { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/scss/global.scss";
import { AuthProvider } from "./contexts";
import SemanticUILayout from "./SemanticUILayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tienda de Juegos",
  description: "Tienda de juegos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <SemanticUILayout>
            {children}
          </SemanticUILayout>
        </AuthProvider>
      </body>
    </html>
  );
}
