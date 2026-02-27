"use client";

import { Container } from "@/components/Container/Container";
import { DetailsAside } from "@/components/DetailsAside/DetailsAside";
import { cn } from "@/utils";
import type { FC } from "react";
import { InlineImage } from "../Image/InlineImage";
import { Metrics } from "../Metrics/Metrics";
import { RichText } from "../RichText/RichText";
import type { IWysiwyg, TWYSIWYGComponentWithType } from "./Wysiwyg.types";

const componentMap = {
  InlineImage,
  Metrics,
  RichText,
};

type TComponentType = FC<Omit<TWYSIWYGComponentWithType, "type">>;

export const Wysiwyg = ({
  className,
  components,
  details,
  ...props
}: IWysiwyg) => {
  return (
    <div className={cn("border-t border-border-normal", className)} {...props}>
      <div className="max-w-[var(--breakpoint-2xl)] mx-auto">
        <Container
          className="py-14 max-lg:!px-0 lg:border-x lg:border-border-normal lg:items-start lg:gap-x-30 lg:py-20"
          displays={{ sm: "flex" }}
        >
          <div className="space-y-8 w-full lg:space-y-12">
            {components.map((component, index) => {
              const { type, ...props } = component;
              const Component = componentMap[type] as TComponentType;

              if (!Component) {
                console.warn(`Component for type "${type}" not found.`);
                return null;
              }

              return <Component {...props} key={index} />;
            })}
          </div>
          <DetailsAside
            {...details}
            className="max-w-70 min-w-70 sticky top-20 self-start max-lg:hidden"
          />
        </Container>
      </div>
    </div>
  );
};
