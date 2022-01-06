import Image, { ImageLoader } from "next/image";

interface ImgixImageProps {
  src: string;
  width: number;
  height: number;
  quality: number;
  fit: string;
};

function CreateNewImgixLoader(
  imageWidth: number,
  imageHeight: number,
  fit: string
): ({ src, quality }: ImgixImageProps) => string {

  return ({
    src,
    quality
  }: ImgixImageProps): string => {
    const url = new URL(src);

    url.searchParams.set("auto", "format");
    url.searchParams.set("w", (imageWidth*0.95).toString());
    url.searchParams.set("h", (imageHeight*2.25).toString());
    url.searchParams.set("fit", fit);
    url.searchParams.set("quality", quality.toString() || (75).toString());

    return url.href;
  }
}

export default function ImgixImage({
  src,
  width,
  height,
  quality,
  fit
}: ImgixImageProps) {

  // Return closure of new image loader
  const loader = CreateNewImgixLoader(height, width, fit);

  return (
    <Image
      loader={loader as ImageLoader}
      src={src}
      width={width}
      height={height}
      quality={quality}
    />
  )
}