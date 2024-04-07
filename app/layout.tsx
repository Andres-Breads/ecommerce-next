import { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/scss/global.scss";
import { AuthProvider } from "./contexts";
import LayoutStyles from "./LayoutStyles";

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
        <LayoutStyles>
          <AuthProvider>
            {children}
          </AuthProvider>
        </LayoutStyles>
      </body>
    </html>
  );
}
