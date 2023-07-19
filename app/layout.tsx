import { ReactNode } from "react";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Musescore PDF Generator",
  description: "Generated by create next app",
};

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <body className="m-8">
        <a href="/">
          <h1 className="font-bold text-2xl">Musescore PDF Generator</h1>
        </a>
        <p className="mb-4 text-zinc-500">
          Please ensure that you are complying with{" "}
          <a href="https://musescore.com/download-terms" className="underline">
            Musescore&apos;s download terms
          </a>{" "}
          before using this tool.
        </p>
        {children}
      </body>
    </html>
  );
}
