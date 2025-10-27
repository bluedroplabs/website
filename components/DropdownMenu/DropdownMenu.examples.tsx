import {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./DropdownMenu";

export const DROPDOWN_MENU_MULTI_SELECT_PROPS = {
  children: (
    <>
      <DropdownMenuTrigger className="border border-button-default-bg font-medium font-mono px-8 py-5 uppercase hover:bg-button-default-bg-hover hover:text-button-default-bg-hover-text">
        Resource Type: All
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Resource Type</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked>Blog</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Whitepaper</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Article</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Report</DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </>
  ),
};

export const DROPDOWN_MENU_EXAMPLE_PROPS = {
  multiselect: DROPDOWN_MENU_MULTI_SELECT_PROPS,
};
