import type { TPageComponent } from "@/types/page.types";

/**
 * Props for the DynamicComponents component.
 */
export interface IDynamicComponents {
  /**
   * An array of component configurations to be rendered dynamically.
   */
  components: TPageComponent[];
}
