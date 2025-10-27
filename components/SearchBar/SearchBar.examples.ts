import type { ISearchBar } from "./SearchBar.types";

const SEARCH_BAR_DEFAULT_PROPS: ISearchBar = {
  className: "max-w-188.75 mx-5 w-full",
  placeholder: "Search resources...",
};

export const SEARCH_BAR_EXAMPLE_PROPS = {
  default: SEARCH_BAR_DEFAULT_PROPS,
};
