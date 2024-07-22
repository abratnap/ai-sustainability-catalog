// src/app/layout.tsx
import type { Metadata } from "next";
import "../app/globals.css"; // Ensure this imports your global styles, including fonts

// Define your metadata
export const metadata: Metadata = {
  title: "AI Sustainability Catalog",
  description: "AI Sustainability Catalog",
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans"> {/* Apply IBM font class if needed */}
        {children}
      </body>
    </html>
  );
}
