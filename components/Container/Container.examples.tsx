import type { IContainer } from "./Container.types";

const CONTAINER_BLOCK_PROPS: IContainer = {
  children: Array.from({ length: 12 }).map((_, index) => (
    <div className="mb-5 bg-text-default-base h-10" key={index} />
  )),
  displays: {
    sm: "block",
    md: "block",
    lg: "block",
    xl: "block",
  },
};

const CONTAINER_FLEX_PROPS: IContainer = {
  className: "flex-wrap gap-x-5",
  children: Array.from({ length: 12 }).map((_, index) => (
    <div
      className="mb-5 bg-text-default-base w-[calc(50%-10px)] h-10"
      key={index}
    />
  )),
  displays: {
    sm: "flex",
    md: "flex",
    lg: "flex",
    xl: "flex",
  },
};

const CONTAINER_GRID_PROPS: IContainer = {
  children: Array.from({ length: 12 }).map((_, index) => (
    <div className="bg-text-default-base col-span-1 h-64" key={index} />
  )),
  displays: {
    sm: "grid",
    md: "grid",
    lg: "grid",
    xl: "grid",
  },
};

export const CONTAINER_EXAMPLE_PROPS = {
  block: CONTAINER_BLOCK_PROPS,
  flex: CONTAINER_FLEX_PROPS,
  grid: CONTAINER_GRID_PROPS,
};
