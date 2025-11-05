"use client";

import { Basic1Up } from "@/components/Basic1Up/Basic1Up";
import { CardGrid } from "@/components/CardGrid/CardGrid";
import { FeaturedIconGrid } from "@/components/FeaturedIconGrid/FeaturedIconGrid";
import { FeaturedSolutionsGrid } from "@/components/FeaturedSolutionsGrid/FeaturedSolutionsGrid";
import { GradientHero } from "@/components/GradientHero/GradientHero";
import { GridSeparator } from "@/components/GridSeparator/GridSeparator";
import { HomepageHero } from "@/components/HomepageHero/HomepageHero";
import { LogoMarquee } from "@/components/LogoMarquee/LogoMarquee";
import type { TPageComponent } from "@/types/page.types";
import type { FC } from "react";
import { ComparisonTable } from "../ComparisonTable/ComparisonTable";
import { DetailPageHero } from "../DetailPageHero/DetailPageHero";
import { FeaturedIconList } from "../FeaturedIconList/FeaturedIconList";
import { FeaturedIconListGrid } from "../FeaturedIconListGrid/FeaturedIconListGrid";
import { FeaturedText } from "../FeaturedText/FeaturedText";
import { FeaturedTextList } from "../FeaturedTextList/FeaturedTextList";
import { InlineTextBlock } from "../InlineTextBlock/InlineTextBlock";
import { RelatedPosts } from "../RelatedPosts/RelatedPosts";
import { Wysiwyg } from "../Wysiwyg/Wysiwyg";
import type { IDynamicComponents } from "./DynamicComponents.types";

const componentMap = {
  Basic1Up,
  CardGrid,
  DetailPageHero,
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
  RelatedPosts,
  Wysiwyg,
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
