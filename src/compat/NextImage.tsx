import type { ImgHTMLAttributes } from "react";

type ImageSource = string | { src: string; width?: number; height?: number };

export interface ImageProps extends Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "width" | "height"
> {
  src: ImageSource;
  width?: number | `${number}`;
  height?: number | `${number}`;
  fill?: boolean;
  priority?: boolean;
  quality?: number | `${number}`;
}

export default function Image({
  src,
  fill,
  priority,
  quality: _quality,
  loading,
  style,
  ...props
}: ImageProps) {
  const resolved = typeof src === "string" ? src : src.src;
  const width =
    props.width ?? (typeof src === "object" ? src.width : undefined);
  const height =
    props.height ?? (typeof src === "object" ? src.height : undefined);

  return (
    <img
      {...props}
      fetchPriority={priority ? "high" : undefined}
      height={fill ? undefined : height}
      loading={loading ?? (priority ? "eager" : "lazy")}
      src={resolved}
      style={
        fill
          ? {
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              ...style,
            }
          : style
      }
      width={fill ? undefined : width}
    />
  );
}
