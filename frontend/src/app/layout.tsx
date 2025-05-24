import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import { metadata as frontendMetadata } from "./frontend/metadata";
import "./globals.css";
import { ToastProvider } from "@/providers/toast-provider";

const robotoCondensed = Roboto_Condensed({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata: Metadata = {
  title: {
    default: "F9 Technology | Admin Panel",
    template: "%s | F9 Technology"
  },
  description: "Admin panel for F9ERP",
  icons: {
    icon: {
      url: "/favicon.ico"
    }
  },
  ...frontendMetadata,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body className={`${robotoCondensed.className} antialiased`}>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}