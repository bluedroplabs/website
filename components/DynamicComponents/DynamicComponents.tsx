"use client";

import { Basic1Up } from "@/components/Basic1Up/Basic1Up";
import { HomepageHero } from "@/components/HomepageHero/HomepageHero";
import { LogoMarquee } from "@/components/LogoMarquee/LogoMarquee";
import type { TPageComponent } from "@/types/page.types";
import type { FC } from "react";
import { FeaturedIconGrid } from "../FeaturedIconGrid/FeaturedIconGrid";
import { FeaturedSolutionsGrid } from "../FeaturedSolutionsGrid/FeaturedSolutionsGrid";
import { GridSeparator } from "../GridSeparator/GridSeparator";
import type { IDynamicComponents } from "./DynamicComponents.types";

const componentMap = {
  Basic1Up,
  FeaturedIconGrid,
  FeaturedSolutionsGrid,
  GridSeparator,
  HomepageHero,
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
