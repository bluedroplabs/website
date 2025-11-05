import type { CSSProperties } from "react";
import { ScrollBar } from "./ScrollArea";
import type { IScrollArea } from "./ScrollArea.types";

const LOREM_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
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
mollit anim id est laborum.`;

const BASE_STYLE: CSSProperties = {
  backgroundColor: "var(--color-button-default-bg)",
  border: "1px solid var(--border-normal)",
  maxWidth: "480px",
  width: "100%",
};

const BASE_HEADING_CLASSES =
  "bg-button-default-bg mb-5 sticky py-5 border-b border-default-inverse";

const SCROLL_AREA_VERTICAL_PROPS: IScrollArea = {
  children: (
    <>
      <div className="px-5 pb-5 text-default-inverse w-full">
        <h1 className={`${BASE_HEADING_CLASSES} top-0`}>Scroll vertically</h1>
        <p>{LOREM_TEXT}</p>
      </div>
      <ScrollBar />
    </>
  ),
  style: {
    ...BASE_STYLE,
    alignItems: "center",
    display: "flex",
    overflowY: "auto",
    height: "300px",
  },
  type: "always",
};

const SCROLL_AREA_HORIZONTAL_PROPS: IScrollArea = {
  children: (
    <>
      <div className="px-5 pb-5 text-default-inverse">
        <h1 className={`${BASE_HEADING_CLASSES} left-5 w-fit`}>
          Scroll horizontally
        </h1>
        <p className="whitespace-nowrap">{LOREM_TEXT}</p>
      </div>
      <ScrollBar orientation="horizontal" />
    </>
  ),
  style: {
    ...BASE_STYLE,
    overflowX: "auto",
  },
  type: "always",
};

export const SCROLL_AREA_EXAMPLE_PROPS = {
  vertical: SCROLL_AREA_VERTICAL_PROPS,
  horizontal: SCROLL_AREA_HORIZONTAL_PROPS,
};
