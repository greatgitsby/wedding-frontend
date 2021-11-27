import Image from "next/image";

function CreateNewImgixLoader(
  imageHeight: number,
  imageWidth: number,
  fit: string
): any {

  return ({
    src,
    width,
    quality
  }: any): string => {
    const url = new URL(src);

    url.searchParams.set("auto", "format");
    url.searchParams.set("w", (imageWidth*2).toString());
    url.searchParams.set("h", (imageHeight*2).toString());
    url.searchParams.set("fit", fit);
    url.searchParams.set("quality", quality || 75);

    return url.href;
  }
}

export default function ImgixImage({
  src,
  width,
  height,
  quality,
  fit
}) {

  const loader = CreateNewImgixLoader(height, width, fit);

  return (
    <Image
      loader={loader}
      src={src}
      width={width}
      height={height}
      quality={quality}
    />
  )
}