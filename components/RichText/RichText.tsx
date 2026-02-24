"use client";

import { cn } from "@/utils";
import parse from "html-react-parser";
import type { IRichText } from "./RichText.types";

export const RichText = ({ className, content, ...props }: IRichText) => {
  return (
    <section
      className={cn(
        "space-y-3",
        "[&_a]:text-brand-aqua [&_a]:underline [&_a]:hover:text-brand-light-blue",
        "[&_strong]:font-semibold [&_b]:font-semibold [&_em]:italic [&_i]:italic",
        "[&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2",
        "[&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2",
        "[&_li]:leading-6",
        "[&_h1]:text-size-24 2xl:[&_h1]:text-size-40",
        "[&_h2]:text-size-20 2xl:[&_h2]:text-size-20 font-medium",
        "[&_h3]:text-size-20 2xl:[&_h3]:text-size-24",
        "[&_h4]:text-size-20 2xl:[&_h4]:text-size-24",
        "[&_h5]:text-size-20 2xl:[&_h5]:text-size-24",
        "[&_h6]:text-size-20 2xl:[&_h6]:text-size-24",
        "[&_p]:font-light [&_p]:text-size-18 2xl:[&_p]:text-size-18",
        "[&_blockquote]:border-l-2 [&_blockquote]:border-l-brand-light-blue [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-6 [&_blockquote]:lg:my-8",
        className,
      )}
      {...props}
    >
      {parse(content)}
    </section>
  );
};
