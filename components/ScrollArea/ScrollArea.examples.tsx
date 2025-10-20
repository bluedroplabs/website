import { ScrollBar } from "./ScrollArea";
import type { IScrollArea } from "./ScrollArea.types";

const SCROLL_AREA_VERTICAL_PROPS: IScrollArea = {
  children: (
    <>
      <div className="px-5 pb-5 text-default-inverse w-full">
        <h1 className="bg-button-default-bg mb-5 sticky top-0 py-5 border-b border-default-inverse">
          Scroll vertically
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </div>
      <ScrollBar />
    </>
  ),
  style: {
    alignItems: "center",
    backgroundColor: "var(--color-button-default-bg)",
    border: "1px solid var(--border-normal)",
    display: "flex",
    maxWidth: "480px",
    overflowY: "auto",
    height: "300px",
    width: "100%",
  },
  type: "always",
};

const SCROLL_AREA_HORIZONTAL_PROPS: IScrollArea = {
  children: (
    <>
      <div className="px-5 pb-5 text-default-inverse">
        <h1 className="bg-button-default-bg mb-5 sticky left-5 py-5 border-b border-default-inverse w-fit">
          Scroll horizontally
        </h1>
        <p className="whitespace-nowrap">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </div>
      <ScrollBar orientation="horizontal" />
    </>
  ),
  style: {
    backgroundColor: "var(--color-button-default-bg)",
    border: "1px solid var(--border-normal)",
    maxWidth: "480px",
    overflowX: "auto",
    width: "100%",
  },
  type: "always",
};

export const SCROLL_AREA_EXAMPLE_PROPS = {
  vertical: SCROLL_AREA_VERTICAL_PROPS,
  horizontal: SCROLL_AREA_HORIZONTAL_PROPS,
};
