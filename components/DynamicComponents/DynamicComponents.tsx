"use client";

import { Basic1Up } from "@/components/Basic1Up/Basic1Up";
import { CardGrid } from "@/components/CardGrid/CardGrid";
import { ComparisonTable } from "@/components/ComparisonTable/ComparisonTable";
import { DetailPageHero } from "@/components/DetailPageHero/DetailPageHero";
import { FeaturedAccordionList } from "@/components/FeaturedAccordionList/FeaturedAccordionList";
import { FeaturedIconGrid } from "@/components/FeaturedIconGrid/FeaturedIconGrid";
import { FeaturedIconList } from "@/components/FeaturedIconList/FeaturedIconList";
import { FeaturedIconListGrid } from "@/components/FeaturedIconListGrid/FeaturedIconListGrid";
import { FeaturedSolutionsGrid } from "@/components/FeaturedSolutionsGrid/FeaturedSolutionsGrid";
import { FeaturedText } from "@/components/FeaturedText/FeaturedText";
import { FeaturedTextList } from "@/components/FeaturedTextList/FeaturedTextList";
import { GradientHero } from "@/components/GradientHero/GradientHero";
import { GridSeparator } from "@/components/GridSeparator/GridSeparator";
import { HomepageHero } from "@/components/HomepageHero/HomepageHero";
import { InlineTextBlock } from "@/components/InlineTextBlock/InlineTextBlock";
import { LogoMarquee } from "@/components/LogoMarquee/LogoMarquee";
import { RelatedPosts } from "@/components/RelatedPosts/RelatedPosts";
import { SolutionsPackage } from "@/components/SolutionsPackage/SolutionsPackage";
import { Wysiwyg } from "@/components/Wysiwyg/Wysiwyg";
import type { TPageComponent } from "@/types/page.types";
import type { FC } from "react";
import type { IDynamicComponents } from "./DynamicComponents.types";

const componentMap = {
  Basic1Up,
  CardGrid,
  DetailPageHero,
  ComparisonTable,
  FeaturedAccordionList,
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
  SolutionsPackage,
  Wysiwyg,
};

type ComponentType = FC<Omit<TPageComponent, "type">>;

export const DynamicComponents = ({ components }: IDynamicComponents) => {
  return components.map((component, index) => {
    const { type, ...props } = component;
    const Component = componentMap[type] as ComponentType;

    if (!Component) {
      if (process.env.NODE_ENV === "development") {
        console.warn(`Component for type "${type}" not found.`);
      }

      return null;
    }

    return <Component {...props} key={index} />;
  });
};
