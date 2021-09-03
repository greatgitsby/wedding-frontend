interface ImageWithBlurEncoding {
  fileName: string;
  relativePath: string;
  width: number;
  height: number;
  imgBase64: string;
}

async function generateImageMetadata(basePath: string, placeholderWidth: number, images: string[]): Promise<ImageWithBlurEncoding[]> {
  const sharp = (await import("sharp")).default;
  const path = await import("path");

  const theImages: ImageWithBlurEncoding[] = [];

  for (const filename of images) {
    const fullPath = basePath + "/" + filename;

    const sharpImg = sharp(fullPath);
    const meta = await sharpImg.metadata();

    const imgAspectRatio = (meta.width || 1) / (meta.height || 1);
    const placeholderImgHeight = Math.round(placeholderWidth / imgAspectRatio);

    const imgBase64 = await sharpImg
      .resize(placeholderWidth, placeholderImgHeight)
      .toBuffer()
      .then(
        buffer => `data:image/${meta.format};base64,${buffer.toString('base64')}`
      );
 
    theImages.push({
      fileName: path.basename(fullPath),
      // Strip public prefix, /public is / in Nextjs runtime environment
      relativePath: path
        .relative(process.cwd(), fullPath)
        .substring('public'.length),
      width: meta.width || 1,
      height: meta.height || 1,
      imgBase64
    });
  }

  return theImages;
}

export interface AuthFlowImageProps {
  images: ImageWithBlurEncoding[];
}

export async function getImageProps() {
  const fs = await import("fs");
  const md5 = (await import("md5")).default;

  const basePath = "public/img/portraits";
  const placeholderWidth = 20;
  let theImages: ImageWithBlurEncoding[] = [];

  const images: string[] = fs.readdirSync(basePath).filter((f) => {
    return !f.startsWith(".");
  }).sort();

  const hash = md5(images.join());
  const hashFile = "public/"+hash+".json";

  if (!fs.existsSync(hashFile)) {
    theImages = await generateImageMetadata(basePath, placeholderWidth, images);
    fs.writeFileSync(hashFile, JSON.stringify(theImages, null, 2));
  } else {
    theImages = JSON.parse(fs.readFileSync(hashFile).toString());
  }

  return {
    props: {
      images: theImages,
    },
  };
}