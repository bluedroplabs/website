"use client";

import { Basic1Up } from "@/components/Basic1Up/Basic1Up";
import { HomepageHero } from "@/components/HomepageHero/HomepageHero";
import { LogoMarquee } from "@/components/LogoMarquee/LogoMarquee";
import type { TPageComponent } from "@/types/page.types";
import type { FC } from "react";
import { ComparisonTable } from "../ComparisonTable/ComparisonTable";
import { FeaturedIconGrid } from "../FeaturedIconGrid/FeaturedIconGrid";
import { FeaturedIconList } from "../FeaturedIconList/FeaturedIconList";
import { FeaturedIconListGrid } from "../FeaturedIconListGrid/FeaturedIconListGrid";
import { FeaturedSolutionsGrid } from "../FeaturedSolutionsGrid/FeaturedSolutionsGrid";
import { FeaturedText } from "../FeaturedText/FeaturedText";
import { FeaturedTextList } from "../FeaturedTextList/FeaturedTextList";
import { GradientHero } from "../GradientHero/GradientHero";
import { GridSeparator } from "../GridSeparator/GridSeparator";
import { InlineTextBlock } from "../InlineTextBlock/InlineTextBlock";
import type { IDynamicComponents } from "./DynamicComponents.types";

const componentMap = {
  Basic1Up,
  ComparisonTable,
  FeaturedIconGrid,
  FeaturedIconList,
  FeaturedIconListGrid,
  FeaturedSolutionsGrid,
  FeaturedText,
  FeaturedTextList,
  GradientHero,
  GridSeparator,
  HomepageHero,
  InlineTextBlock,
  LogoMarquee,
};

type ComponentType = FC<Omit<TPageComponent, "type">>;

export const DynamicComponents = ({ components }: IDynamicComponents) => {
  return components.map((component, index) => {
    const { type, ...props } = component;
    const Component = componentMap[type] as ComponentType;

    if (!Component) {
      console.warn(`Component for type "${type}" not found.`);
      return null;
    }

    return <Component {...props} key={index} />;
  });
};
