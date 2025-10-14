"use client";

import { ContentBlock } from "../ContentBlock/ContentBlock";
import type { IIconCard } from "./IconCard.types";

export const IconCard = ({
  description,
  Icon,
  title,
  variant = "default",
}: IIconCard) => {
  if ((!description && !title) || !Icon) return null;
  if (variant === "inline") {
    return (
      <div className="flex gap-6">
        <Icon className="size-8 text-icon-default lg:size-12" />
        <div className="space-y-2">
          <h3 className="font-semibold text-xl text-default-heading lg:text-size-24">
            {title}
          </h3>
          <p className="font-light lg:text-lg">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <ContentBlock
      description={description}
      descriptionClassName="mt-2"
      Icon={Icon}
      title={title}
      titleClassName="font-semibold mt-4 lg:mt-6"
      titleTag="h3"
      titleVariant="sm"
    />
  );
};
