export type BreakPoint = 300 | 640 | 768 | 1024 | 1536;

import { motion } from "framer-motion";

export default ({
  src,
  sizes = "",
  maxWidth = 1024,
  className,
  alt,
  ...imgProps
}: {
  src: string;
  sizes?: string;
  alt: string;
  className: string;
  maxWidth?: BreakPoint;
  [x: string]: any;
}) => {
  const [name, extension] = src.split(".");
  console.log(src);
  const breakpoints = [300, 640, 768, 1024, 1280, 1536];
  breakpoints.length = breakpoints.findIndex((bp) => bp === maxWidth) + 1;
  const onlyDefaultExtension = ["gif", "svg"];

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
      <motion.img
        src={`/images/${name}-${breakpoints[0]}.${extension}`}
        className={className}
        loading="lazy"
        alt={alt}
        whileHover={{
          y: "calc(-100% + 16rem)",
          transition: {
            type: "tween",
            ease: "linear",
            duration: 15,
          },
        }}
        whileTap={{
          y: "calc(-100% + 16rem)",
          transition: {
            type: "tween",
            ease: "linear",
            duration: 15,
          },
        }}
        {...imgProps}
      />
    </picture>
  );
};
