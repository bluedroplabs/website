import { useAppTheme } from "@/hooks/useAppTheme";
import type { SVGProps } from "react";

export const GradientSmallBg = (props: SVGProps<SVGSVGElement>) => {
  const { isDarkMode } = useAppTheme();
  const strokeColor = isDarkMode ? "rgba(252, 252, 251)" : "rgba(17, 17, 17)";

  return (
    <svg
      fill="none"
      viewBox="0 0 440 521"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_242_9886)">
        <g clipPath="url(#clip1_242_9886)">
          <path
            d="M754 78.7352L675.333 78.5183V157.09H596.857V235.661L361.143 235.57V156.999H282.571V78.4273H204.096L204 -157L753.904 -156.692L754 78.7352Z"
            fill="currentColor"
            stroke={strokeColor}
            strokeOpacity="0.1"
            strokeWidth="0.714286"
          />
          <mask
            height="395"
            id="mask0_242_9886"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="551"
            x="204"
            y="-158"
          >
            <path
              d="M754.357 78.8529L675.69 78.6358V157.246H597.215V235.857L361.5 235.766V157.155H282.929V78.5448H204.453L204.357 -157L754.262 -156.692L754.357 78.8529Z"
              fill="#FCFCFB"
              stroke={strokeColor}
              strokeOpacity="0.2"
              strokeWidth="0.714286"
            />
          </mask>
          <g mask="url(#mask0_242_9886)">
            <g filter="url(#filter0_f_242_9886)">
              <ellipse
                cx="409.715"
                cy="182.643"
                fill="url(#paint0_radial_242_9886)"
                rx="127.143"
                ry="128.214"
              />
            </g>
            <g filter="url(#filter1_f_242_9886)">
              <ellipse
                cx="559.715"
                cy="151.929"
                fill="url(#paint1_radial_242_9886)"
                rx="127.143"
                ry="128.214"
              />
            </g>
          </g>
          <g clipPath="url(#clip2_242_9886)">
            <rect
              height="78.5714"
              opacity="0.5"
              stroke={strokeColor}
              strokeOpacity="0.1"
              strokeWidth="0.714286"
              width="78.5714"
              x="204"
              y="-78.4286"
            />
            <rect
              height="78.5714"
              opacity="0.5"
              stroke={strokeColor}
              strokeOpacity="0.1"
              strokeWidth="0.714286"
              width="78.5714"
              x="204"
              y="0.142853"
            />
            <rect
              height="78.5714"
              opacity="0.5"
              stroke={strokeColor}
              strokeOpacity="0.1"
              strokeWidth="0.714286"
              width="78.5714"
              x="282.572"
              y="-78.4286"
            />
            <rect
              height="78.5714"
              opacity="0.5"
              stroke={strokeColor}
              strokeOpacity="0.1"
              strokeWidth="0.714286"
              width="78.5714"
              x="282.572"
              y="0.142853"
            />
            <rect
              height="78.5714"
              opacity="0.5"
              stroke={strokeColor}
              strokeOpacity="0.1"
              strokeWidth="0.714286"
              width="78.5714"
              x="282.572"
              y="78.7143"
            />
            <rect
              height="78.5714"
              opacity="0.5"
              stroke={strokeColor}
              strokeOpacity="0.1"
              strokeWidth="0.714286"
              width="78.5714"
              x="361.143"
              y="-78.4286"
            />
            <rect
              height="78.5714"
              opacity="0.5"
              stroke={strokeColor}
              strokeOpacity="0.1"
              strokeWidth="0.714286"
              width="78.5714"
              x="361.143"
              y="0.142853"
            />
            <rect
              height="78.5714"
              opacity="0.5"
              stroke={strokeColor}
              strokeOpacity="0.1"
              strokeWidth="0.714286"
              width="78.5714"
              x="361.143"
              y="78.7143"
            />
            <rect
              height="78.5714"
              opacity="0.5"
              stroke={strokeColor}
              strokeOpacity="0.1"
              strokeWidth="0.714286"
              width="78.5714"
              x="361.143"
              y="157.286"
            />
            <rect
              height="78.5714"
              opacity="0.5"
              stroke={strokeColor}
              strokeOpacity="0.1"
              strokeWidth="0.714286"
              width="78.5714"
              x="439.715"
              y="-78.4286"
            />
            <rect
              height="78.5714"
              opacity="0.5"
              stroke={strokeColor}
              strokeOpacity="0.1"
              strokeWidth="0.714286"
              width="78.5714"
              x="439.715"
              y="0.142853"
            />
            <rect
              height="78.5714"
              opacity="0.5"
              stroke={strokeColor}
              strokeOpacity="0.1"
              strokeWidth="0.714286"
              width="78.5714"
              x="439.715"
              y="78.7143"
            />
            <rect
              height="78.5714"
              opacity="0.5"
              stroke={strokeColor}
              strokeOpacity="0.1"
              strokeWidth="0.714286"
              width="78.5714"
              x="439.715"
              y="157.286"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="470.714"
          id="filter0_f_242_9886"
          width="468.571"
          x="175.429"
          y="-52.7143"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          />
          <feGaussianBlur
            result="effect1_foregroundBlur_242_9886"
            stdDeviation="53.5714"
          />
        </filter>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="542.143"
          id="filter1_f_242_9886"
          width="539.999"
          x="289.715"
          y="-119.143"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          />
          <feGaussianBlur
            result="effect1_foregroundBlur_242_9886"
            stdDeviation="71.4286"
          />
        </filter>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="translate(409.715 182.643) rotate(90) scale(128.214 127.143)"
          gradientUnits="userSpaceOnUse"
          id="paint0_radial_242_9886"
          r="1"
        >
          <stop stopColor="#2DB8CF" />
          <stop offset="1" stopColor="#2DB8CF" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="translate(559.715 151.929) rotate(90) scale(128.214 127.143)"
          gradientUnits="userSpaceOnUse"
          id="paint1_radial_242_9886"
          r="1"
        >
          <stop stopColor="#B8FFE3" />
          <stop offset="1" stopColor="#2DB8CF" stopOpacity="0" />
        </radialGradient>
        <clipPath id="clip0_242_9886">
          <rect fill="white" height="521" width="440" />
        </clipPath>
        <clipPath id="clip1_242_9886">
          <rect
            fill="white"
            height="392.661"
            transform="translate(204 -157)"
            width="550"
          />
        </clipPath>
        <clipPath id="clip2_242_9886">
          <rect
            fill="white"
            height="428.571"
            transform="translate(204 -157)"
            width="550"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
