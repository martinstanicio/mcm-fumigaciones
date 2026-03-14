import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

export { metadata, viewport } from "@/content/metadata";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

type Props = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es-AR">
      <body
        className={cn(
          inter.variable,
          "grid min-h-screen grid-rows-[auto_1fr_auto] bg-background text-foreground antialiased",
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
