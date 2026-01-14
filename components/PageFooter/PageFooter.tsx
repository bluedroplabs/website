import { cn } from "@/utils/classes";
import { CtaBlock } from "../CtaBlock/CtaBlock";
import { DottedBackground } from "../DottedBackground/DottedBackground";
import { Footer } from "../Footer/Footer";
import { DesktopGradient } from "./components/DesktopGradient";
import { MobileGradient } from "./components/MobileGradient";
import type { IPageFooter } from "./PageFooter.types";

const styles = {
  container:
    "flex items-center justify-center relative flex-col overflow-hidden",
  description: "text-default-base",
  title: "mb-3",
  mobileGradient: "absolute top-0 lg:hidden dark:mix-blend-color-dodge",
  desktopGradient: "absolute top-0 max-lg:hidden dark:mix-blend-color-dodge",
  dottedBackground: "z-20 relative h-full",
  gradientBg:
    "bg-gradient-to-b from-brand-aqua/20 via-page-default via-60% to-page-default h-full z-10 relative",
};

export const PageFooter = ({
  className,
  ctaBlockProps,
  footerProps,
  ...props
}: IPageFooter) => {
  return (
    <div {...props} className={cn(styles.container, className)}>
      <MobileGradient className={styles.mobileGradient} />
      <DesktopGradient className={styles.desktopGradient} />
      <DottedBackground className={styles.dottedBackground}>
        <div className={styles.gradientBg}>
          <CtaBlock {...ctaBlockProps} />
          <Footer {...footerProps} />
        </div>
      </DottedBackground>
    </div>
  );
};
