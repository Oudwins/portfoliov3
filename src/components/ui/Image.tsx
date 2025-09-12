export type BreakPoint = 300 | 640 | 768 | 1024 | 1536;

export default ({
  src,
  sizes = "",
  maxWidth = 1024,
  alt,
  ...imgProps
}: {
  src: string;
  sizes?: string;
  alt: string;
  maxWidth?: BreakPoint;
  [x: string]: any;
}) => {
  const [name, extension] = src.split(".");

  // For SVGs, the optimizer outputs non-suffixed files (e.g., name.svg)
  if (extension === "svg") {
    return (
      <img
        src={`/images/${name}.${extension}`}
        loading="lazy"
        alt={alt}
        {...imgProps}
      />
    );
  }

  const breakpoints = [300, 640, 768, 1024, 1280, 1536];
  breakpoints.length = breakpoints.findIndex((bp) => bp === maxWidth) + 1;

  const webpSrcSet = breakpoints
    .map((bp) => `/images/${name}-${bp}.webp ${bp}w`)
    .join(", ");
  const defaultSrcSet = breakpoints
    .map((bp) => `/images/${name}-${bp}.${extension} ${bp}w`)
    .join(", ");

  return (
    <picture>
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <source
        type={`image/${extension}`}
        srcSet={defaultSrcSet}
        sizes={sizes}
      />
      <img
        src={`/images/${name}-${breakpoints[0]}.${extension}`}
        loading="lazy"
        alt={alt}
        {...imgProps}
      />
    </picture>
  );
};
