import type { SVGProps } from "react";

export const DesktopGradient = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 1440 526"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#desktop-gradient-filter0)" opacity="0.8">
      <ellipse
        cx="541"
        cy="-27.5"
        fill="url(#desktop-gradient-paint0)"
        rx="312"
        ry="210.5"
      />
    </g>
    <g filter="url(#desktop-gradient-filter1)" opacity="0.8">
      <ellipse
        cx="878"
        cy="6.5"
        fill="url(#desktop-gradient-paint1)"
        rx="312"
        ry="210.5"
      />
    </g>
    <defs>
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="1021"
        id="desktop-gradient-filter0"
        width="1224"
        x="-71"
        y="-538"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          mode="normal"
          result="shape"
        />
        <feGaussianBlur
          result="effect1_foregroundBlur_desktop_gradient"
          stdDeviation="150"
        />
      </filter>
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="1221"
        id="desktop-gradient-filter1"
        width="1424"
        x="166"
        y="-604"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          mode="normal"
          result="shape"
        />
        <feGaussianBlur
          result="effect1_foregroundBlur_desktop_gradient"
          stdDeviation="200"
        />
      </filter>
      <radialGradient
        cx="0"
        cy="0"
        gradientTransform="translate(541 -27.5) rotate(90) scale(210.5 312)"
        gradientUnits="userSpaceOnUse"
        id="desktop-gradient-paint0"
        r="1"
      >
        <stop stopColor="#2DB8CF" />
        <stop offset="1" stopColor="#2DB8CF" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        cx="0"
        cy="0"
        gradientTransform="translate(878 6.5) rotate(90) scale(210.5 312)"
        gradientUnits="userSpaceOnUse"
        id="desktop-gradient-paint1"
        r="1"
      >
        <stop stopColor="#B8FFE3" />
        <stop offset="1" stopColor="#2DB8CF" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);
