"use client";

import { ThemeProvider } from "@repo/ui/providers/theme";

export function Providers({ children }: { children: React.ReactNode }) {
	return <ThemeProvider>{children}</ThemeProvider>;
}
