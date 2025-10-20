"use client";

import { Container } from "@/components/Container/Container";
import { cn } from "@/utils/classes";
import parse from "html-react-parser";
import type { IFeaturedTextList } from "./FeaturedTextList.types";

export const FeaturedTextList = ({
  className,
  items,
  title,
  ...props
}: IFeaturedTextList) => {
  if (!items || items.length === 0) return null;

  return (
    <Container className={cn(className)} noPadding {...props}>
      <div className="px-5 flex py-14 max-lg:flex-col max-lg:gap-8 md:px-8 lg:px-10 lg:py-20 xl:px-20">
        {title && (
          <h2 className="leading-[1.25] font-medium text-size-24 lg:pl-16 lg:text-size-32 lg:w-[31.148%]">
            {title}
          </h2>
        )}
        <ul className="grid grid-cols-2 gap-x-6 gap-y-8 lg:gap-x-10 lg:gap-y-6 lg:px-10 lg:w-[68.852%] lg:text-lg">
          {items.map((item, index) => (
            <li
              className="font-light text-default-base [&_strong]:font-semibold"
              key={index}
            >
              {parse(item)}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};
