import type { IMultiSelect } from "./MultiSelect.types";

const MULTI_SELECT_DEFAULT_PROPS: IMultiSelect = {
  label: "Resource Type",
  selections: [
    {
      label: "Topics",
      options: [
        { label: "UX/UI", value: "ui-ux" },
        { label: "Drupal", value: "drupal" },
        { label: "WordPress", value: "wordpress" },
        { label: "CMS", value: "cms" },
      ],
    },
  ],
};

export const MULTI_SELECT_EXAMPLE_PROPS = {
  default: MULTI_SELECT_DEFAULT_PROPS,
};
