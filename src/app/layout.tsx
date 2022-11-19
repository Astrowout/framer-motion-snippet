import { ReactNode } from "react";

import "../styles/main.css";

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
    return (
        <html
          lang="en"
          className="bg-black overflow-hidden"
        >
            <head />

            <body className="bg-neutral-900 bg-opacity-50 min-h-screen flex flex-col">
              { children }
            </body>
        </html>
    )
}
