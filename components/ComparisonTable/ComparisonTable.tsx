"use client";

import { Container } from "@/components/Container/Container";
import { cn } from "@/utils";
import { ContentBlock } from "../ContentBlock/ContentBlock";
import { CrossIcon } from "../Icon";
import { CheckIcon } from "../Icon/CheckIcon";
import type { IComparisonTable } from "./ComparisonTable.types";
import { ComparisonTableHighlightBg } from "./components/ComparisonTableHighlightBg";

// const styles = {};

export const ComparisonTable = ({
  caption,
  className,
  columns = [],
  description,
  eyebrow,
  rows,
  title,
  ...props
}: IComparisonTable) => {
  const totalColumns = Math.max(1, columns.length);
  const columnWidth = `${100 / totalColumns}%`;

  return (
    <Container className={className} {...props}>
      <ContentBlock
        className="pb-8 pt-14 lg:pb-12 lg:pt-25 lg:border-x lg:border-border-normal"
        description={description}
        descriptionClassName="mt-5"
        eyebrow={eyebrow}
        eyebrowVariant="highlight"
        title={title}
        titleClassName="mt-5"
        variant="center"
      />
      <table className="w-full border-x border-t border-border-normal table-fixed overflow-hidden max-md:hidden">
        <colgroup>
          {Array.from({ length: totalColumns }).map((_, i) => (
            <col key={i} style={{ width: columnWidth }} />
          ))}
        </colgroup>

        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr>
            {columns.map(({ header }, index) => (
              <th
                className={cn(
                  "font-medium px-6 py-5.25 relative text-center text-xl max-lg:px-10 max-lg:text-base",
                  index !== 0 && "border-l border-border-normal",
                )}
                key={index}
                scope="col"
              >
                <div className="flex justify-center">{header}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(({ label, values }, index) => (
            <tr className="font-semibold text-lg" key={index}>
              <td
                className="px-5 py-4 max-lg:text-base lg:px-8 lg:py-7"
                scope="row"
              >
                {label}
              </td>
              {values.map((value, colIndex) => {
                const { isHighlighted, name } = columns[colIndex + 1] || {};
                const ariaLabel = `${value ? "Included in" : "Not included in"} ${name}`;

                return (
                  <td
                    aria-label={ariaLabel}
                    className="relative border-l border-border-normal"
                    key={colIndex}
                    scope="row"
                  >
                    {value ? (
                      <CheckIcon
                        aria-hidden="true"
                        className="size-8 mx-auto text-icon-hover"
                      />
                    ) : (
                      <CrossIcon
                        aria-hidden="true"
                        className="size-8 mx-auto text-border-light"
                      />
                    )}

                    {index === rows.length - 1 && isHighlighted && (
                      <ComparisonTableHighlightBg className="absolute h-auto w-full bottom-0 left-0 pointer-events-none" />
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
