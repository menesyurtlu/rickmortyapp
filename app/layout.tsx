import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import {Poppins} from "next/font/google";

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
});

import "./styles/globals.css";
import {twMerge} from "tailwind-merge";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={twMerge("w-screen h-min-screen bg-mirage-950 antialiased", poppins.className)}>
        <header className="flex flex-col justify-center items-center p-20">
          <h2 className="font-bold text-5xl text-white">
            Rick And Morty
          </h2>
        </header>
        <main className="mx-10 my-20">{children}</main>

        <footer className="px-4 py-2 text-center text-mirage-200/50">
          Developed by <a href="https://www.tuskun.com" className="font-bold">Enes Yurtlu</a>
        </footer>
        </body>
      </html>
    </StoreProvider>
  );
}
