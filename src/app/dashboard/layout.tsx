import React from "react";
import { geistSans, geistMono } from "../layout";
import Sidebar from "../Components/Sidebar/Sidebar";
import { DataProvider } from "./dataProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DataProvider>
          <div className="w-[100vw] h-[100vh] flex flex-col font-mono text-xl">
            <div className="w-[100%] h-[100%] flex flex-row items-center">
              <div className="w-[18%] h-[100%]">
                <Sidebar />
              </div>
              <div className="w-[82%] h-[100%]">{children}</div>
            </div>
          </div>
        </DataProvider>
      </body>
    </html>
  );
}
