import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clerk test application",
  description: "Basic application to test clerk authentication library.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
