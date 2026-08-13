import { Navigation } from "@/components/Navigation/Navigation";
import type { INavigation } from "@/components/Navigation/Navigation.types";
import { ThemeProvider } from "next-themes";

export default function NavigationIsland(props: INavigation) {
  return (
    <ThemeProvider>
      <Navigation {...props} />
    </ThemeProvider>
  );
}
