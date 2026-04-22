export const ProjectDeliveryIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height="64"
    viewBox="0 0 64 64"
    width="64"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect fill="#002024" height="64" width="64" />
    <rect
      fill="url(#pattern0_761_11669)"
      height="48"
      style={{ mixBlendMode: "plus-lighter" }}
      width="48"
      x="8"
      y="8"
    />
    <defs>
      <pattern
        height="1"
        id="pattern0_761_11669"
        patternContentUnits="objectBoundingBox"
        width="1"
      >
        <use transform="scale(0.0208333)" xlinkHref="#image0_761_11669" />
      </pattern>
      <image
        height="48"
        id="image0_761_11669"
        preserveAspectRatio="none"
        width="48"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
