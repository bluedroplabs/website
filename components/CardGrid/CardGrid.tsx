"use client";

import { Container } from "@/components/Container/Container";
import { MultiSelect } from "@/components/MultiSelect/MultiSelect";
import { ResourceCard } from "@/components/ResourceCard/ResourceCard";
import type { IResourceCard } from "@/components/ResourceCard/ResourceCard.types";
import { SearchBar } from "@/components/SearchBar/SearchBar";
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

export const CardGrid = ({
  className,
  filters,
  limit = 10,
  items,
  updateCards,
  total,
  ...props
}: ICardGrid) => {
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
  const totalPages = Math.ceil(effectiveTotal / limit) || 1;

  const displayedItems = useClientFiltering
    ? filteredItems.slice((page - 1) * limit, page * limit)
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

  const groupedItems: (typeof displayedItems)[] = [];

  if (displayedItems.length > 0) {
    groupedItems.push([displayedItems[0]]);

    let currentGroup: typeof displayedItems = [];
    for (let i = 1; i < displayedItems.length; i++) {
      currentGroup.push(displayedItems[i]);

      if (currentGroup.length === 3 || i === displayedItems.length - 1) {
        groupedItems.push(currentGroup);
        currentGroup = [];
      }
    }
  }

  return (
    <Container className={className} noPadding {...props}>
      <section>
        <Container className="border-t border-border-normal max-md:px-0">
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
        </Container>
        {hasFilteredResults ? (
          groupedItems.map((group, groupIndex) => (
            <Container
              className="max-md:px-0 md:border-t md:border-border-normal"
              key={groupIndex}
            >
              <div
                className={cn(
                  "border-x border-border-normal lg:grid lg:grid-cols-3 lg:items-stretch",
                )}
              >
                {group.map((item, itemIndex) => {
                  const isFirst = groupIndex === 0;
                  const globalIndex =
                    groupIndex === 0 ? 0 : (groupIndex - 1) * 3 + itemIndex + 1;

                  const showVerticalBorder =
                    !isFirst && itemIndex < group.length - 1;

                  return (
                    <Link
                      className={cn(
                        "w-full",
                        isFirst && "lg:col-span-3",
                        !isFirst && "lg:h-full",
                      )}
                      href={item.href}
                      key={globalIndex}
                    >
                      <ResourceCard
                        {...item}
                        className={cn(
                          "border-border-normal max-md:border-t",
                          !isFirst && "lg:h-full",
                          showVerticalBorder &&
                            "lg:border-r lg:border-border-normal",
                        )}
                        variant={isFirst ? "featured" : "default"}
                      />
                    </Link>
                  );
                })}
              </div>
            </Container>
          ))
        ) : (
          <Container className="max-md:px-0 md:border-t md:border-border-normal">
            <div className="border-x border-border-normal px-5 py-12 text-center text-fg-muted md:px-8">
              No resources match your filters. Try adjusting your search or
              filter selections.
            </div>
          </Container>
        )}

        <Container className="md:border-t border-border-normal">
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
