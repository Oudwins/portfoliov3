import type { ResponsiveViews } from "../../../data";
import type { ProjectAsset as TProjectAsset } from "../../../data";
import Image from "../Image";
import ScrollingImage from "./ScrollingImage";

interface Props {
  asset: TProjectAsset;
  currentView?: ResponsiveViews;
  className?: string;
  onLoad?: () => void;
}

export default function ProjectAsset({
  asset,
  currentView = "desktop",
  className = "",
  onLoad,
}: Props) {
  if (asset.type === "image") {
    return (
      <Image src={asset.img} className={className} alt="" onLoad={onLoad} />
    );
  }

  const viewToUse: ResponsiveViews = ((): ResponsiveViews => {
    const candidate = asset.imgs[currentView];
    if (candidate) return currentView;
    if (asset.imgs.default) return asset.imgs.default;
    if (asset.imgs.desktop) return "desktop";
    if (asset.imgs.tablet) return "tablet";
    return "phone";
  })();

  const src = asset.imgs[viewToUse as ResponsiveViews] as string | undefined;
  const alt = asset.imgs.alt || "";
  const maxWidth = viewToUse === "phone" ? 640 : undefined;

  return src ? (
    asset.disableScrollImage ? (
      <Image
        src={src}
        className={className}
        alt={alt}
        maxWidth={maxWidth}
        onLoad={onLoad}
      />
    ) : (
      <ScrollingImage
        src={src}
        className={className}
        alt={alt}
        maxWidth={maxWidth}
        onLoad={onLoad}
      />
    )
  ) : null;
}
