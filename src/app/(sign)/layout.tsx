import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./page.css";
import BackgroundStyle from "@/components/ContainerLogin/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Código Certo - SignIn",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <BackgroundStyle />
          {children}
        </main>
      </body>
    </html>
  );
}
