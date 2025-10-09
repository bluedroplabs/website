import type { SVGProps } from "react";

export const MobileGradient = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 393 473"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#mobile-gradient-filter0)" opacity="0.8">
      <ellipse
        cx="152"
        cy="-64.1841"
        fill="url(#mobile-gradient-paint0)"
        rx="256"
        ry="172.5"
      />
    </g>
    <g filter="url(#mobile-gradient-filter1)" opacity="0.8">
      <ellipse
        cx="242"
        cy="28.8159"
        fill="url(#mobile-gradient-paint1)"
        rx="256"
        ry="172.5"
      />
    </g>
    <defs>
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="945"
        id="mobile-gradient-filter0"
        width="1112"
        x="-404"
        y="-536.684"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          mode="normal"
          result="shape"
        />
        <feGaussianBlur
          result="effect1_foregroundBlur_mobile_gradient"
          stdDeviation="150"
        />
      </filter>
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="1145"
        id="mobile-gradient-filter1"
        width="1312"
        x="-414"
        y="-543.684"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          mode="normal"
          result="shape"
        />
        <feGaussianBlur
          result="effect1_foregroundBlur_mobile_gradient"
          stdDeviation="200"
        />
      </filter>
      <radialGradient
        cx="0"
        cy="0"
        gradientTransform="translate(152 -64.1841) rotate(90) scale(172.5 256)"
        gradientUnits="userSpaceOnUse"
        id="mobile-gradient-paint0"
        r="1"
      >
        <stop stopColor="#2DB8CF" />
        <stop offset="1" stopColor="#2DB8CF" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        cx="0"
        cy="0"
        gradientTransform="translate(242 28.8159) rotate(90) scale(172.5 256)"
        gradientUnits="userSpaceOnUse"
        id="mobile-gradient-paint1"
        r="1"
      >
        <stop stopColor="#B8FFE3" />
        <stop offset="1" stopColor="#2DB8CF" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);
