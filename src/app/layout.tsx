import RootLayoutBundle from "@/Components/RootLayoutBundle";
import ReduxProvider from "@/redux/ReduxProvider";
import type { Metadata } from "next";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./globals.css";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-bodyFont bg-gray-300">
        <ReduxProvider>
          <RootLayoutBundle>
            {children}
            </RootLayoutBundle>
        </ReduxProvider>
      </body>
    </html>
  );
}
