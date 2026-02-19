import { cn } from "@/utils/classes";

interface HamburgerIconProps {
  className?: string;
  isActive?: boolean;
}

export const HamburgerIcon = ({
  className,
  isActive = false,
}: HamburgerIconProps) => {
  return (
    <span
      className={cn(
        "hamburger hamburger--collapse",
        isActive && "is-active",
        className
      )}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </span>
  );
};
