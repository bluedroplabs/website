"use client";

import { cn } from "@/utils";
import Image from "next/image";
import type { IInlineImage } from "./InlineImage.types";

export const InlineImage = ({ className, image, ...props }: IInlineImage) => {
  if (!image) return null;

  return (
    <figure className={cn("relative", className)} {...props}>
      <Image {...image} />
      {image.alt && <figcaption className="sr-only">{image.alt}</figcaption>}
    </figure>
  );
};
