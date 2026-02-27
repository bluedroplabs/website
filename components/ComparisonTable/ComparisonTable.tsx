"use client";

import { Container } from "@/components/Container/Container";
import { cn } from "@/utils";
import type { ReactNode } from "react";
import { ContentBlock } from "../ContentBlock/ContentBlock";
import { CrossIcon } from "../Icon";
import { CheckIcon } from "../Icon/CheckIcon";
import { LogoIcon } from "../Icon/LogoIcon";
import { ScrollArea, ScrollBar } from "../ScrollArea/ScrollArea";
import type { IComparisonTable } from "./ComparisonTable.types";
import { ComparisonTableHighlightBg } from "./components/ComparisonTableHighlightBg";
import { ComparisonTableHighlightsSmallBg } from "./components/ComparisonTableHighlightsSmallBg";

const styles = {
  cell: "relative border-l border-border-normal",
  checkIcon: "size-8 mx-auto text-icon-hover",
  contentBlock:
    "border-x border-border-normal pb-8 px-6 pt-14  lg:pb-12 lg:pt-25",
  contentBlockWrapper: "border-b border-border-normal",
  contentDescription: "mt-5",
  contentTitle: "mt-5",
  crossIcon: "size-8 mx-auto text-border-light",
  highlightBg: "absolute h-auto w-full bottom-0 left-0 pointer-events-none",
  row: "font-semibold text-lg",
  rowHeader: "px-6 py-4 max-lg:text-base lg:px-8 lg:py-7",
  table: "min-w-120 w-full table-fixed overflow-hidden",
  tableWrapper: "border-x border-border-normal",
  th: "font-medium px-6 py-5.25 relative text-center text-xl max-lg:px-6.25 max-lg:text-base",
  thBorderLeft: "border-l border-border-normal",
  thHeaderWrapper: "flex justify-center",
};

/**
 * Renders header content based on the header value
 * Handles special cases like "LOGO" to render React components
 */
const renderHeaderContent = (header: ReactNode): ReactNode => {
  if (header === "LOGO") {
    return (
      <LogoIcon
        aria-hidden
        className="h-[51px] w-[225px] shrink-0"
        role="img"
      />
    );
  }
  return header;
};

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
    <div className="w-full">
      <Container
        className={cn(
          "max-w-[var(--breakpoint-2xl)] mx-auto px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-0",
          className,
        )}
        noPadding
        {...props}
      >
        <div>
          <div className={styles.contentBlockWrapper}>
            <ContentBlock
              className={styles.contentBlock}
              description={description}
              descriptionClassName={styles.contentDescription}
              eyebrow={eyebrow}
              eyebrowVariant="highlight"
              title={title}
              titleClassName={styles.contentTitle}
              variant="center"
            />
          </div>
        </div>
        <div className={styles.tableWrapper}>
          <ScrollArea className="w-full">
            <table className={styles.table}>
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
                        styles.th,
                        index !== 0 && styles.thBorderLeft,
                      )}
                      key={index}
                      scope="col"
                    >
                      <div className={styles.thHeaderWrapper}>
                        {renderHeaderContent(header)}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map(({ label, values }, index) => (
                  <tr className={styles.row} key={index}>
                    <td className={styles.rowHeader} scope="row">
                      {label}
                    </td>
                    {values.map((value, colIndex) => {
                      const { isHighlighted, name } =
                        columns[colIndex + 1] || {};
                      const ariaLabel = `${value ? "Included in" : "Not included in"} ${name}`;

                      return (
                        <td
                          aria-label={ariaLabel}
                          className={styles.cell}
                          key={colIndex}
                          scope="row"
                        >
                          {value ? (
                            <CheckIcon
                              aria-hidden
                              className={styles.checkIcon}
                            />
                          ) : (
                            <CrossIcon
                              aria-hidden
                              className={styles.crossIcon}
                            />
                          )}

                          {index === rows.length - 1 && isHighlighted && (
                            <>
                              <ComparisonTableHighlightsSmallBg
                                className={cn("lg:hidden", styles.highlightBg)}
                              />
                              <ComparisonTableHighlightBg
                                className={cn(
                                  "max-lg:hidden",
                                  styles.highlightBg,
                                )}
                              />
                            </>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </Container>
    </div>
  );
};
