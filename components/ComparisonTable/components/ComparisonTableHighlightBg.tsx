import type { SVGProps } from "react";

export const ComparisonTableHighlightBg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 428 529"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_242_9434)">
      <mask fill="white" id="path-1-inside-1_242_9434">
        <path d="M0.666016 0H427.333V529H0.666016V0Z" />
      </mask>
      <g filter="url(#filter0_f_242_9434)">
        <ellipse
          cx="356"
          cy="470"
          fill="url(#paint0_radial_242_9434)"
          rx="173"
          ry="175"
        />
      </g>
      <g filter="url(#filter1_f_242_9434)">
        <ellipse
          cx="57.5"
          cy="406"
          fill="url(#paint1_radial_242_9434)"
          rx="212.5"
          ry="214"
        />
      </g>
    </g>

    <defs>
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="950"
        id="filter0_f_242_9434"
        width="946"
        x="-117"
        y="-5"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          mode="normal"
          result="shape"
        />
        <feGaussianBlur
          result="effect1_foregroundBlur_242_9434"
          stdDeviation="150"
        />
      </filter>
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="1028"
        id="filter1_f_242_9434"
        width="1025"
        x="-455"
        y="-108"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          mode="normal"
          result="shape"
        />
        <feGaussianBlur
          result="effect1_foregroundBlur_242_9434"
          stdDeviation="150"
        />
      </filter>
      <radialGradient
        cx="0"
        cy="0"
        gradientTransform="translate(356 470) rotate(90) scale(175 173)"
        gradientUnits="userSpaceOnUse"
        id="paint0_radial_242_9434"
        r="1"
      >
        <stop stopColor="#2DB8CF" />
        <stop offset="1" stopColor="#2DB8CF" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        cx="0"
        cy="0"
        gradientTransform="translate(57.5 406) rotate(90) scale(214 212.5)"
        gradientUnits="userSpaceOnUse"
        id="paint1_radial_242_9434"
        r="1"
      >
        <stop stopColor="#B8FFE3" />
        <stop offset="1" stopColor="#2DB8CF" stopOpacity="0" />
      </radialGradient>
      <clipPath id="clip0_242_9434">
        <path d="M0.666016 0H427.333V529H0.666016V0Z" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
