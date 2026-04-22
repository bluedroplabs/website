"use client";

import { Basic1Up } from "@/components/Basic1Up/Basic1Up";
import { CardGrid } from "@/components/CardGrid/CardGrid";
import { ComparisonTable } from "@/components/ComparisonTable/ComparisonTable";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { DetailPageHero } from "@/components/DetailPageHero/DetailPageHero";
import { FeaturedAccordionList } from "@/components/FeaturedAccordionList/FeaturedAccordionList";
import { FeaturedIconGrid } from "@/components/FeaturedIconGrid/FeaturedIconGrid";
import { FeaturedIconList } from "@/components/FeaturedIconList/FeaturedIconList";
import { FeaturedIconListGrid } from "@/components/FeaturedIconListGrid/FeaturedIconListGrid";
import { FeaturedProcessList } from "@/components/FeaturedProcessList/FeaturedProcessList";
import { FeaturedSolutionsGrid } from "@/components/FeaturedSolutionsGrid/FeaturedSolutionsGrid";
import { FeaturedSolutionsRow } from "@/components/FeaturedSolutionsRow/FeaturedSolutionsRow";
import { FeaturedSplitIconList } from "@/components/FeaturedSplitIconList/FeaturedSplitIconList";
import { FeaturedSplitText } from "@/components/FeaturedSplitText/FeaturedSplitText";
import { FeaturedText } from "@/components/FeaturedText/FeaturedText";
import { FeaturedTextList } from "@/components/FeaturedTextList/FeaturedTextList";
import { GradientHero } from "@/components/GradientHero/GradientHero";
import { GridSeparator } from "@/components/GridSeparator/GridSeparator";
import { HomepageHero } from "@/components/HomepageHero/HomepageHero";
import { InlineTextBlock } from "@/components/InlineTextBlock/InlineTextBlock";
import { LogoMarquee } from "@/components/LogoMarquee/LogoMarquee";
import { RelatedArticles } from "@/components/RelatedArticles/RelatedArticles";
import { SolutionsPackage } from "@/components/SolutionsPackage/SolutionsPackage";
import { Wysiwyg } from "@/components/Wysiwyg/Wysiwyg";
import type { TPageComponent } from "@/types/page.types";
import type { FC } from "react";
import type { IDynamicComponents } from "./DynamicComponents.types";

const componentMap = {
  Basic1Up,
  CardGrid,
  ContactForm,
  DetailPageHero,
  ComparisonTable,
  FeaturedAccordionList,
  FeaturedIconGrid,
  FeaturedIconList,
  FeaturedIconListGrid,
  FeaturedProcessList,
  FeaturedSolutionsGrid,
  FeaturedSolutionsRow,
  FeaturedSplitIconList,
  FeaturedSplitText,
  FeaturedText,
  FeaturedTextList,
  GradientHero,
  GridSeparator,
  HomepageHero,
  InlineTextBlock,
  LogoMarquee,
  RelatedArticles,
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
