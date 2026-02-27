"use client";

import { Container } from "@/components/Container/Container";
import { MultiSelect } from "@/components/MultiSelect/MultiSelect";
import { ResourceCard } from "@/components/ResourceCard/ResourceCard";
import type { IResourceCard } from "@/components/ResourceCard/ResourceCard.types";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { useResponsiveLimit } from "@/hooks/useResponsiveLimit";
import { cn } from "@/utils/classes";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { ICardGrid } from "./CardGrid.types";
import { Pagination } from "./components/Pagination";

function filterItems(
  items: IResourceCard[],
  searchTerm: string,
  selectedFilters: Record<string, string[]>,
): IResourceCard[] {
  const term = searchTerm.trim().toLowerCase();
  const typeFilter = selectedFilters.type ?? [];
  const topicFilter = selectedFilters.topic ?? [];

  return items.filter((item) => {
    if (term) {
      const title = (item.title ?? "").toLowerCase();
      const description = (item.description ?? "").toLowerCase();
      const eyebrow = (item.eyebrow ?? "").toLowerCase();
      if (
        !title.includes(term) &&
        !description.includes(term) &&
        !eyebrow.includes(term)
      ) {
        return false;
      }
    }
    if (typeFilter.length > 0 && item.type) {
      if (!typeFilter.includes(item.type)) return false;
    }
    if (topicFilter.length > 0 && item.topic?.length) {
      const itemTopics = Array.isArray(item.topic) ? item.topic : [item.topic];
      const hasTopic = topicFilter.some((t) => itemTopics.includes(t));
      if (!hasTopic) return false;
    }
    return true;
  });
}

function isInLastRow(
  index: number,
  itemsLength: number,
  itemsPerRow: number,
): boolean {
  if (itemsLength === 0 || itemsPerRow <= 0) return false;

  const lastRowStartIndex =
    Math.floor((itemsLength - 1) / itemsPerRow) * itemsPerRow;

  return index >= lastRowStartIndex;
}

export const CardGrid = ({
  className,
  filters,
  limit = 10,
  items,
  updateCards,
  total,
  ...props
}: ICardGrid) => {
  const effectiveLimit = useResponsiveLimit(limit);
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});

  const useClientFiltering = !updateCards;

  const filteredItems = useMemo(
    () =>
      useClientFiltering
        ? filterItems(items ?? [], searchTerm, selectedFilters)
        : (items ?? []),
    [useClientFiltering, items, searchTerm, selectedFilters],
  );

  const effectiveTotal = useClientFiltering ? filteredItems.length : total;
  const totalPages = Math.ceil(effectiveTotal / effectiveLimit) || 1;

  const displayedItems = useClientFiltering
    ? filteredItems.slice((page - 1) * effectiveLimit, page * effectiveLimit)
    : filteredItems;

  useEffect(() => {
    setPage(1);
    if (updateCards) {
      updateCards({
        page: 1,
        searchTerm,
        topic: selectedFilters.topic,
        type: selectedFilters.type,
      });
    }
  }, [searchTerm, selectedFilters, updateCards]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    updateCards?.({
      page: newPage,
      searchTerm,
      topic: selectedFilters.topic,
      type: selectedFilters.type,
    });
  };

  const handleFilterChange =
    (filterKey: string) => (selectedValues: string[]) => {
      setSelectedFilters((prev) => ({
        ...prev,
        [filterKey]: selectedValues,
      }));
    };

  if (!items || items.length === 0) return null;

  const hasFilteredResults = displayedItems.length > 0;
  const [featuredItem, ...restItems] = displayedItems;

  return (
    <Container className={className} noPadding {...props}>
      <section>
        <div className="border-t border-border-normal">
          <div className="max-w-[var(--breakpoint-2xl)] mx-auto">
            <div className="border-x border-border-normal flex gap-x-8 items-center justify-between px-5 py-4 lg:px-8 lg:py-6">
              <SearchBar
                className="w-full"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSearchTerm(e.currentTarget.search.value);
                }}
              />
              {filters?.map((filter) => (
                <MultiSelect
                  {...filter}
                  className="whitespace-nowrap max-md:hidden"
                  key={filter.name}
                  onChange={handleFilterChange(filter.name)}
                />
              ))}
            </div>
          </div>
        </div>
        {hasFilteredResults ? (
          <>
            {featuredItem && (
              <div className="border-t border-border-normal">
                <div className="max-w-[var(--breakpoint-2xl)]  md:max-w-[var(--breakpoint-xl)]  mx-auto">
                  <div className="border-x border-border-normal">
                    <Link
                      className="w-full lg:col-span-3"
                      href={featuredItem.href}
                    >
                      <ResourceCard {...featuredItem} variant="featured" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {restItems.length > 0 && (
              <div className="border-t border-border-normal">
                <div className="max-w-[var(--breakpoint-2xl)] md:max-w-[var(--breakpoint-xl)] mx-auto">
                  <div
                    className={cn(
                      "border-l border-border-normal md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:items-stretch",
                    )}
                  >
                    {restItems.map((item, index) => {
                      const isLastRowLg = isInLastRow(
                        index,
                        restItems.length,
                        3,
                      );
                      const isLastRowMd = isInLastRow(
                        index,
                        restItems.length,
                        2,
                      );

                      return (
                        <Link
                          className={cn(
                            "w-full",
                            "lg:h-full lg:border-border-normal lg:border-r",
                            !isLastRowLg && "lg:border-b",
                            "md:border-border-normal md:border-r",
                            !isLastRowMd && "md:border-b",
                          )}
                          href={item.href}
                          key={index}
                        >
                          <ResourceCard
                            {...item}
                            className={cn(
                              "lg:h-full max-md:border-border-normal max-md:border-b",
                            )}
                            variant="default"
                          />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <Container className="max-md:px-0 md:border-t md:border-border-normal">
            <div className="border-x border-border-normal px-5 py-12 text-center text-fg-muted md:px-8">
              No resources match your filters. Try adjusting your search or
              filter selections.
            </div>
          </Container>
        )}

        <Container>
          <Pagination
            className="py-6 md:border-x md:border-border-normal"
            currentPage={page}
            onPageChange={handlePageChange}
            totalPages={totalPages}
          />
        </Container>
      </section>
    </Container>
  );
};
