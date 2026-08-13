import type { ICtaBlock } from "@/components/CtaBlock/CtaBlock.types";
import type { IFooter } from "@/components/Footer/Footer.types";
import { PageFooter } from "@/components/PageFooter/PageFooter";
import { ThemeProvider } from "next-themes";

export interface FooterIslandProps {
  ctaBlockProps: ICtaBlock;
  footerProps: IFooter;
}

export default function FooterIsland(props: FooterIslandProps) {
  return (
    <ThemeProvider>
      <PageFooter {...props} />
    </ThemeProvider>
  );
}
