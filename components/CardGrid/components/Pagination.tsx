"use client";

import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Pagination as PaginationRoot,
} from "@/components/Pagination/Pagination";

// Pagination helper functions
const getPageRange = (page: number, totalPages: number) => {
  if (totalPages <= 7) {
    return { start: 1, end: totalPages };
  }

  if (page <= 4) {
    return { start: 1, end: 5 };
  }

  if (page >= totalPages - 3) {
    return { start: totalPages - 4, end: totalPages };
  }

  return { start: page - 2, end: page + 2 };
};

const shouldShowFirstPageWithEllipsis = (page: number, totalPages: number) => {
  return totalPages > 7 && page > 4;
};

const shouldShowLastPageWithEllipsis = (page: number, totalPages: number) => {
  return totalPages > 7 && page < totalPages - 3;
};

interface IPagination {
  className?: string;
  currentPage: number;
  onPageChange: (page: number) => void;
  totalPages: number;
}

export const Pagination = ({
  className,
  currentPage,
  onPageChange,
  totalPages,
}: IPagination) => {
  const handlePageChange = (newPage: number) => {
    onPageChange(newPage);
  };

  const renderPageNumbers = () => {
    const { start, end } = getPageRange(currentPage, totalPages);
    const pages = [];

    for (let i = start; i <= end; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            isActive={i === currentPage}
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(i);
            }}
          >
            {i}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <PaginationRoot className={className}>
      <PaginationContent>
        {/* Previous Button */}
        <PaginationItem>
          <PaginationPrevious
            className={
              currentPage === 1 ? "pointer-events-none opacity-50" : ""
            }
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) {
                handlePageChange(currentPage - 1);
              }
            }}
          />
        </PaginationItem>

        {/* First page with ellipsis */}
        {shouldShowFirstPageWithEllipsis(currentPage, totalPages) && (
          <>
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(1);
                }}
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}

        {/* Main page numbers */}
        {renderPageNumbers()}

        {/* Last page with ellipsis */}
        {shouldShowLastPageWithEllipsis(currentPage, totalPages) && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(totalPages);
                }}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext
            className={
              currentPage === totalPages ? "pointer-events-none opacity-50" : ""
            }
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) {
                handlePageChange(currentPage + 1);
              }
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationRoot>
  );
};
