import type { HTMLAttributes } from "react";
import type { IContentBlock } from "../ContentBlock/ContentBlock.types";

/**
 * Props for the InlineTextBlock component.
 */
export interface IInlineTextBlock
  extends HTMLAttributes<HTMLElement>,
    Pick<IContentBlock, "description" | "eyebrow"> {}
