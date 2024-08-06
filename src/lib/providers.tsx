"use client";

import { NextUIProvider } from "@nextui-org/system";
import { Provider } from "jotai";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { useRouter } from "next/navigation";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const navigate = useRouter();
  return (
    <NextUIProvider navigate={navigate.push}>
      <Provider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {children}
          <Analytics />
        </NextThemesProvider>
      </Provider>
    </NextUIProvider>
  );
};
