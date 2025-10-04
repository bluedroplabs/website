/**
 * Type representing the size properties of the Button component.
 */
export type TButtonSize = "default";

/**
 * Type representing the variant properties of the Button component.
 */
export type TButtonVariant = "default" | "outline" | "special";

/**
 * Combined props for the Button component, including standard button attributes and variant properties.
 */
export type TButton = React.ComponentProps<"button"> & {
  asChild?: boolean;
};

/**
 * Props for the Button component.
 */
export interface IButton extends TButton {
  size?: TButtonSize;
  /**
   * Determines the visual variant of the component.
   * Defaults to `default` if not specified.
   */
  variant?: TButtonVariant;
}
