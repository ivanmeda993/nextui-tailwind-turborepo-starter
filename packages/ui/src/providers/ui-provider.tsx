"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

interface UiProviderProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export const UiProvider = ({ children, themeProps }: UiProviderProps) => {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider attribute="class" defaultTheme="dark" {...themeProps}>
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
};
