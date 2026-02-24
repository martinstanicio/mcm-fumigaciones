import "./globals.css";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

export { metadata, viewport } from "@/content/metadata";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

type Props = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es-AR">
      <body className={cn(inter.variable, "antialiased")}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
