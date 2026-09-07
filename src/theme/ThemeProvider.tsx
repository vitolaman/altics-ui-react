import { useEffect, type ReactNode } from "react";
export type Theme = "light" | "dark" | "system";
export function ThemeProvider({
  defaultTheme = "system",
  children,
}: {
  defaultTheme?: Theme;
  children: ReactNode;
}) {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    if (defaultTheme !== "system") root.classList.add(defaultTheme);
  }, [defaultTheme]);
  return <>{children}</>;
}
