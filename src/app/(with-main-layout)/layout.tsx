import { Inter } from "next/font/google";
import "@/css/globals.css";
import { RootProvider } from "@/components/provider";
import { Metadata } from "next";
import { MainLayout } from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Hakan",
  description: "",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootProvider>
          <MainLayout> {children}</MainLayout>
        </RootProvider>
      </body>
    </html>
  );
}
