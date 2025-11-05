"use client";

import { Container } from "@/components/Container/Container";
import { MultiSelect } from "@/components/MultiSelect/MultiSelect";
import { ResourceCard } from "@/components/ResourceCard/ResourceCard";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { cn } from "@/utils/classes";
import { useEffect, useState } from "react";
import type { ICardGrid } from "./CardGrid.types";
import { Pagination } from "./components/Pagination";

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

  const totalPages = Math.ceil(total / limit);

  useEffect(() => {
    updateCards?.({
      page: 1,
      searchTerm,
      topic: selectedFilters.topic,
      type: selectedFilters.type,
    });
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

  // Group items: [[featured], [basic, basic, basic], [basic, basic, basic], ...]
  const groupedItems: (typeof items)[] = [];

  if (items.length > 0) {
    // First group: featured item
    groupedItems.push([items[0]]);

    // Group remaining items in chunks of 3
    let currentGroup: typeof items = [];
    for (let i = 1; i < items.length; i++) {
      currentGroup.push(items[i]);

      // When we have 3 items or reached the end, push the group
      if (currentGroup.length === 3 || i === items.length - 1) {
        groupedItems.push(currentGroup);
        currentGroup = [];
      }
    }
  }

  return (
    <Container className={className} noPadding {...props}>
      <section>
        <Container className="border-y border-border-normal max-md:px-0">
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
        {groupedItems.map((group, groupIndex) => (
          <Container
            className="max-md:px-0 md:border-y md:border-border-normal"
            key={groupIndex}
          >
            <div
              className={cn(
                "border-x border-border-normal lg:grid lg:grid-cols-3",
              )}
            >
              {group.map((item, itemIndex) => {
                const isFirst = groupIndex === 0;
                const globalIndex =
                  groupIndex === 0 ? 0 : (groupIndex - 1) * 3 + itemIndex + 1;

                return (
                  <ResourceCard
                    {...item}
                    className={cn(
                      "border-border-normal max-md:border-t [&:nth-child(3n+2)]:lg:border-x",
                      isFirst && "lg:col-span-3",
                    )}
                    key={globalIndex}
                    variant={isFirst ? "featured" : "default"}
                  />
                );
              })}
            </div>
          </Container>
        ))}

        <Container className="border-border-normal max-md:border-t">
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
