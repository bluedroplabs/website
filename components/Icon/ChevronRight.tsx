import type { SVGProps } from "react";

export const ChevronRight = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 9 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.13333 7.53833L0 1.405L1.405 0L8.94333 7.53833L1.405 15.0767L0 13.6717L6.13333 7.53833Z"
        fill="#2DB8CF"
      />
    </svg>
  );
};
