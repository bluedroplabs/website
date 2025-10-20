import type { SVGProps } from "react";

export const ComparisonTableHighlightsSmallBg = (
  props: SVGProps<SVGSVGElement>,
) => (
  <svg
    fill="none"
    viewBox="0 0 160 674"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_425_3745)">
      <mask fill="white" id="path-1-inside-1_425_3745">
        <path d="M0 0.533203H160V673.533H0V0.533203Z" />
      </mask>
      <g filter="url(#filter0_f_425_3745)">
        <ellipse
          cx="355.334"
          cy="470.533"
          fill="url(#paint0_radial_425_3745)"
          rx="173"
          ry="175"
        />
      </g>
      <g filter="url(#filter1_f_425_3745)">
        <ellipse
          cx="56.834"
          cy="406.533"
          fill="url(#paint1_radial_425_3745)"
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
        id="filter0_f_425_3745"
        width="946"
        x="-117.666"
        y="-4.4668"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          mode="normal"
          result="shape"
        />
        <feGaussianBlur
          result="effect1_foregroundBlur_425_3745"
          stdDeviation="150"
        />
      </filter>
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="1028"
        id="filter1_f_425_3745"
        width="1025"
        x="-455.666"
        y="-107.467"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          mode="normal"
          result="shape"
        />
        <feGaussianBlur
          result="effect1_foregroundBlur_425_3745"
          stdDeviation="150"
        />
      </filter>
      <radialGradient
        cx="0"
        cy="0"
        gradientTransform="translate(355.334 470.533) rotate(90) scale(175 173)"
        gradientUnits="userSpaceOnUse"
        id="paint0_radial_425_3745"
        r="1"
      >
        <stop stopColor="#2DB8CF" />
        <stop offset="1" stopColor="#2DB8CF" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        cx="0"
        cy="0"
        gradientTransform="translate(56.834 406.533) rotate(90) scale(214 212.5)"
        gradientUnits="userSpaceOnUse"
        id="paint1_radial_425_3745"
        r="1"
      >
        <stop stopColor="#B8FFE3" />
        <stop offset="1" stopColor="#2DB8CF" stopOpacity="0" />
      </radialGradient>
      <clipPath id="clip0_425_3745">
        <path d="M0 0.533203H160V673.533H0V0.533203Z" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
